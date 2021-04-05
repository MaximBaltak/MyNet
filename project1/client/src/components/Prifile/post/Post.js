import ava from './../../../img/ava.jpg';
import stylse from './Post.module.css';

const Post=({text})=>{
    console.log(text)
    return(
        <>
            <li className={stylse.post}><img src={ava} alt="png"/><p>{text}</p></li>
        </>       
    )
}
export default Post;