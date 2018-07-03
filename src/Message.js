import React from 'react';

const Message = (props) => {
    return(
        <div className="Message">
            {props.message.user.displayname}: {props.message.body}
        </div>
    )
}

export default Message;