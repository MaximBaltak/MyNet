import news from './../img/new.jpg';

let inishialSate={
    allNews:[],
    newNews:{},
    newsChange:'',
    newsChangeTitle:'',
    filterNews:[],
    newsfilter:'',
    valueaAPI: false,
    file:''
}

const NewsReducer =(state=inishialSate,action)=>{
    let stateCopy={
        ...state,
        allNews:[...state.allNews],
        newNews:{...state.newNews},
    }
    switch(action.type){
        case 'ADD-NEWS':

        stateCopy.newNews={}
        let date=new Date(),
            year=date.getFullYear(),
            moth=date.getMonth(),
            data=date.getDate();

        stateCopy.newNews.date=`${data} ${moth} ${year}`;
        stateCopy.newNews.img=news;
        stateCopy.newNews.title=stateCopy.newsChangeTitle;
        stateCopy.newNews.text=stateCopy.newsChange;

        stateCopy.allNews.unshift(stateCopy.newNews);
        

     return stateCopy
     case 'CHANGE-TITLE-NEWS':
        stateCopy.newsChangeTitle=action.title;
     return stateCopy
     case 'CHANGE-TEXT-NEWS':
        stateCopy.newsChange=action.text;
     return stateCopy;
     case 'CHANGE-FILE':
        stateCopy.file=action.file;
     return stateCopy
     case "ALL-NEWS-DB":
        stateCopy.valueaAPI=true;

            stateCopy.allNews.unshift({id:action.id, date:action.date,img:action.img,title:action.title,text:action.text});
        
         
         
    return stateCopy;
     default:
         return state
       
        
    }



}
export default NewsReducer;