let inishialSate={
    posts: ['text',],
    newPost: '',
}
const profileReducer=(state=inishialSate,action)=>{

    let stateCopy={...state}

    switch(action.type){
        case 'ADD-POST': 
        stateCopy.posts=[...state.posts]
        stateCopy.posts.unshift(state.newPost)
        stateCopy.newPost='';
        return stateCopy;
        case 'NEW-POST-CHANGE':
        stateCopy.newPost=action.newText;     
        return stateCopy;
        default: 
        return state;
    }

}
export default profileReducer 
