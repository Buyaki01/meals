import './style.css';
import { getMealsFromApi, getRecipeFromApi } from './apiRequest.js';

const foodsBody = document.querySelector('.foods');
const popUpC = document.querySelector('.popUpContent');

async function popUp(item) {
  const recipe = await getRecipeFromApi(item.idMeal);
  const itemImage = item.strMealThumb;
  const itemTitle = item.strMeal;
  const procedure = await recipe.strInstructions;
  const popUpMeals = document.createElement('div');
  popUpMeals.innerHTML = '';
  popUpMeals.className = 'mealsPopUp';
  const popUpImage = document.createElement('img');
  const popUpTitle = document.createElement('h3');
  const popUpRecipe = document.createElement('p');
  popUpImage.src = itemImage;
  popUpTitle.innerHTML = itemTitle;
  popUpRecipe.innerHTML = procedure;
  popUpMeals.appendChild(popUpImage);
  popUpMeals.appendChild(popUpTitle);
  popUpMeals.appendChild(popUpRecipe);
  popUpC.appendChild(popUpMeals);
}

async function getMeals() {
  const mealsData = await getMealsFromApi();
  mealsData.forEach((item) => {
    const itemImage = item.strMealThumb;
    const itemTitle = item.strMeal;
    const foodDetails = document.createElement('div');
    foodDetails.className = 'col-4 foodContent';
    const onClickMeal = document.createElement('div');
    const mealImage = document.createElement('img');
    const mealTitle = document.createElement('h5');
    const seeRecipe = document.createElement('button');
    seeRecipe.className = 'btn btn-info btn-lg mb-2';
    seeRecipe.dataset.toggle = 'modal';
    seeRecipe.dataset.target = '#myModal';
    onClickMeal.addEventListener('click', () => {
      popUp(item);
    });
    mealImage.src = itemImage;
    mealTitle.innerHTML = itemTitle;
    seeRecipe.innerHTML = 'See recipe';
    onClickMeal.appendChild(mealImage);
    onClickMeal.appendChild(mealTitle);
    onClickMeal.appendChild(seeRecipe);
    foodDetails.appendChild(onClickMeal);
    foodsBody.appendChild(foodDetails);
  });
}
getMeals();