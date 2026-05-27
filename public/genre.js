const myform  = document.getElementById('myform');
const genrenameError = document.getElementById('genrenameError');
const genrename = document.getElementById('genrename')


const regex = /^[A-Za-z\s]+$/;


const validateForm = (event)=>{
    event.preventDefault();
    genrenameError.textContent = '';


     if(!genrename.value || !genrename.value.trim() === ''){
         genrenameError.textContent = 'Genre Name is required';
        genrenameError.style.color = '#EA0063';
    }
     else if (!regex.test(genrename.value.trim())) {
       genrenameError.textContent = "Please use only letters, numbers, spaces and common punctuation";
         genrenameError.style.color = '#EA0063';
    }
    else {
       myform .submit();
    }

}
myform .addEventListener('submit', validateForm);