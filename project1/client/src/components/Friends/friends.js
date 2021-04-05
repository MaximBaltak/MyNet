import React from 'react'
import FriendContainer from './Friend/FriendContainer'
import styles from './Friends.module.css'
import SearchFredsContainer from './SearchFriends/SearchFrendsContainer'
export default function Friends({frends}) {
console.log(frends)
    return (
        <div>
            <h2 className={styles.title}>Моих друзей <span>{frends.myFriends.length}</span></h2>
            <SearchFredsContainer/>
            <div className={styles.friends}>
                <FriendContainer frends={frends} />
            </div>
        </div>
    )
}
