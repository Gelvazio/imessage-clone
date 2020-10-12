/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;
* Projeto iMessage Clone;
*/
import React from 'react'
import './sidebarchat.css'

import { setChat } from '../../features/chatSlice'
import { useDispatch } from 'react-redux'

import { Avatar } from '@material-ui/core'

function SidebarChat({ id, chatName }) {
    const dispatch = useDispatch()

    return (
        <div
            onClick={() =>
                dispatch(
                    setChat({
                        chatId: id,
                        chatName: chatName,
                    })
                )
            }
            className="sidebarchat"
        >
            <Avatar />

            <div className="sidebarchat__info">
                <h3>{chatName}</h3>
                <p>Enviar mensagem...</p>
                <small>21:00:00</small>
            </div>
        </div>
    )
}

export default SidebarChat

