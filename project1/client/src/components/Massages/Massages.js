import { NavLink, Route } from 'react-router-dom';
import Contact from './contact/Contact';
import Massage from './Massage/Massage';
import styles from './Massages.module.css';
import NewMassageContainer from './NewMassage/NewMassage.Container';
import UserMassage from './UserMassage/UserMassage';

function Massages({massagesPage, click}) {

    return (
        <div className={styles.gread}>
            <div className={styles.list}>
                <h2>Контакты</h2>
            <ul className={styles.contacts}>
                {massagesPage.massage.map(item=> <NavLink to={`/massages/${item.id}`} activeClassName={`${styles.active}`}><Contact ava={item.ava} name={item.name}/></NavLink>)}       
            </ul>
            </div>
            <div className={styles.massages}>
                <h2>Сообщения</h2>
                <div className={styles.massage}>
                    <div>
                        {massagesPage.massage.map(item=>< Route path={`/massages/${item.id}`}> <Massage ava={item.ava} name={item.name} text={item.massage}/></ Route>)}  
                        {massagesPage.userMassage.map(item=><UserMassage name={massagesPage.massage[1].name} ava={massagesPage.massage[1].ava} text={item}/>)}
                    </div>
                </div>
            </div>
            <NewMassageContainer  click={click}/>
        </div>
    )
}

export default Massages
