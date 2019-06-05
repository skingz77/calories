import axios from  'axios';

export const createMacros = (macros)=>{
    return {
        type: 'CREATE_MACROS',
        payload: macros
    }
}
export const customMacros = (macros, custom)=>{
    return {
        type: 'CUSTOM_MACROS',
        payload: [macros, custom]
    }
}
export const recipeInput = (recipe)=>{
    return {
        type: 'RECIPE_INPUT',
        payload: recipe
    }
}


export const fetchRecipe = (recipe)=>{
    return async dispatch =>{
      const url= `https://api.edamam.com/search?q=${recipe}&ingr=10&time=30&app_id=69b417e7&app_key=19dccad0c4496c46b645c5179c3aa117`;
        const response = await axios.get(url);
        const recipes = response.data;
        dispatch({type: 'FETCH_RECIPE', payload: recipes});
    }
}