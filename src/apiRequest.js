const requestURL = 'https://www.themealdb.com/api/json/v1/1/categories.php';
const getMeals = async () => {
  const data = await fetch(requestURL);
  const response = await data.json();
  return response.categories;  
};

export {getMeals};