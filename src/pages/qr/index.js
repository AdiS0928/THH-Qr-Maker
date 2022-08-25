import React from 'react';
import QRCode from 'react-qr-code';
import {useLocation} from 'react-router-dom'
const Qr = () =>{

    const {state} = useLocation();
    const {id} = state;

    console.log(id)
    return(
        <div className='main2'>
            <h1 className='head'>Your QR Code: -</h1>
            <QRCode value={id} className='' />
        </div>
    )
}

export default Qr;