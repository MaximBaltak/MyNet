import ava from './../../img/ava.jpg';
import Post from './post/Post';
import fon from './../../img/fon.jpg';
import stylse from './Profile.module.css';
import NewPostContainer from './newPost/NewPostContainer';
const Profile = ({posts}) => {
   
    return (
    <div >
        <img  className={stylse.fon} src={fon} alt="png"/>
        <div className={stylse.profile}>
            <div className={stylse.wapp}>
                <img src={ava} alt="jpg"/>
                <div className={stylse.info}>
                    <span className={stylse.nick}>Максим</span><br/><span>Страна: Российская Федерация,</span><br/><span>Город: Калининград</span><br/><span>Обрзование: Среднее-специальное</span>
                </div>
            </div>
            <NewPostContainer/>
            <ul>
                {posts.map(el=><Post  text={el}/>)} 
            </ul>
        </div>   
    </div>
    )
}

export default Profile;