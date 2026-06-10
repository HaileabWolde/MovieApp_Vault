const myform  = document.getElementById('myform');
const genrenameError = document.getElementById('genrenameError');
const genrename = document.getElementById('genrename')

/// concering the dialogs
const deleteButtons = document.querySelectorAll('.delete-btn'); 
const genreIdInput = document.getElementById('genreIdInput')
const dialogModal = document.getElementById('dialogModal')
const dialog = document.getElementById('dialog')
const cancelButton = document.getElementById('cancelButton')


const regex = /^[A-Za-z\s]+$/;


//mobile responsivness
const menuBtn = document.getElementById('menu-btn');
const mobilesideBar = document.getElementById('mobilesideBar');

menuBtn.addEventListener('click', () => {
    mobilesideBar.classList.toggle('-translate-x-full');
});

// Open dialog when delete button is clicked
    deleteButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent row click if any
            
            const genreId = button.dataset.genreId;
           
           genreIdInput.value = genreId ;
           
            dialogModal.classList.remove('hidden');
            dialog.showModal(); // Native dialog API
             
        });
    });

 //Cance the modal dialog
cancelButton.addEventListener('click', ()=> {
      dialog.close()
      dialogModal.classList.add('hidden');        // stops form submission
    
})

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