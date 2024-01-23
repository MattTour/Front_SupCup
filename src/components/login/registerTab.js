import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

async function RegisterUser(email, password, lastname, firstname, phone) {
    return fetch('http://localhost:5001/user/create',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
        },    
        body: new URLSearchParams({
            'email': email,
            'password': password,
            'first_name': firstname,
            'last_name': lastname,
            'telephone': phone
        })
    })
    .then(data => {
        if (data.ok) {
            return data.json();
        }

        return null;
    });
}

const RegisterTab = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [firstname, setFirstName] = useState();
    const [lastname, setLastName] = useState();
    const [telephone, setTelephone] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const createUser = await RegisterUser(
            email,
            password,
            lastname,
            firstname,
            telephone
        );
        if (createUser !== null) {
            navigate('/login?register=true');
        } else {
            navigate('/login?register=false');
        }
        // TO-DO : Ajouter affichage si token null pour prévenir que register fail !!
    }

    return (
        <div className="login-tab">
            <form onSubmit={handleSubmit}>
                <div className="mb-4 mt-2">
                    <div className="mb-2">
                        <label>Votre adresse Email</label>
                    </div>
                    <div>
                        <input onChange={(e)=>setEmail(e.target.value)} className="account-input" type="text" placeholder="Entrez votre email..." name="email" required></input>
                    </div>
                </div>
                <div className="mb-4">
                    <div className="mb-2">
                        <label>Votre mot de passe</label>
                    </div>
                    <div>
                        <input onChange={(e)=>setPassword(e.target.value)} className="account-input" type="password" placeholder="Entrez votre mot de passe..." name="password" required></input>
                    </div>
                </div>
                <div className="mb-4">
                    <div className="mb-2">
                        <label>Votre Nom</label>
                    </div>
                    <div>
                        <input onChange={(e)=>setLastName(e.target.value)} className="account-input" type="text" placeholder="Entrez votre nom..." name="lastname" required></input>
                    </div>
                </div>
                <div className="mb-4">
                    <div className="mb-2">
                        <label>Votre Prénom</label>
                    </div>
                    <div>
                        <input onChange={(e)=>setFirstName(e.target.value)} className="account-input" type="text" placeholder="Entrez votre prénom..." name="firstname" required></input>
                    </div>
                </div>
                <div className="mb-4">
                    <div className="mb-2">
                        <label>Téléphone</label>
                    </div>
                    <div>
                        <input onChange={(e)=>setTelephone(e.target.value)} className="account-input" type="tel" placeholder="Entrez votre téléphone..." name="phone" required></input>
                    </div>
                </div>
                <div className="center mb-3">
                    <button className="btn-submit btn" type="submit">CREER UN COMPTE</button>
                </div>
            </form>
        </div>
    );
};
export default RegisterTab;