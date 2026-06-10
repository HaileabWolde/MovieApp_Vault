const mydialogform = document.getElementById('mydialogform')
//dialgo Showing Logic 


const dialog = document.getElementById('dialog')
const dialogModal = document.getElementById('dialogModal')
const cancelButton = document.getElementById('cancelButton')
const deleteMovieButton = document.getElementById('deleteMovieButton'); 
const movieIdInput = document.getElementById('movieIdInput');

const menuBtn = document.getElementById('menu-btn');
const mobilesideBar = document.getElementById('mobilesideBar');

menuBtn.addEventListener('click', () => {
    mobilesideBar.classList.toggle('-translate-x-full');
});
deleteMovieButton.addEventListener('click', (e)=> {
    e.stopPropagation();

    const movieId = deleteMovieButton.dataset.movieId
    movieIdInput.value = movieId
      dialogModal.classList.remove('hidden');
            dialog.showModal(); // Native dialog API
})

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