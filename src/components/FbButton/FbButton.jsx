import React from 'react'
import style from './FbButton.module.css'

export const FbButton = () => {
    return (
        <>
            <div className={style.fbButton}>
                <button type="submit" className={style.fbSubmit}>Log In</button>
            </div>
            <div className={style.fbForgot}>
                <a href="#">Forgotten password?</a>
            </div>
            <div className={style.fbBorder}></div>
        </>
    )
}  