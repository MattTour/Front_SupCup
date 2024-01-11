import React, {useState} from "react";
import useToken from "../../services/useToken";

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
    }).then(data => data.json());
}

const LoginTab = () => {
    const {token, setToken} = useToken();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = await LoginUser(
            email,
            password
        );
        setToken(token);
    }
  return (
    <div className="login-tab">
        <form onSubmit={handleSubmit}>
            <div class="mb-4 mt-2">
                <div class="mb-2">
                    <label>Adresse Email</label>
                </div>
                <div>
                    <input onChange={(e)=>setEmail(e.target.value)} class="account-input" type="text" placeholder="Entrez votre email..." name="email" required></input>
                </div>
            </div>
            <div class="mb-2">
                <div class="mb-2">
                    <label>Mot de passe</label>
                </div>
                <div>
                    <input onChange={(e)=>setPassword(e.target.value)} class="account-input" type="password" placeholder="Entrez votre mot de passe..." name="password" required></input>
                </div>
            </div>
            <div class="forgot-pwd mb-4"><a href="/">Mot de passe oublié</a></div>
            <div class="center mb-3">
                <button class="btn-submit btn" type="submit">SE CONNECTER</button>
            </div>
        </form>
    </div>
  );
};

export default LoginTab;
