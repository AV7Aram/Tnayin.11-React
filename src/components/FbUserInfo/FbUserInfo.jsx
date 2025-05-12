import React from "react";
import style from "./FbUserInfo.module.css";

export const FbUserInfo = ({ user }) => {
    if (!user) {
        return <div className={style.placeholder}>No data submitted yet.</div>;
    }

    return (
        <div className={style.userDetails}>
            <h2>👤 User Details</h2>
            <p><strong>First Name:</strong> {user.firstName}</p>
            <p><strong>Last Name:</strong> {user.LastName}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Birthday:</strong> {user.birthday}</p>
        </div>
    );
};
