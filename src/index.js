import './style.css';
import {
  getMealsFromApi, getRecipeFromApi, getsearchByNameFromApi, getsearchByCategoryFromApi,
} from './apiRequest.js';

const foodsBody = document.querySelector('.foods');
const popUpC = document.querySelector('.popUpContent');
const popUpMealsSect = document.querySelector('.popUpmealsSection');
const searchButton = document.querySelector('.searchBtn');

async function popUp(item) {
  const recipe = await getRecipeFromApi(item.idMeal);
  const itemImage = item.strMealThumb;
  const itemTitle = item.strMeal;
  const procedure = await recipe.strInstructions;
  const popUpImageSection = document.createElement('div');
  const popUpMeals = document.createElement('div');
  popUpMealsSect.innerHTML = '';
  popUpImageSection.className = 'imagePopUp mt-4 ml-4 mr-4';
  popUpMeals.className = 'mealsPopUp ml-4 mr-4';
  const popUpImage = document.createElement('img');
  const popUpTitle = document.createElement('h3');
  const popUpRecipe = document.createElement('p');
  popUpImage.src = itemImage;
  popUpTitle.innerHTML = itemTitle;
  popUpRecipe.innerHTML = procedure;
  popUpImageSection.appendChild(popUpImage);
  popUpMeals.appendChild(popUpTitle);
  popUpMeals.appendChild(popUpRecipe);
  popUpMealsSect.appendChild(popUpImageSection);
  popUpMealsSect.appendChild(popUpMeals);
  popUpC.appendChild(popUpMealsSect);
}

function searchErrorMessage() {
  const errorInfo = document.createElement('h3');
  errorInfo.innerHTML = 'Sorry, meal not found! Please try again';
  foodsBody.appendChild(errorInfo);
}

async function getMeals(mealsData) {
  foodsBody.innerHTML = '';
  if (!mealsData) {
    searchErrorMessage();
    return;
  }
  mealsData.forEach((item) => {
    const itemImage = item.strMealThumb;
    const itemTitle = item.strMeal;
    const foodDetails = document.createElement('div');
    foodDetails.className = 'col-4 foodContent mt-2';
    const onClickMeal = document.createElement('div');
    const mealImage = document.createElement('img');
    const mealTitle = document.createElement('h5');
    const seeRecipe = document.createElement('button');
    seeRecipe.className = 'btn btn-info';
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

searchButton.addEventListener('click', async (e) => {
  e.preventDefault();
  const inputElement = document.querySelector('.enteredValue');
  const inputValue = inputElement.value;
  const searchedMeal = await getsearchByNameFromApi(inputValue);
  const searchedMealCategory = await getsearchByCategoryFromApi(inputValue);
  getMeals(searchedMeal);
  getMeals(searchedMealCategory);
});

async function loadPage() {
  const mealsData = await getMealsFromApi();
  getMeals(mealsData);
}
loadPage();
