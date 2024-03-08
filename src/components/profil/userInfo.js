import profil_pic from "../../img/profil_pic.png"
import { useState, useEffect } from 'react';

const UserInfo = ({token}) => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5001/user/profil',{
            method: 'GET',
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
                'token': token
            }
        })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setUser(data);
        });
    }, [token]);
    return (
        <div className="profil-info mb-5">
            <div className="inline-flex">
                <img src={profil_pic} className="profil-pic" alt="User profile pic"></img>
                <div className="profil-info-text">
                    <div className="title">{user.first_name} {user.last_name}</div>
                    <div className="txt-20 fw-bold">{user.email}</div>
                </div>
            </div>
        </div>
    )
}

export default UserInfo;
