import React from 'react';
import OneMassage from './OaneMassage/OneMassage';

export default function Massage({text,ava,name}) {
    return (
        <div key={new Date()}>
        {text.map(item=> <OneMassage ava={ava} text={item} name={name} />)}
        
        </div>
    )
}
