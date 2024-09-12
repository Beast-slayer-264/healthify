document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.getElementById('announcementModal');
    const closeBtn = document.querySelector('.close');
    const websiteContent = document.getElementById('websiteContent');

    closeBtn.onclick = function() {
        modal.style.display = 'none';
        websiteContent.style.display = 'block';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            websiteContent.style.display = 'block';
        }
    }
});