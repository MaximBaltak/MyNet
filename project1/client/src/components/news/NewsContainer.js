import { connect } from "react-redux";
import NewsAPi from "./NewsAPi";

let mapStateToProps=(state)=>{
    return{
        allNews: state.newsPage.allNews, 
        valueApi: state.newsPage.valueaAPI,
        value: state.value.valueWindow,
        loading: state.value.valueLoading,
    }
}
let mapDispachToProps=(dispatch)=>{
    return{
        all:(id,date,img,title,text)=>{
            dispatch({
                type: "ALL-NEWS-DB",
                id,
                date,
                img,
                title,
                text,
            })
        },
         open:()=>{
            dispatch({type:'VALUE-WINDOW', value: true})
        },
         close:()=>{
            dispatch({type:'VALUE-WINDOW', value: false})
        },
        load:(value)=>{
            dispatch({
                type:'VALUE-LOADING',
                value,
            })
        }
    }
}


let NewsContainer=connect(mapStateToProps,mapDispachToProps)(NewsAPi)

export default NewsContainer