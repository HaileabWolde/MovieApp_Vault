const mydirectorform = document.getElementById('mydirectorform');
const directornameError = document.getElementById('directornameError')
const directorname = document.getElementById('directorname')

const regex = /^[A-Za-z\s]+$/;


const validateForm = (event)=> {
  event.preventDefault();
  directornameError.textContent = '';

    if(!directorname.value || !directorname.value.trim() === ''){
        directornameError.textContent = 'Director Name is required';
        directornameError.style.color = '#EA0063';
    }
     else if (!regex.test(directorname.value.trim())) {
       directornameError.textContent = "Please use only letters, numbers, spaces and common punctuation";
        directornameError.style.color = '#EA0063';
    }
    else {
        mydirectorform.submit();
    }

}


mydirectorform.addEventListener('submit', validateForm);