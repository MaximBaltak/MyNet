import React from 'react'
import styles from './SearchFriends.module.css'
import search from './../../../img/search.svg'
export default function SearchFriends({frends,change}) {

    
    
    return (
        <>
            <input onChange={change} className={styles.search} value={frends.searchFriends} type="search" placeholder='Поиск друзей'/>
            <img className={styles.img} src={search} alt="svg"/>
        </>
    )
}
