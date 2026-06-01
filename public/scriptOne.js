const mydialogform = document.getElementById('mydialogform')


//dialgo Showing Logic 


const dialog = document.getElementById('dialog')
const dialogModal = document.getElementById('dialogModal')
const cancelButton = document.getElementById('cancelButton')
const deleteButtons = document.querySelectorAll('.delete-btn'); 
const movieIdInput = document.getElementById('movieIdInput');


// Open dialog when delete button is clicked
    deleteButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent row click if any
            
            const movieId = button.dataset.movieId;
            movieIdInput.value = movieId;
        
            dialogModal.classList.remove('hidden');
            dialog.showModal(); // Native dialog API
             
        });
    });


//Cance the modal dialog
cancelButton.addEventListener('click', ()=> {
      dialog.close()
      dialogModal.classList.add('hidden');        // stops form submission
    
})

const deleteMovie = (event)=>{
       event.preventDefault();
       mydialogform.submit();
}

mydialogform.addEventListener('submit', deleteMovie);