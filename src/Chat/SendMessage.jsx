import React, { useState } from "react";
import { auth, db } from "../components/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
const SendMessage = ({ scroll }) => {
  const [message, setMessage] = useState("");

  const sendMessage = async (event) => {
    event.preventDefault();
    if (message.trim() === "") {
      alert("Enter a valid message");
      return;
    }

    const currentUser = auth.currentUser;
    let displayName = currentUser ? currentUser.email : "Anonymous";

    try {
      await addDoc(collection(db, "messages"), {
        text: message,
        name: displayName,
        avatar: null, // You may want to set a default avatar if needed
        createdAt: serverTimestamp(),
        uid: currentUser ? currentUser.uid : null,
        email: currentUser ? currentUser.email : null,
      });
      setMessage("");
      // Ensure scroll is defined before accessing current property
      scroll?.current?.scrollIntoView({ behavior: "smooth" });
    } catch (error) {
      console.error("Error sending message: ", error);
    }
  };

  return (
    <form onSubmit={(event) => sendMessage(event)} className='send-message'>
      <label jsfor='messageInput' hidden>
        Enter Message
      </label>
      <input
        id='messageInput'
        name='messageInput'
        type='text'
        className='form-input__input'
        placeholder='Type a message...'
        autoComplete='off'
        autoCorrect='off'
        spellCheck='false'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type='submit'>Send</button>
    </form>
  );
};

export default SendMessage;
