import './style.css'
import {getMealsFromApi} from './apiRequest.js';

const foodsBody= document.querySelector('.foods');
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
    // onClickMeal.addEventListener()
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
getMeals()
