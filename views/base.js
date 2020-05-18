/* eslint-disable import/prefer-default-export */
export const elements = {
  searchInput: document.querySelector('.search_field'),
  searchForm: document.querySelector('.search-bar'),
  webList: document.querySelector('.results_list'),
  imageList: document.querySelector('#image-results-container'),
  imageContainer: document.querySelector('.image-result'),
  webContainer: document.querySelector('.web-result'),
  pageList: document.querySelector('.pagination'),
};

// Set the intitial state of 2 main containers
elements.imageContainer.style.visibility = 'hidden';
elements.webContainer.style.visibility = 'hidden';
