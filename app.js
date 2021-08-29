const searchForm = document.querySelector("form");
const searchResult = document.querySelector(".search-result");
const container = document.querySelector(".container");
let search = "";

const app_ID = "91bfc94b";
const app_Key = "e07b5281f70147781458f1f9127326c6";

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  search = e.target.querySelector("input").value;
  foodApi();
});
async function foodApi() {
  const apiUrl = `https://api.edamam.com/search?q=${search}&app_id=${app_ID}&app_key=${app_Key}&to=20`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  food(data.hits);
  console.log(data);
}
function food(results) {
  let myFood = "";
  results.map((result) => {
    myFood += `
    <div class="item">
        <img src="${result.recipe.image}" alt="" />
    <div class="flex-container">
        <h1 class="title">${result.recipe.label}</h1>
        <a class="view-btn" target="blank"  
        href="${result.recipe.url}" >View Recipe</a>
    </div>
        <p class="item-data">Calories: ${result.recipe.calories.toFixed(2)}</p>
        <p class="item-data">Diet Label : ${
          result.recipe.dietLabels.length > 0
            ? result.recipe.dietLabels
            : "no data found"
        }</p>
        <p class="item-data">Dish Type :
         ${result.recipe.dishType}</p>
    </div>
    `;
  });
  searchResult.innerHTML = myFood;
}
