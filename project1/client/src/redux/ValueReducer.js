let inishialSate={
    valueWindow: false,
    valueLoading: false,
}
const ValueRedicer=(state=inishialSate,action)=>{
    let stateCopy={...state}

    switch(action.type){
        case 'VALUE-WINDOW':
            stateCopy.valueWindow=action.value
        return stateCopy

        case 'VALUE-LOADIMG':
            stateCopy.valueLoading=action.value
        return stateCopy
        default:
            return state
    }
}
export default ValueRedicer;