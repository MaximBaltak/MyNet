import ava from './../img/ava.jpg';
let inishialSate= {
    
    massage: [
        { id: 1, ava: ava, name: 'Никита', massage:[ 'Как у тебя дела?',]},
        { id: 2, ava: ava, name: 'Саша', massage: [ 'Как у тебя дела?',]},
        { id: 3, ava: ava, name: 'Александр', massage: [ 'Как у тебя дела?',]},
        { id: 4, ava: ava, name: 'Алексей', massage: [ 'Как у тебя дела?',]},
        { id: 5, ava: ava, name: 'Ксения', massage: [ 'Как у тебя дела?',]},
        { id: 6, ava: ava, name: 'Димыч', massage: [ "Шо за фигня", "Ты офигел", "Это мой проект, не знаю где ты его взял но это моё я тут бос, ясно!?" ]},
      ],
    userMassage:[],
    userMassageChange: '',
}

const massagesReducer=(state=inishialSate,action)=>{
    let stateCopy={...state}

    switch(action.type){
        
        case 'NEW-USER-MASSAGE':
            stateCopy.userMassage=[...state.userMassage]
            stateCopy.userMassage.push(state.userMassageChange)
            stateCopy.userMassageChange='';
        return stateCopy;
        
        case 'NEW-USER-MASSAGE-CHANGE':
        stateCopy.newPost=action.newText; 
        stateCopy.userMassageChange=action.text    
        return stateCopy;
        
        default: 
        return state;
    }

}
export default massagesReducer
