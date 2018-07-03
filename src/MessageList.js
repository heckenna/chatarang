import React from 'react';

import Message from './Message';

const MessageList = () => {
    const messages = [
        { 
            id: 1,
            user: {
                uid: 'sambojambo',
                displayName: 'Noah',
                email: 'heckenna@rose-hulman.edu'
            },
            body: "Chat",
        },

        { 
            id: 2,
            user: {
                uid: 'abacaba',
                displayName: 'Heckenlively',
                email: 'heckers@rose-hulman.edu'
            },
            body: "Campers",
        },
    ]

    return(
        <div className="MessageList">
            { messages.map(msg  => (
                    <Message message={msg} key={msg.id}/>
                )) 
            }
        </div>
    )
}

export default MessageList;
