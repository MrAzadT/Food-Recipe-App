const searchForm = document.querySelector("form");
const searchResult = document.querySelector("search-result");
const container = document.querySelector("container");
let search = "";

const app_Id = "91bfc94b";
const app_Key = "e07b5281f70147781458f1f9127326c6";

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  search = e.target.querySelector("input").value;
  fetchApi();
});
async function fetchApi() {
  const apiUrl = `https://api.edamam.com/search?q=pizza&app_Id=${app_Id}&app_Key=${app_Key}`;
  const response = await fetch(apiUrl);
  console.log(response);
}
