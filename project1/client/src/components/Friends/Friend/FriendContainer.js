import React from 'react'
import Friend from './Friend'

export default function FriendContainer({frends}) {
 
    if (frends.searchFriends==='') {
        return (
            <>
                {frends.myFriends.map(name=><Friend name={name}/>)}
            </>
        )
    }else {
        
        return (
            <>
                {frends.newFriends.map(name=><Friend name={name}/>)}
            </>
        )
    }
    
    
}
