import './style.css'
import {getMeals} from './apiRequest.js';

const foodsBody= document.querySelector('.foods');
// const foodDetails = document.querySelectorAll('.foodContent');
// function foodPopUp(){

// }
// foodDetails.forEach((item)=> {
//     item.addEventListener('click', () => {

//         //popUpComment
//     } );
// })
async function getItems(){
  const mealsData = await getMeals();
  console.log(mealsData);
  mealsData.forEach((item) => {
    let foodDetails= document.createElement('div');
    foodDetails.className = 'col-4 foodContent';    
    const onClickMeal = document.createElement('a');
    const mealImage = document.createElement('img');
    const mealTitle = document.createElement('h5');
    const mealDescription = document.createElement('p');
    onClickMeal.href="./foodRecipe.html";
    mealImage.src='https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg'
    mealTitle.innerHTML = ``;
    mealDescription.innerHTML = ``;
    onClickMeal.appendChild(mealImage);
    onClickMeal.appendChild(mealTitle);
    foodDetails.appendChild(onClickMeal);
    foodDetails.appendChild(mealDescription);
    foodsBody.appendChild(foodDetails);
  })
}
getItems();
