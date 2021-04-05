import React from 'react';
import styles from './UserMassage.module.css'

export default function UserMassage({name,ava,text}) {
    return (
        <div key={new Date()}>
            <h3 className={styles.title}>{name}</h3>
            <div className={styles.wapp}>
                <img src={ava} alt="jpg"/>
                <div className={styles.massage}>
                    {text}
                </div>
            </div>
        </div>
    )
}
