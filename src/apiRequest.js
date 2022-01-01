const requestMealsUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?i='
const getMealsFromApi = async () => {
  const data = await fetch(requestMealsUrl);
  const response = await data.json();
  return response.meals;  
};
export {getMealsFromApi};