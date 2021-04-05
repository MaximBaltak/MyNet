import { connect } from "react-redux";
import NewPosts from "./NewPosts";


let mapStateToProps=(state)=>{
    
    return{
        updatePost: state.profilePage.newPost,
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        text: (e)=> dispatch({type: 'NEW-POST-CHANGE',newText: e.target.value,}),
        
        click: ()=>dispatch({ type: 'ADD-POST',}),

    }
}


const NewPostContainer=connect(mapStateToProps,mapDispatchToProps)(NewPosts);



export default NewPostContainer