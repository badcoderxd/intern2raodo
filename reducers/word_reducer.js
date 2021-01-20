export default function( state=[],action ) {
    switch(action.type){
        case'GET_WORDS_ALL':
        return {...state,wordsList:action.payload}
        case'GET_WORDS':
        return {...state,wordsList:action.payload}
        default:
        return state;
    }
}