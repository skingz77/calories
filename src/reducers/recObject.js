const recInput = (state=null, action)=>{
    if(action.type === 'FETCH_RECIPE'){
        return action.payload.hits.map((ind)=>{
            let {calories, image, shareAs, label} = ind.recipe;
            let serving = ind.recipe.yield
            let {CHOCDF, FAT, PROCNT} = ind.recipe.totalNutrients;
            return {
                calories,
                image,
                shareAs,
                CHOCDF,
                FAT,
                PROCNT,
                serving,
                label
            }
        })
    }else{
        return state;
    }
}

export default recInput;