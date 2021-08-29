const searchForm = document.querySelector("form");
const searchResult = document.querySelector("search-result");
const container = document.querySelector("container");
let search = "";

const app_ID = "91bfc94b";
const app_Key = "e07b5281f70147781458f1f9127326c6";

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  search = e.target.querySelector("input").value;
  foodApi();
});
async function foodApi() {
  const apiUrl = `https://api.edamam.com/search?q=pizza&app_id=${app_ID}&app_key=${app_Key}&to=20`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  food(data.hits);
}
function food(results) {
  let myFood = "";
  results.map((result) => {
    myFood += `
    <div class="item">
        <img src="${result.recipe.image}" alt="" />
    <div class="flex-container">
        <h1 class="title">${result.recipe.label}</h1>
        <a class="view-btn" href="#">View Recipe</a>
    </div>
        <p class="item-data">Calories: 80</p>
    </div>
    `;
  });
  searchResult.innerHTML = myFood;
}
