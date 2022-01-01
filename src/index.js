import './style.css'
import {getMealsFromApi} from './apiRequest.js';

const foodsBody= document.querySelector('.foods');
const popUpM = document.querySelector('.popUpModal');
const popUpD = document.querySelector('.popUpDialog');
const popUpC = document.querySelector('.popUpContent');

async function getMeals(){
  const mealsData = await getMealsFromApi();
  mealsData.forEach((item) => {
    let itemImage = item.strMealThumb;
    let itemTitle = item.strMeal;
    // let itemDescription = item.strDescription; 
    let foodDetails= document.createElement('div');
    foodDetails.className = 'col-4 foodContent';    
    const onClickMeal = document.createElement('div');
    const mealImage = document.createElement('img');
    const mealTitle = document.createElement('h5');
    // const mealDescription = document.createElement('p');
    onClickMeal.addEventListener('click', () => {
      popUp(item);
    });
    mealImage.src=itemImage;
    mealTitle.innerHTML = itemTitle;
    // mealDescription.innerHTML = itemDescription;
    onClickMeal.appendChild(mealImage);
    onClickMeal.appendChild(mealTitle);
    foodDetails.appendChild(onClickMeal);
    // foodDetails.appendChild(mealDescription);
    foodsBody.appendChild(foodDetails);
  })
}
async function popUp(item){
  let itemImage = item.strMealThumb;
  let itemTitle = item.strMeal;
  let popUpMeals= document.createElement('div');
  popUpMeals.innerHTML = ``;
  popUpMeals.className = 'mealsPopUp';
  const popUpImage = document.createElement('img');
  const popUpTitle = document.createElement('h3');
  // const popUpRecipe = document.createElement('p');
  popUpImage.src=itemImage;
  popUpTitle.innerHTML = itemTitle;
  popUpMeals.appendChild(popUpImage);
  popUpMeals.appendChild(popUpTitle);
  popUpC.appendChild(popUpMeals);
  // popUpD.appendChild(popUpC);
  // popUpM.appendChild(popUpD);
}
getMeals();