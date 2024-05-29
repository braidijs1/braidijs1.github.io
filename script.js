// Add event listeners to images to open modal
document.getElementById('img1').addEventListener('click', function() {
    openModal('myModal1');
});

// Add event listeners to close buttons to close modal
document.querySelectorAll('.close').forEach(function(element) {
    element.addEventListener('click', function() {
        var modalId = this.parentElement.id;
        closeModal(modalId);
    });
});

// Close the modal when clicking outside of it
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
});
