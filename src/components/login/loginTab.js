import React, {useState} from "react";
import useToken from "../../services/useToken";
import { useNavigate } from "react-router-dom";

async function LoginUser(email, password) {
    return fetch('http://localhost:5001/user/login',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
        },    
        body: new URLSearchParams({
            'email': email,
            'password': password
        })
    })
    .then(data => {
        if (data.ok) {
            return data.json();
        }

        return null;
    });
}

const LoginTab = () => {
    const navigate = useNavigate();
    const {setToken} = useToken();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = await LoginUser(
            email,
            password
        );
        if (token !== null) {
            setToken(token);
            navigate('/profil');
        } else {
            navigate('/login?connexion=false');
        }
        // TO-DO : Ajouter affichage si token null pour prévenir que mail ou mdp incorrect !!
    }
    return (
        <div className="login-tab">
            <form onSubmit={handleSubmit}>
                <div className="mb-4 mt-2">
                    <div className="mb-2">
                        <label>Adresse Email</label>
                    </div>
                    <div>
                        <input onChange={(e)=>setEmail(e.target.value)} className="account-input" type="text" placeholder="Entrez votre email..." name="email" required></input>
                    </div>
                </div>
                <div className="mb-2">
                    <div className="mb-2">
                        <label>Mot de passe</label>
                    </div>
                    <div>
                        <input onChange={(e)=>setPassword(e.target.value)} className="account-input" type="password" placeholder="Entrez votre mot de passe..." name="password" required></input>
                    </div>
                </div>
                <div className="forgot-pwd mb-4"><a href="/">Mot de passe oublié</a></div>
                <div className="center mb-3">
                    <button className="btn-submit btn" type="submit">SE CONNECTER</button>
                </div>
            </form>
        </div>
    );
};

export default LoginTab;
