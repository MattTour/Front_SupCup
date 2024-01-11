import escrimeImg from "../../img/profil_pic.png"

const UserInfo = () => {
    return (
        <div class="profil-info mb-5">
            <div class="inline-flex">
                <img src={escrimeImg} class="profil-pic" alt="User profile pic"></img>
                <div class="profil-info-text">
                    <div class="title">TOM CRUISE</div>
                    <div class="txt-20 fw-bold">Fan de basket</div>
                </div>
            </div>
        </div>
    )
}

export default UserInfo;
