/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;
* Projeto iMessage Clone;
*/
import React, { useEffect, useState } from 'react'
import './sidebar.css'

import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import db, { auth } from '../../conexao/firebase'

import { Avatar, IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import RateReviewIcon from '@material-ui/icons/RateReview'

import SidebarChat from '../SidebarChat'

function Sidebar() {
    const user = useSelector(selectUser)
    const [chats, setChats] = useState([])

    const handleSignOut = () => {
        auth.signOut()
    }

    useEffect(() => {
        db.collection("chats")
        .onSnapshot((snapshot) =>
            setChats(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        )
    }, [])

    const handleAddChat = () => {
        const chatName = prompt("Por favor digite o nome do CANAL!")

        if (chatName) {
            db.collection("chats").add({
                chatName: chatName,
            })
        }
    }

    return (
        <div className="sidebar" >
            <div className="sidebar__header">
                <Avatar
                    src={user.photo}
                    onClick={handleSignOut}
                    className="sidebar__avatar"
                />
                <div className="sidebar__input">
                    <SearchIcon />
                    <input
                        placeholder="Buscar"
                    />
                </div>

                <IconButton
                    variant="outlined"
                    className="sidebar__inputButton"
                >
                    <RateReviewIcon
                        size={30}
                        onClick={handleAddChat}
                    />
                </IconButton>
            </div>

            <div className="sidebar__chats">
                {chats.map(({ id, data: { chatName } }) => (
                    <SidebarChat 
                        key={id}
                        id={id}
                        chatName={chatName}
                    />
                ))}
            </div>
        </div>
    )
}

export default Sidebar
