let inishialSate= {
    myFriends:['Ангелина','Агнета','Никита','Максим','Алексей','Агнеса',],
    searchFriends: '',
    newFriends:[],
}
    
const friendsReducer=(state=inishialSate,action={type: 'MY-FRIENDS-SEARCH' })=>{
    let stateCopy={...state}
    switch(action.type){
        
        case 'SEARCH-FRIENDS':
            stateCopy.searchFriends=action.text;
        return stateCopy;
        case 'MY-FRIENDS-SEARCH':
            state.newFriends=[...state.newFriends]
            stateCopy.newFriends=[];

            stateCopy.myFriends.forEach(name=>{
            if (name.includes(stateCopy.searchFriends)) {      
                        stateCopy.newFriends.push(name)
            }});               
            
            if (stateCopy.searchFriends==='') {
                stateCopy.newFriends=[]
            }
            return stateCopy
            
        default: 
        return state;
    }

}


export default friendsReducer