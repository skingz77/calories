
const recInput = (state='', action)=>{
    if(action.type === 'RECIPE_INPUT'){
        return action.payload
    }else{
        return state;
    }
}

export default recInput;