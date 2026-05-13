
const myform = document.getElementById('myform');
const moviename = document.getElementById('moviename');
const rating = document.getElementById('rating');
const priority = document.getElementById('priority');
const dateInput = document.getElementById('watcheddate');


const regex = /^[a-zA-Z]+$/;
//Error
const movienameError = document.getElementById('movienameError');
const ratingError = document.getElementById('ratingError');

const validateForm = (event) => {
    event.preventDefault();
    // Reset errors
    movienameError.textContent = '';
    ratingError.textContent = '';

 

   // === Movie Name Validation ===
    if (!moviename.value || moviename.value.trim() === '') {
        movienameError.textContent = "Movie title is required";
        movienameError.style.color = '#EA0063';
       
    } 
    else if (!regex.test(moviename.value.trim())) {
        movienameError.textContent = "Please use only letters, numbers, spaces and common punctuation";
        movienameError.style.color = '#EA0063';
      
    }
    else if(priority.value === "0" && (rating.value || dateInput.value)){
        ratingError.textContent = "You Can't Rate A movie You Haven't watched yet"
        ratingError.style.color = '#EA0063'
    }

    // === Rating Logic (for Already Watched) ===
   else  if (priority.value === "0" && (!rating.value || !dateInput.value)) {
        ratingError.textContent = "Please provide rating and watched date for watched movies";
        ratingError.style.color = '#EA0063';
        
    }
    else{
          myform.submit();   // ← this triggers the real POST
    }
       
};

myform.addEventListener('submit', validateForm);