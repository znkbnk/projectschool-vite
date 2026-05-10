import React from "react";
import { auth } from "../components/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import ChatBox from "./ChatBox";
import LiveChatWelcome from "./LiveChatWelcome";
import Navbar from "../components/Navbar";
import "../styles/livechat.css";

function LiveChat() {
  const [user] = useAuthState(auth);

  return (
    <div id='livechat-container'>
      <Navbar />
      <div className='App'>{!user ? <LiveChatWelcome /> : <ChatBox />}</div>
    </div>
  );
}

export default LiveChat;
