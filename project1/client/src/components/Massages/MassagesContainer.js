import { connect } from "react-redux";
import Massages from "./Massages";


let mapStateToProps=(state)=>{
    return{
        massagesPage: state.massagesPage,
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
         click:(e)=>{
       
            if (e.key ==='Enter'&& e.altKey===true) {
                dispatch({
                    type: 'NEW-USER-MASSAGE',
                });   
            }
        },
    }
}




const MassagesContainer =connect(mapStateToProps,mapDispatchToProps)(Massages);



export default MassagesContainer