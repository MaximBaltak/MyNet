import { connect } from "react-redux";
import NewMassage from "./NewMassage";



let mapStateToProps=(state)=>{
    return{
        massagesPageChange: state.massagesPage.userMassageChange,
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{


         text:(e)=>{
            dispatch({
                type: "NEW-USER-MASSAGE-CHANGE",text: e.target.value,});
        },
         click:(e)=>{
       
            if (e.key ==='Enter'&& e.altKey===true) {
                dispatch({type: 'NEW-USER-MASSAGE',});   
            }
        },
    }
}




const NewMassageContainer=connect(mapStateToProps,mapDispatchToProps)(NewMassage);



export default NewMassageContainer