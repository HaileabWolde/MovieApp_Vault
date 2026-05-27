const mydirectorform = document.getElementById('mydirectorform');
const directornameError = document.getElementById('directornameError')
const directorname = document.getElementById('directorname')//


const deleteButtons = document.querySelectorAll('.delete-btn'); 
const dialogModal = document.getElementById('dialogModal')
const directorIdInput = document.getElementById('directorIdInput');
const dialog = document.getElementById('dialog')
const cancelButton = document.getElementById('cancelButton')

const regex = /^[A-Za-z\s]+$/;


// Open dialog when delete button is clicked
    deleteButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent row click if any
            
            const directorId = button.dataset.directorId;
            console.log(directorId)
           directorIdInput.value = directorId;
            console.log(directorIdInput)
            dialogModal.classList.remove('hidden');
            dialog.showModal(); // Native dialog API
             
        });
    });

 //Cance the modal dialog
cancelButton.addEventListener('click', ()=> {
      dialog.close()
      dialogModal.classList.add('hidden');        // stops form submission
    
})

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