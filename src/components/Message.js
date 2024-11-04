// src/components/Message.js
import React from 'react';

function Message({ sender, content, timestamp }) {
  return (
    <div className="message">
      <div className="message-header">
        <strong>{sender}</strong>
        <span>{new Date(timestamp).toLocaleString()}</span>
      </div>
      <p>{content}</p>
    </div>
  );
}

export default Message;
