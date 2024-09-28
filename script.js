document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('announcementModal');
    const closeBtn = document.querySelector('.close');
    const websiteContent = document.querySelector('body > *:not(#announcementModal)');

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
const buttons=document.querySelectorAll(button)
console.log(buttons);


