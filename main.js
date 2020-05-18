import Search from './models/Search';
import * as searchView from './views/searchView';
import {elements} from './views/base';


//MY central variable
const state = {};

//For testing 
window.state = state;

////// SEARCH CONTROLLER ///////
const controlSearch = () => {  
    //1) Display web and image div  
    elements.imageContainer.style.visibility = ''; 
    elements.webContainer.style.visibility = '';

    //2) Get query from input field 
    const query = searchView.getInput();
   
    if(query){ 
        //3) New Search object and add to state object 
        state.search = new Search(query);
              
        //Clear previous results and display new results
        clearResultsandRenderResults();    
    }
}

/**
 * 
 * @param startIndex To set start index for Api 'start' Query parameter
 */
const clearResultsandRenderResults = async (startIndex=1) => {
    //4) Prepare UI for results
    searchView.clearInput();    
    searchView.clearResult();
   
    //5) Search for query
   try{ 
        await  state.search.getResult(startIndex); 
        const data = state.search.result
    
        //6) Render Results to UI
        if (data != null) { //if undefined or null,//allowed coercion !=
            searchView.renderAllWebResults(data);
            searchView.renderAllImages(data);
        }
    } catch(error){
    console.error(error);
    }
};



 /**
  * Submit functionality
  */
 elements.searchForm.addEventListener('submit',  e =>{
    
    //whenever we submit a form we prevent reloading the page
    e.preventDefault();

    controlSearch();
});


 /**
  * Pagination functionality
  */
 elements.pageList.addEventListener('click',  e=>{
    e.preventDefault();  
    const page = e.target.closest('.page'); 
    const startindex = page.dataset.goto;   
    
    if (startindex && state.search !=null){ 
        clearResultsandRenderResults(startindex);
     }  
 });

