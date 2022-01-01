const requestMealsUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=';
const requestRecipeUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
const getMealsFromApi = async () => {
  const data = await fetch(requestMealsUrl);
  const response = await data.json();
  return response.meals;  
};

const getRecipeFromApi = async (id) => {
  const data = await fetch(`${requestRecipeUrl}${id}`);
  const response = await data.json();
  return response.meals[0];
}
export {getMealsFromApi, getRecipeFromApi};