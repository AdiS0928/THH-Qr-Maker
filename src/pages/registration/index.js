import './registration.scss'
import React from 'react';
import firebase from '../../firebase/firebase';
import {useNavigate} from 'react-router-dom'
import axios from "axios"
import { useState } from 'react';
import QRCode from 'qrcode'
import QrCodeWithLogo from "qrcode-with-logos";

const Registration = () =>{

    const navigate = useNavigate();
    const [sent, setSent] = useState(false);
    const [text,setText] = useState("hello");
    const [tt,setTt] = useState("hello");
    const [qr, setQr] = useState('')


    const Users = firebase.firestore().collection("Users")
    const saveUsers = async(e) =>{
        e.preventDefault();
        var count = 0;
        const element = [...e.target.elements];
        const data = {}
        element.forEach((value,key)=>{
            console.log(value.value)
            if(count === 0){
                data["Name"] = value.value;
            }
            else if(count === 1){
                data["Email"] = value.value;
            }
            else if(count === 2){
                data["Profession"] = value.value;
            }
            else if(count === 3){
                data["Number"] = value.value;
            }
            else if(count === 4){
                return;
            }
            count++;
        })

        Users.add(data).then(async (data) => {
            setTt("lolololol");
            // QRCode.toDataURL(data.id, {
            //     width: 800,
            //     height: 400,
            //     margin: 2,

            // }, (err, id) => {
            //     if (err) return console.error(err)
    
            //     console.log(id)
            //     setQr(id)
            //     navigate('/qr',{state: {id:data.id, to:text, tt:tt, qr:id}})
            // })

            let qrcode = new QrCodeWithLogo({
                canvas: document.getElementById("canvas"),
                content: data.id,
                width: 380,
                //   download: true,
                logo: {
                  src: "/thlogo.png"
                }
              });
               
              qrcode.getCanvas().then(canvas => {
                const dataURL = canvas.toDataURL()
                navigate('/qr',{state: {id:data.id, to:text, tt:tt, qr:dataURL}})
              });


            
           
    
            setSent(true)
            
            
        })

   
    }

    return(
        
        <div className='main'>
            
            <form className="form" onSubmit={saveUsers}>
                <img src='/thhlogoo.png' height='70' width='100'/>
                <h1> Registration</h1>
                <input placeholder='Enter Name' required>

                </input>


                <input placeholder='Enter Email' type="email"  onChange={(e) => setText(e.target.value)} required>

                </input>


                <input placeholder='Enter Profession' required>

                </input>



                <input placeholder='Enter Mobile No.' type="number" required>

                </input>

                <button id="signup" name="signup" type="submit" className="btn btn-primary" >Register</button>
                <canvas width='0' height='0' id='canvas' ></canvas>
            </form>

            
        </div>
    )
}

export default Registration;