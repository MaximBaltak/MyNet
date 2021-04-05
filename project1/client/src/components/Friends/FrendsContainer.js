import { connect } from "react-redux";
import Friends from "./friends";


let mapStateToProps=(state)=>{
    
    return{
        frends: state.friendsPage,
    }
}




const FrendsContainer=connect(mapStateToProps)(Friends);



export default FrendsContainer