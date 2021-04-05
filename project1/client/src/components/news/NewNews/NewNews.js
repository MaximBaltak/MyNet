import React, { useState } from 'react';
import styles from './NewNews.module.css'
import classNames from 'classnames';

export default function NewNews({close,titleChange,textChange,titleNewChange,textNewChange,click}) {
    
    let [file, setFile]=useState('')
    let changeFile=(e)=>{
        
        setFile(e.target.files[0])
    }
    
    return (
        <div className={styles.window}>
            <input className={styles.title} type="text" onChange={(e)=>titleNewChange(e.target.value)} value={titleChange}  placeholder="Заголовок"/>
            <input  className={styles.file} onChange={changeFile} accept='image/jpeg,image/png' type="file" id='file_style'/>
            <label className={styles.file_style} htmlFor="file_style">Выбирите файл</label>
            <textarea className={styles.text } onChange={(e)=>textNewChange(e.target.value)} value={textChange} placeholder="Новость" cols="30" rows="10"></textarea>
            <button onClick={()=>click(file,titleChange,textChange)} className={styles.button}>Добавить</button>
            <button onClick={()=>close()} className={classNames(styles.button,styles.close)}>Закрыть</button>
        </div>
    )
}
