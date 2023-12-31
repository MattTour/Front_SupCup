import React from "react";

const RegisterTab = () => {
  return (
    <div className="login-tab">
        <form action="#" method="post">
            <div class="mb-4 mt-2">
                <div class="mb-2">
                    <label>Votre adresse Email</label>
                </div>
                <div>
                    <input class="account-input" type="text" placeholder="Entrez votre email..." name="email" required></input>
                </div>
            </div>
            <div class="mb-4">
                <div class="mb-2">
                    <label>Votre mot de passe</label>
                </div>
                <div>
                    <input class="account-input" type="password" placeholder="Entrez votre mot de passe..." name="password" required></input>
                </div>
            </div>
            <div class="mb-4">
                <div class="mb-2">
                    <label>Confirmez votre mot de passe</label>
                </div>
                <div>
                    <input class="account-input" type="password" placeholder="Confirmez votre mot de passe..." name="confirmPassword" required></input>
                </div>
            </div>
            <div class="mb-4">
                <div class="mb-2">
                    <label>Votre Nom</label>
                </div>
                <div>
                    <input class="account-input" type="text" placeholder="Entrez votre nom..." name="lastname" required></input>
                </div>
            </div>
            <div class="mb-4">
                <div class="mb-2">
                    <label>Votre Prénom</label>
                </div>
                <div>
                    <input class="account-input" type="text" placeholder="Entrez votre prénom..." name="firstname" required></input>
                </div>
            </div>
            <div class="mb-4">
                <div class="mb-2">
                    <label>Téléphone</label>
                </div>
                <div>
                    <input class="account-input" type="tel" placeholder="Entrez votre téléphone..." name="phone" required></input>
                </div>
            </div>
            <div class="center">
                <button class="btn-submit btn" type="submit">CREER UN COMPTE</button>
            </div>
        </form>
    </div>
  );
};
export default RegisterTab;