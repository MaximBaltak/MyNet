
import stylse from './NewPosts.module.css';


const NewPosts=({updatePost,text,click})=>{
   
    return(
        <div className={stylse.Posts}>
            <p><i>Новый пост</i></p>
            <input onChange={text} type="text" value={updatePost} placeholder="Что нового?"/>
            <button onClick={click}>Отправить</button>
        </div>
    )
}
export default NewPosts;