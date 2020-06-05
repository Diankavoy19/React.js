import React, { useState } from 'react';
import MessageContainer from './MessageContainer';
import SendMessageForm from './SendMessageForm';

function ChatField(props) {
    return(
        <section className="ChatField">
            <MessageContainer 
                members={props.members}
                messages={props.messages} 
            />
            <SendMessageForm onSendNewMessage={props.onSendNewMessage}/>
        </section>
    );
}
export default ChatField;
