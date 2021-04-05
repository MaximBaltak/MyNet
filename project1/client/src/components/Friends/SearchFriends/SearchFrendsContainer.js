import { connect } from "react-redux";
import SearchFriends from "./SearchFriends";



let mapStateToProps=(state)=>{
    return{
        frends: state.friendsPage,
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{

         change:(e)=>{
       
            let action={
                type: 'SEARCH-FRIENDS',
                text: e.target.value,
            }
            dispatch(action);
            dispatch({type: 'MY-FRIENDS-SEARCH',});
        },
    }
}




const SearchFredsContainer=connect(mapStateToProps,mapDispatchToProps)(SearchFriends);



export default SearchFredsContainer;