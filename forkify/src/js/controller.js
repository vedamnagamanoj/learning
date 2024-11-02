import * as model from './model.js';
import { MODAL_CLOSE_SEC } from './config.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';

// for old browser which does not have es6 functionality
import 'core-js/stable'; // for polyfilling everything else
import { add } from 'lodash-es';

///////////////////////////////////////

// if (module.hot) {
//   module.hot.accept();
// }

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    // 0. Update results view to mark selected search results
    resultsView.update(model.getSearchResultsPage());
    // 3. Updating bookmarks view
    bookmarksView.update(model.state.bookmarks);

    // 1. Loading Recipie
    await model.loadRecipe(id);

    // 2. Rendering the Recipie
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
    console.error(err);
  }
};

const controlServings = function (newServings) {
  // Update the recipe servings (in state)
  model.updateServings(newServings);
  // Update the view
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const controlSearchResults = async function () {
  try {
    // 1. Get search query
    const query = searchView.getQuery();
    if (!query) return;

    resultsView.renderSpinner();
    // 2. Load search results
    await model.loadSearchResults(query);

    // 3. Render results
    // resultsView.render(model.state.search.results);
    resultsView.render(model.getSearchResultsPage());

    // 4. Render initial pagination
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const controlPagination = function (page) {
  // 1. Render new results
  resultsView.render(model.getSearchResultsPage(page));
  // 2. render new pagination
  paginationView.render(model.state.search);
};

const controlAddBookmark = function () {
  // 1. Add/Remove bookmark
  if (!model.state.recipe.isBookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookMark(model.state.recipe.id);

  // 2. Update Recipe view
  recipeView.update(model.state.recipe);

  // 3. Render Bookmarks
  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
  try {
    // Show loading spinner
    addRecipeView.renderSpinner();

    // Upload the new recipe data
    await model.uploadRecipe(newRecipe);
    console.log(model.state.recipe);
    // Render Recipe
    recipeView.render(model.state.recipe);

    // Display success message
    addRecipeView.renderMessage();
    // Render bookmark view
    bookmarksView.render(model.state.bookmarks);

    // Change ID in the url
    window.history.pushState(null, '', `#${model.state.recipe.id}`);

    // Close Form
    // setTimeout(function () {
    //   addRecipeView.toggleWindow();
    // }, MODAL_CLOSE_SEC * 1000);

    // Reset Form
  } catch (err) {
    console.error('💣', err);
    addRecipeView.renderError(err.message);
  }
  // Upload the new recipe data
};

const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
};

init();

// Challenges
// 1. Display number of pages between the pagination buttons.
// 2. Ability to sort search results by during or number of ingredients.
// 3. Perform ingredient validation in view, before submitting the form.
// 4. Improve recipe ingredient input: seperate in multiple fields and allow more than 6 ingredients
// 5. Shopping list feature: button on recipe to add ingredients to a list.
// 6. Weekly meal planning feature: assign recipes to the next 7 days and show on a weekly calendar
// 7. Get nutrition data on each ingredient from spoonacular API (https://spoonacular.com/food-api) and caluculate total calories of recipe.
