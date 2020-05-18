import { elements } from './base';

/**
 * Sets the input value to empty string
 */
export const clearInput = () => {
  elements.searchInput.value = '';
};

/**
 * Sets the innnerHtml  element property of Web cont. and Image cont. to empty value
 */
export const clearResult = () => {
  elements.webList.innerHTML = '';
  elements.imageList.innerHTML = '';
};

/**
 * Gets query from the input field
 */
export const getInput = () => elements.searchInput.value;


/**
 * Inserts one web item to web results list before end
 * @param result contains result object
 */
const renderOneWebResult = (result) => {
  const markup = `
        <li>
            <a href="${result.formattedUrl}"><h4>${result.title}</h4></a>
            <a class="results__link" href="${result.formattedUrl}">${result.htmlFormattedUrl}</a>
            <div class="results_text">
            <p>${result.snippet}</p>
            </div>

        </li>
    `;
  elements.webList.insertAdjacentHTML('beforeend', markup);
};

/**
 * Inserts one image to Image list before end
 * @param result contains specific path for the image
 */
const renderImage = (result) => {
  const markup = ` 
            <img src="${result}" alt="" class="web__img">     
    `;

  elements.imageList.insertAdjacentHTML('beforeend', markup);
};

/**
 * Loops through our result array
 * @param searchResult contains whole result object of our search query
 */
export const renderAllWebResults = (searchResult) => {
  searchResult.forEach(renderOneWebResult);
};


/**
 *  First Loop selects a web result and second selects a source path to the img
 * @param searchResult contains whole result object of our search query
 */
export const renderAllImages = (searchResult) => {
  searchResult.forEach((el) => {
    if (el.pagemap != null) {
      // Uncaught TypeError: Cannot read property  of undefined
      if (el.pagemap.cse_thumbnail != null) {
        el.pagemap.cse_thumbnail.forEach((element) => {
          renderImage(element.src);
        });
      }
    }
  });
};
