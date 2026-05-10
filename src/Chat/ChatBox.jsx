import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";
import { db } from "../components/firebase";
import Message from "./Message";
import SendMessage from "./SendMessage";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt", "desc"),
      limit(50)
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const fetchedMessages = [];
      querySnapshot.forEach((doc) => {
        fetchedMessages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(fetchedMessages.reverse());
    });

    return () => unsubscribe();
  }, []);

  useLayoutEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "auto" });
    }
  }, [messages]);

  return (
    <main className='chat-box'>
      <div className='messages-wrapper'>
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
        <span ref={messagesEndRef}></span>
      </div>
      <SendMessage scroll={messagesEndRef} />
    </main>
  );
};

export default ChatBox;