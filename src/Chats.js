import React from "react";
import "./Chats.css";
import Chat from "./Chat"

const Chats = () => {
  return <div className="chats">
      <Chat
      name="Henry Cavill"
      message="Helloo .." 
      timestamp="6 mins ago" 
      profilePic="https://856596.smushcdn.com/1855360/wp-content/uploads/2020/03/Top-10-Worlds-Most-Handso-me-Men-in-2020-henry-cavill-fillgapnews-696x435.jpg?lossy=1&strip=1&webp=1"
      />
      <Chat
      name="Omar Borkan Al Gala"
      message="hii" 
      timestamp="1 hr ago" 
      profilePic="https://856596.smushcdn.com/1855360/wp-content/uploads/2020/03/Omar-Borkan-Al-Gala.jpg?lossy=1&strip=1&webp=1"/>
      <Chat
      name="Tom Cruise"
      message="Awooo" 
      timestamp="4 hrs ago" 
      profilePic="https://856596.smushcdn.com/1855360/wp-content/uploads/2020/03/tom-cruise-696x392.jpeg?lossy=1&strip=1&webp=1"/>
  </div>;
};

export default Chats;
