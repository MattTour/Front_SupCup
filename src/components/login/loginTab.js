import React from "react";

const LoginTab = () => {
  return (
    <div className="login-tab">
        <form action="#" method="post">
            <div class="mb-4 mt-2">
                <div class="mb-2">
                    <label>Adresse Email</label>
                </div>
                <div>
                    <input class="account-input" type="text" placeholder="Entrez votre email..." name="email" required></input>
                </div>
            </div>
            <div class="mb-2">
                <div class="mb-2">
                    <label>Mot de passe</label>
                </div>
                <div>
                    <input class="account-input" type="password" placeholder="Entrez votre mot de passe..." name="password" required></input>
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