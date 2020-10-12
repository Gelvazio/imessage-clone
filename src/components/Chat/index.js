/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;
* Projeto iMessage Clone;
*/
import React, { useEffect, useState } from 'react'
import './chat.css'

import { useSelector } from 'react-redux'
import { selectChatId, selectChatName } from '../../features/chatSlice'
import { selectUser } from '../../features/userSlice'
import db from '../../conexao/firebase'
import firebase from 'firebase'

import Message from '../Message'

import MicNoneIcon from '@material-ui/icons/MicNone'
import { IconButton } from '@material-ui/core'

function Chat() {
    const user = useSelector(selectUser)
    const chatName = useSelector(selectChatName)
    const chatId = useSelector(selectChatId)

    const [input, setInput] = useState("")
    const [messages, setMessages] = useState([])

    useEffect(() => {
        if (chatId) {
            db.collection("chats").doc(chatId).collection("messages").orderBy("timestamp", "desc").onSnapshot((snapshot) =>
                setMessages(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }))
                )
            )
        }

    }, [chatId])

    const sendMessage = (e) => {
        e.presentDefault()

        db.collection("chats").doc(chatId).collection("messages").add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            uid: user.uid,
            photo: user.photo,
            email: user.email,
            displayName: user.displayName,
        })

        setInput("")
    }

    return (
        <div className="chat" >
            <div className="chat__header">
                <h4>
                    Para: <span className="chat__name" >{chatName}</span>
                </h4>
                <strong>Detalhes</strong>
            </div>

            <div className="chat__messages">
                {messages.map(({ id, data }) => (
                    <Message
                        key={id}
                        contents={data}
                    />
                ))}
            </div>

            <div className="chat__input">
                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        type="text"
                        placeholder="iMessage"
                    />
                    <button onClick={sendMessage} >Enviar Mensagem</button>
                </form>

                <IconButton>
                    <MicNoneIcon
                        size={30}
                    />
                </IconButton>
            </div>
        </div>
    )
}

export default Chat
