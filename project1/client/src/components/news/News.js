
import React from 'react'
import NewNewsContainer from './NewNews/NewNewsContainer'
import styles from './News.module.css'
import OneNews from './OneNews/OneNews'
import loading from'./../../img/loading.gif'

export default function News({allNews,close,open,value,loadingValue}) {
    
   console.log(value)

    
    return (
        <div className={styles.wap}>
                 {loadingValue===true? <img src={loading} className={styles.loading} alt="gif"/>: null }
        <button className={styles.buttonUpdate}>Обновить</button>             
        <button onClick={open} className={styles.button}>Добвить Новость</button>
        
        {value===true? <NewNewsContainer close={close} />:null }
        <div className={styles.news}> 
            {allNews.map(el=><OneNews key={el.id} news={el}/>)}
        </div>
        </div>
    )
}
