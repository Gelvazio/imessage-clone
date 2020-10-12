/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;
* Projeto iMessage Clone;
*/
import React from 'react'
import './message.css'

import { Avatar } from '@material-ui/core'

function Message({ id, contents: { timestamp, displayName, email, message, photo, uid } }) {
    return (
        <div className="messages" >
            <Avatar 
                src={photo}
                alt={displayName}
            />
            <p>{message}</p>
            <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
        </div>
    )
}

export default Message
