// Wait for the document to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Scroll animation functionality
    const scrollElements = document.querySelectorAll('.slide-in, .slide-in-left, .slide-in-right');
    
    const elementInView = (el, percentageScroll = 100) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= 
            ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
        );
    };
    
    const displayScrollElement = (element) => {
        element.classList.add('appear');
    };
    
    const hideScrollElement = (element) => {
        element.classList.remove('appear');
    };
    
    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 85)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    };
    
    // Initialize scroll animation check
    handleScrollAnimation();
    
    // Add scroll event listener
    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });
    
    // Handle form submission
    const appointmentForm = document.getElementById('appointment-form');
    const formSuccess = document.getElementById('form-success');
    
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Get form values - in a real application, you would validate and send these
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const date = document.getElementById('date').value;
            const reason = document.getElementById('reason').value;
            const firstVisit = document.getElementById('firstVisit').value;
            
            // For demo purposes, just log the values
            console.log('Form submitted with values:', {
                name,
                email,
                phone,
                date,
                reason,
                firstVisit
            });
            
            // Show success message
            appointmentForm.style.display = 'none';
            formSuccess.classList.remove('hidden');
            
            // Reset form (would be used if you wanted to hide success message after a time)
            // setTimeout(() => {
            //     appointmentForm.reset();
            //     appointmentForm.style.display = 'block';
            //     formSuccess.classList.add('hidden');
            // }, 5000);
        });
    }
    
    // Mobile menu toggle (for smoother interactions)
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const dropdownContent = document.querySelector('.dropdown-content');
    
    if (dropdownBtn && dropdownContent) {
        // Close dropdown when clicking a link
        const dropdownLinks = dropdownContent.querySelectorAll('a');
        dropdownLinks.forEach(link => {
            link.addEventListener('click', function() {
                // Small delay to allow the click to register before closing
                setTimeout(() => {
                    dropdownContent.style.display = 'none';
                }, 100);
            });
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.matches('.dropdown-btn') && !dropdownContent.contains(event.target)) {
                dropdownContent.style.display = 'none';
            }
        });
        
        // Toggle dropdown on button click
        dropdownBtn.addEventListener('click', function(event) {
            event.stopPropagation();
            const isDisplayed = dropdownContent.style.display === 'block';
            dropdownContent.style.display = isDisplayed ? 'none' : 'block';
        });
    }
});
