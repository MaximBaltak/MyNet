import React from 'react'
import { NavLink } from 'react-router-dom'
import stylse from './WindowMassage.module.css'
export default function WindowMassage({close}) {

    return (
        <div  onMouseOut={()=>close()} className={stylse.window}>
            <NavLink className={stylse.a} to="/massages"><span>Написать сообщение</span></NavLink>
        </div>
    )
}
