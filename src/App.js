/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;
* Projeto iMessage Clone;
*/
import React, { useEffect } from 'react'
import './app.css'

import { auth } from '../src/conexao/firebase'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectUser } from '../src/features/userSlice'

import SignIn from './pages/SignIn'
import Imessage from './pages/Imessage'

function App() {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                dispatch(
                    login({
                        uid: authUser.uid,
                        photo: authUser.photoURL,
                        email: authUser.email,
                        displayName: authUser.displayName,
                    }))
            } else {
                dispatch(logout())
            }
        })
    }, [dispatch])

    return (
        <div className="app">
            {user ? (
                <Imessage />
            ) : (
                <SignIn />
            )}
        </div>
    )
}

export default App
