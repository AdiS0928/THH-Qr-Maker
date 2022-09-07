import './registration.scss'
import React from 'react';
import firebase from '../../firebase/firebase';
import {useNavigate} from 'react-router-dom'
import axios from "axios"
import { useState } from 'react';
import QRCode from 'qrcode'

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
            QRCode.toDataURL(data.id, {
                width: 800,
                height: 400,
                margin: 2,
                color: {
                    dark: '#335383FF',
                    light: '#EEEEEEFF'
                }
            }, (err, id) => {
                if (err) return console.error(err)
    
                console.log(id)
                setQr(id)
                navigate('/qr',{state: {id:data.id, to:text, tt:tt, qr:id}})
            })


            
           
    
            setSent(true)
            
            
        })

   
    }

    return(
        <div className='main'>
            <form className="form" onSubmit={saveUsers}>
                <h1> Registration</h1>
                <input placeholder='Enter Name' required>

                </input>


                <input placeholder='Enter Email' type="email"  onChange={(e) => setText(e.target.value)} required>

                </input>


                <input placeholder='Enter Profession' required>

                </input>



                <input placeholder='Enter Mobile No.' required>

                </input>

                <button id="signup" name="signup" type="submit" className="btn btn-primary" >Register</button>
            </form>
        </div>
    )
}

export default Registration;