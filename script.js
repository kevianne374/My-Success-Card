let currentPage = 1;
const totalPages = 3;

function changePage(direction) {
    document.getElementById(`page-${currentPage}`).classList.remove('active');
    currentPage += direction;
    document.getElementById(`page-${currentPage}`).classList.add('active');

    document.getElementById('prevBtn').disabled = (currentPage === 1);
    
    const nextBtn = document.getElementById('nextBtn');
    if (currentPage === totalPages) {
        nextBtn.innerHTML = "Finished ✨";
        nextBtn.disabled = true;
    } else {
        nextBtn.innerHTML = "Next Page ➔";
        nextBtn.disabled = false;
    }
}
