import { connect } from "react-redux";
import Profile from "./Profile";

let mapStateToProps=(state)=>{
   
    return{
        posts: state.profilePage.posts,
    }
}




const ProfileContainer=connect(mapStateToProps)(Profile);



export default ProfileContainer;