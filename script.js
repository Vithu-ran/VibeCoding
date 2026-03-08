// Navigation logic
function navigateTo(sectionId) {
    // Update navigation buttons
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => {
        if (btn.innerText.toLowerCase() === sectionId) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Update sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
}

// Image upload handling
const imageUpload = document.getElementById('imageUpload');
const profileImage = document.getElementById('profileImage');
const placeholder = document.getElementById('placeholder');

imageUpload.addEventListener('change', function(event) {
    const file = event.target.files[0];
    
    if (file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            // Set image source and show it
            profileImage.src = e.target.result;
            profileImage.classList.remove('hidden');
            
            // Hide the initial placeholder
            placeholder.classList.add('hidden');
        };
        
        reader.readAsDataURL(file);
    }
});

// Optional: Add a subtle parallax effect to the card
document.addEventListener('mousemove', (e) => {
    const card = document.querySelector('.profile-card');
    if (!card) return;
    
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    
    // Only apply if the section is active
    if (card.closest('.section').classList.contains('active')) {
        // We'll keep it very subtle to maintain the "neat" look
        // card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    }
});
