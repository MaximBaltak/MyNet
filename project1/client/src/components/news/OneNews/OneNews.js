import React from 'react'
import styles from './OneNews.module.css'
export default function OneNews({news}) {
    return (
        <div className={styles.wap}>
            <p className={styles.date}>{news.date}</p>
            <img src={`data:image/jpeg;base64,${news.img}`} alt="jpg"/>
            <h2>{news.title}</h2>
            <p>{news.text}</p>
        </div>
    )
}
