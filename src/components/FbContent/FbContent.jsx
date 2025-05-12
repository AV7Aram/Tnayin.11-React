import React from 'react'
import style from './FbContent.module.css'
import { useState } from "react";
import { FbHeader } from '../FbHeader/FbHeader'
import { RegisterModal } from "../RegisterModal/RegisterModal";
import { LoginForm } from "../LoginForm/LoginForm";
import { FbUserInfo } from "../FbUserInfo/FbUserInfo";

export const FbContent = () => {
    const [users, setUsers] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [loginError, setLoginError] = useState("");
  
    const handleRegister = (newUser) => {
      setUsers((prev) => [...prev, newUser]);
      setShowModal(false);
    };
  
    const handleLogin = (email, password) => {
      const foundUser = users.find(
        (u) => u.email === email && u.password === password
      );
      if (foundUser) {
        setLoggedInUser(foundUser);
        setLoginError("");
      } else {
        setLoggedInUser(null);
        setLoginError("Incorrect username or password. ❌");
      }
    };

    return (
        <div className={style.fbContainer}>
            <FbHeader />
            <LoginForm
                onLogin={handleLogin}
                onOpenRegister={() => setShowModal(true)}
                loginError={loginError}
                loginSuccess={loggedInUser}
            />

            {showModal && (
                <RegisterModal onClose={() => setShowModal(false)} onRegister={handleRegister} />
            )}

            {loggedInUser && <FbUserInfo user={loggedInUser} />}
        </div>
    )
}
