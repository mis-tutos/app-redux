const updateWord = palabra =>{
    return{
        type: 'UPDATE_WORD',
        payload: palabra
    }
}

export default updateWord