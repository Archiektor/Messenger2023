import React from "react";
import './ProfileInfo.css';
import BackgroundImage from "../../../img/gregory-gomez-OqgeSOpM1UE-unsplash.jpg";
import LichKing from "../../../img/tlk.webp";

const ProfileInfo = () => {
    return (
        <React.Fragment>
            <div className={'bg-wrapper'}>
                <img className={'bg-wrapper__img'}
                     src={BackgroundImage}
                     alt="profileBackgroundImage"/>
            </div>
            <div className={'person'}>
                <div className={'person__logo-wrapper'}>
                    <img className={'person__logo'} src={LichKing} alt="personLogo"/>
                </div>
                <div className={'person__data'}>
                    <ul className={'data-wrapper'}>
                        <li className={'data-wrapper__name'}>Nikki Odd</li>
                        <li className={'data-wrapper__dateBirth'}>22.12.1991</li>
                        <li className={'data-wrapper__city'}>Szczecin</li>
                        <li className={'data-wrapper__education'}>BNTU</li>
                        <li className={'data-wrapper__website'}>www.szcz.com</li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ProfileInfo;