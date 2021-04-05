import React from 'react';
import styles from './OneMassage.module.css';

export default function OneMassage({text,name,ava}) {
    return (
        <div key={new Date()}>
            <h3>{name}</h3>
            <div className={styles.wapp}>
                <img src={ava} alt="jpg"/>
                <div className={styles.massage}>
                    {text}
                </div>
            </div>

        </div>
    )
}
