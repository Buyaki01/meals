import './style.css'
import {getMeals} from './apiRequest.js';

const foodsBody= document.querySelector('.foods');
async function getItems(){
  const mealsData = await getMeals();
  mealsData.forEach((item) => {
    let itemImage = item.strCategoryThumb;
    let itemTitle = item.strCategory;
    let itemDescription = item.strCategoryDescription;
    console.log(item);
    let foodDetails= document.createElement('div');
    foodDetails.className = 'col-4 foodContent';    
    const onClickMeal = document.createElement('div');
    const mealImage = document.createElement('img');
    const mealTitle = document.createElement('h5');
    const mealDescription = document.createElement('p');
    // onClickMeal.addEventListener()
    mealImage.src=itemImage;
    mealTitle.innerHTML = itemTitle;
    mealDescription.innerHTML = itemDescription;
    onClickMeal.appendChild(mealImage);
    onClickMeal.appendChild(mealTitle);
    foodDetails.appendChild(onClickMeal);
    foodDetails.appendChild(mealDescription);
    foodsBody.appendChild(foodDetails);
  })
}
getItems();
