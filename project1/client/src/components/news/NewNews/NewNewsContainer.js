import axios from "axios";
import { connect } from "react-redux";
import NewNewsAPI from "./NewNewsAPI";

let mapStateToProps=(state)=>{
    return{
        titleChange: state.newsPage.newsChangeTitle,
        textChange: state.newsPage.newsChange,
        file: state.newsPage.file,
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
            titleNewChange:(data)=>{
                dispatch({
                    type:'CHANGE-TITLE-NEWS',
                    title: data,
                })
            },
            textNewChange:(data)=>{
                dispatch({
                    type:'CHANGE-TEXT-NEWS',
                    text: data,
                })
            },
            
            click:(file,title,text)=>{
                if(file!==''&&text!==''&& title!==''){
                    let data=new Date();
                    let d=data.getDate()
                    let m=data.getMonth();
                    let y=data.getFullYear();
        
                    switch(m){
                        case 0: m='января' 
                        break;
                        case 1: m='февраля'
                        break
                        case 2: m='марта'
                        break;
                        case 3: m='апреля'
                        break;
                        case 4: m='мая'
                        break;
                        case 5: m='июня'
                        break;
                        case 6: m='июля'
                        break;
                        case 7: m='августа'
                        break;
                        case 8: m='сентября'
                        break;
                        case 9: m='октября'
                        break;
                        case 10: m='ноября'
                        break;
                        case 11: m='декабря'
                        break;
                        default:
                            m="неизвестно"
        
                    };
                        let date=`${d} ${m} ${y}`;
                
                    let fromData= new FormData();
                    fromData.append('date',date)
                    fromData.append('file',file)
                    fromData.append('title',title)
                    fromData.append('text',text)
                    axios({
                        method: 'POST',
                        url: '/news',
                        headers:{
                            'Content-Type': 'multipart/form-data'
                        },
                        data: fromData,
                        
                    
                    })
                    .then(response=>{
                        dispatch({type:'VALUE-WINDOW', value: false})
                        if(response.status===200){
                            
                            console.log('Запрос завершон')
                        }
                    })
                    .catch(err=>{console.log('что то пошло не так ошибка:'+ err)})
                }else{
                    alert('Все поля должны быть заполнены')
                }        
            }
}       }
let NewNewsContainer=connect(mapStateToProps,mapDispatchToProps)(NewNewsAPI)
export default NewNewsContainer