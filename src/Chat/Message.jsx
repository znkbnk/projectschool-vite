import React from "react";
import { auth } from "../components/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Message = ({ message }) => {
  const [user] = useAuthState(auth);

  // Function to format the message date
  const formatDate = (timestamp) => {
    if (!timestamp || !timestamp.seconds) {
      return "Invalid Date";
    }

    const seconds = timestamp.seconds;
    const nanoseconds = timestamp.nanoseconds || 0; // nanoseconds are optional

    // Construct a new Date object using seconds and optional nanoseconds
    const date = new Date(seconds * 1000 + nanoseconds / 1000000);

    if (isNaN(date.getTime())) {
      return "Invalid Date";
    } else {
      const options = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      };
      return date.toLocaleDateString("en-GB", options);
    }
  };

  return (
    <div className={`chat-bubble ${message.uid === user?.uid ? "right" : ""}`}>
      <div className='chat-bubble__right'>
        <p className='message-date'>{formatDate(message.createdAt)}</p>
        <p className='user-name'>{message.name}:</p>
        <p className='user-message'>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;