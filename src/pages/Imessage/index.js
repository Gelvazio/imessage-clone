/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;
* Projeto iMessage Clone;
*/
import React from 'react'
import './imessage.css'

import Chat from '../../components/Chat'
import Sidebar from '../../components/Sidebar'

function Imessage() {
    return (
        <div className="imessage" >
            <Sidebar />
            <Chat />
        </div>
    )
}

export default Imessage
