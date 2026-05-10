var e=[`
// src/components/Messages.js

// Messages.jsx
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import io from 'socket.io-client';
import '../styles/messages.css';

const Messages = ({ user }) => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [newMessage, setNewMessage] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showNewMessageForm, setShowNewMessageForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const socketRef = useRef(null);
  const chatEndRef = useRef(null);
  const selectedConversationRef = useRef(null);
  const backendUrl = process.env.REACT_APP_API_URL || "http://localhost:5001";

  useEffect(() => {
    selectedConversationRef.current = selectedConversation;
  }, [selectedConversation]);

  useEffect(() => {
    if (!user) {
      navigate('/auth');
      return;
    }

    socketRef.current = io(backendUrl, {
      withCredentials: true,
    });

    socketRef.current.on('connect', () => {
      socketRef.current.emit('join', user._id);
    });

    socketRef.current.on('connect_error', () => {
      setError('Failed to connect to messaging service');
    });

    socketRef.current.on('receiveMessage', (message) => {
      setMessages((prev) => {
        if (prev.some((msg) => msg._id === message._id)) return prev;
        return [...prev, message];
      });
    
      const currentSelected = selectedConversationRef.current;
      if (
        currentSelected &&
        (message.sender._id === currentSelected.user._id ||
          message.receiver._id === currentSelected.user._id)
      ) {
        setSelectedConversation((prev) => ({
          ...prev,
          messages: prev.messages.some((msg) => msg._id === message._id)
            ? prev.messages
            : [...prev.messages, message],
          lastMessage: message.sentAt,
        }));
      }
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [user, backendUrl, navigate]);

  useEffect(() => {
    const fetchMessages = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(\`\${backendUrl}/api/messages/\${user._id}\`, {
          credentials: 'include',
        });
        if (!response.ok) throw new Error('Failed to fetch messages');
        const data = await response.json();
        setMessages(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMessages();
  }, [user, backendUrl]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [selectedConversation]);

  const handleSearchUsers = async () => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }
  
    try {
      const response = await fetch(
        \`\${backendUrl}/api/users/search?query=\${encodeURIComponent(searchQuery)}&excludeId=\${user._id}\`,
        { credentials: 'include' }
      );
      if (!response.ok) {
        const errorText = await response.json();
        throw new Error(\`Failed to search users: \${errorText.message || 'Unknown error'}\`);
      }
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      setError(error.message);
    }
  };

  const startNewConversation = (receiver) => {
    const existingConversation = getConversations().find(
      (conv) => conv.user._id === receiver._id
    );

    if (existingConversation) {
      setSelectedConversation(existingConversation);
    } else {
      setSelectedConversation({
        user: receiver,
        messages: [],
        lastMessage: null,
      });
    }

    setShowNewMessageForm(false);
    setSearchQuery('');
    setSearchResults([]);
  };

  const getConversations = () => {
    const conversations = {};
    messages.forEach((message) => {
      const otherUserId = message.sender._id === user._id
        ? message.receiver._id
        : message.sender._id;
      const otherUser = message.sender._id === user._id ? message.receiver : message.sender;
  
      if (!conversations[otherUserId]) {
        conversations[otherUserId] = {
          user: {
            _id: otherUser._id,
            name: otherUser.name,
            email: otherUser.email,
          },
          messages: [],
          lastMessage: message.sentAt,
        };
      }
      conversations[otherUserId].messages.push(message);
      if (new Date(message.sentAt) > new Date(conversations[otherUserId].lastMessage)) {
        conversations[otherUserId].lastMessage = message.sentAt;
      }
    });
  
    return Object.values(conversations).sort((a, b) =>
      new Date(b.lastMessage) - new Date(a.lastMessage)
    );
  };

  const sendMessage = async (receiverId) => {
    if (!newMessage.trim()) return;

    const messageData = {
      sender: user._id,
      receiver: receiverId,
      content: newMessage,
    };

    try {
      setIsLoading(true);
      socketRef.current.emit('sendMessage', messageData);
      setNewMessage('');
    } catch (error) {
      setError(\`Failed to send message: \${error.message}\`);
    } finally {
      setIsLoading(false);
    }
  };

  const markAsRead = async (messageId) => {
    try {
      await fetch(\`\${backendUrl}/api/messages/\${messageId}/read\`, {
        method: 'PATCH',
        credentials: 'include',
      });
    } catch (error) {
      setError(\`Error marking message as read: \${error.message}\`);
    }
  };

  const conversations = getConversations();

  return (
    <div className="messages-container">
      {error && <div className="messages-error">{error}</div>}
      {isLoading && <div className="messages-loading">Loading...</div>}

      <div className="conversation-list">
        <h2 className="conversation-header">Conversations</h2>
        <button
          className="chat-send-button new-message-button"
          onClick={() => setShowNewMessageForm(!showNewMessageForm)}
        >
          {showNewMessageForm ? 'Cancel' : 'Start New Message'}
        </button>

        {showNewMessageForm && (
          <div className="new-message-form">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyUp={handleSearchUsers}
              className="chat-input-field"
              placeholder="Search by email or name..."
            />
            {searchResults.length > 0 && (
              <div className="search-results">
                {searchResults.map((result) => (
                  <div
                    key={result._id}
                    className="search-result-item"
                    onClick={() => startNewConversation(result)}
                  >
                    <span className="conversation-name">{result.name}</span>
                    <small className="conversation-email">{result.email}</small>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {conversations.length === 0 && !isLoading && !showNewMessageForm && (
          <p className="no-conversations">No conversations yet</p>
        )}
        {conversations.map((conv) => (
          <div
            key={conv.user._id}
            className={\`conversation-item \${
              selectedConversation?.user._id === conv.user._id ? 'active' : ''
            }\`}
            onClick={() => {
              setSelectedConversation({
                ...conv,
                messages: conv.messages.sort((a, b) => new Date(a.sentAt) - new Date(b.sentAt)),
              });
              conv.messages
                .filter((msg) => !msg.isRead && msg.receiver._id === user._id)
                .forEach((msg) => markAsRead(msg._id));
            }}
          >
            <div className='conversation-details'>
            <h4 className="conversation-name">{conv.user.name}</h4>
            <p className="conversation-email">{conv.user.email}</p>
            </div>
            <p className="conversation-preview">
              {conv.messages[conv.messages.length - 1].content.slice(0, 30)}
            </p>
            <small className="conversation-date">
              {new Date(conv.lastMessage).toLocaleDateString()}
            </small>
          </div>
        ))}
      </div>

      <div className="chat-window">
        {selectedConversation ? (
          <>
            <h3 className="chat-header">Chat with: {selectedConversation.user.name}</h3>
            <div className="chat-messages">
              {selectedConversation.messages.map((msg) => (
                <div
                  key={msg._id}
                  className={\`chat-message \${
                    msg.sender._id === user._id ? 'right' : 'left'
                  }\`}
                >
                  <div className={\`message-bubble \${msg.sender._id === user._id ? 'right' : 'left'}\`}>
                    {msg.content}
                  </div>
                  <div className="message-time">
                    {new Date(msg.sentAt).toLocaleTimeString()}
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>
            <div className="chat-input">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    sendMessage(selectedConversation.user._id);
                  }
                }}
                className="chat-input-field"
                placeholder="Type a message..."
                disabled={isLoading}
              />
              <button
                onClick={() => sendMessage(selectedConversation.user._id)}
                className="chat-send-button"
                disabled={isLoading}
              >
                Send
              </button>
            </div>
          </>
        ) : (
          <div className="chat-placeholder">
            <p>Please start a new conversation or select an existing one</p>
          </div>
        )}
      </div>
    </div>
  );
};

Messages.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    role: PropTypes.string,
  }),
};

export default Messages;
`];export{e as default};
//# sourceMappingURL=day35-ZBOqRtqw.js.map