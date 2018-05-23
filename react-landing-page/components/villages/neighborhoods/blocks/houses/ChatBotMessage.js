import React from 'react';
import ReactDOM from 'react-dom';
class ChatBotMessage extends React.Component {
constructor(){
    super()
    this.state = {avatar: "", username: "", message: "", article: ""}
  }
}
render() {
    return (
      <div className="bot-message">
        <div style={{background: this.state.avatar}} className="bot-avatar"></div>
        <div className="username">{this.state.username}</div>
        <div className="message">{this.state.message}</div>
      </div>
    )
  }
}
module.exports = ChatBotMessage;
