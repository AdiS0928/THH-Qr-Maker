import React from 'react';
// import QRCode from 'react-qr-code';
import {useLocation} from 'react-router-dom'
import axios from "axios"
import QRCode from 'qrcode'
import { useEffect } from 'react';
import { useState } from 'react';

const Qr = () =>{

    const {state} = useLocation();
    const {id,to,tt,qr} = state;

    const [url, setUrl] = useState('')


    useEffect(() =>{

        setTimeout(() => {
            sendMail();
          }, 2000);
        
    },[])

    const sendMail = () =>{
        try {
                
            axios.post("https://qrmakerserver.herokuapp.com/send_mail", {
               to,
               qr,
               tt
           })
       } catch (error) {
           console.log(error);
       }
    }

    console.log(id)
    return(
        <div className='main2'>
            <h1 className='head'>Your QR Code: -</h1>
            {/* <QRCode value={id} className='' /> */}
            <img src={qr} height="300" width="300" />
        </div>
    )
}

export default Qr;