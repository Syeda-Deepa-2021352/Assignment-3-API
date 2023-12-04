document.addEventListener("DOMContentLoaded", function () {
  const searchBtn = document.getElementById("search-btn");
  searchBtn.addEventListener("click", searchMeals);
});

function searchMeals() {
  const searchBox = document.getElementById("search-box");
  const searchTerm = searchBox.value;

  if (searchTerm.trim() !== "") {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast{searchTerm}`
    )
      .then((response) => response.json())
      .then((data) => displayResults(data.meals.slice(0, 5)))
      .catch((error) => console.error("Error fetching data:", error));
  }
}

function displayResults(meals) {
  const resultsContainer = document.getElementById("results-container");
  resultsContainer.innerHTML = "";

  meals.forEach((meal) => {
    const mealCard = document.createElement("div");
    mealCard.className = "meal-card";

    const mealName = document.createElement("h3");
    mealName.textContent = meal.strMeal;

    const mealImage = document.createElement("img");
    mealImage.src = meal.strMealThumb;
    mealImage.alt = meal.strMeal;
    mealImage.className = "meal-img";

    mealCard.appendChild(mealName);
    mealCard.appendChild(mealImage);

    resultsContainer.appendChild(mealCard);
  });
}
