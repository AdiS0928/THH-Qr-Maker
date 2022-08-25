import './registration.scss'
import React from 'react';
import firebase from '../../firebase/firebase';
import {useNavigate} from 'react-router-dom'

const Registration = () =>{

    const navigate = useNavigate();

    const Users = firebase.firestore().collection("Users")
    const saveUsers = (e) =>{
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

        Users.add(data).then((data) => {
            navigate('/qr',{state: {id:data.id}})
        });
    }

    return(
        <div className='main'>
            <form className="form" onSubmit={saveUsers}>
                <h1> Registration</h1>
                <input placeholder='Enter Name'>

                </input>


                <input placeholder='Enter Email'>

                </input>


                <input placeholder='Enter Profession'>

                </input>



                <input placeholder='Enter Mobile No.'>

                </input>

                <button id="signup" name="signup" type="submit" className="btn btn-primary" >Register</button>
            </form>
        </div>
    )
}

export default Registration;