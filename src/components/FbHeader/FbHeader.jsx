import React from 'react'
import style from './FbHeader.module.css'
import Logo from '../../assets/fbLogo.svg'

export const FbHeader = () => {
    return (
        <div className={style.fbHeader}>
            <div className={style.fbRight}>
                <img src={Logo} alt="Facebook Logo" className={style.fbLogo} />
            </div>
            <h2 className={style.fbTitle}>Connect with friends and the world around you on Facebook.</h2>
        </div>
    )
}
