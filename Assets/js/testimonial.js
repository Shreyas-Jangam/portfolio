const testimonials = [
    

];

function createTestimonialCard(testimonial) {
    return `
        <div class="testimonial-card">
            <div class="company-date">
                <img src="${testimonial.company}"><div class="review-date">${testimonial.date}</div>
            </div>
            <p>"${testimonial.text}"</p>
            <div class="reviewer-img-name">
                <img src="${testimonial.image}"><span><h4>${testimonial.name}</h4><p>${testimonial.country}</p></span>
            </div>
        </div>
    `;
}

function populateTestimonials() {
    const row1 = document.getElementById('row1');
    const row2 = document.getElementById('row2');

    for (let i = 0; i < testimonials.length; i++) {
        const card = createTestimonialCard(testimonials[i]);
        if (i < 4) {
            row1.innerHTML += card;
        } else {
            row2.innerHTML += card;
        }
    }

    // Duplicate cards for seamless scrolling
    row1.innerHTML += row1.innerHTML;
    row2.innerHTML += row2.innerHTML;
}

// Call the function when the page loads
window.addEventListener('load', populateTestimonials);

// Pause animation on hover
const rows = document.querySelectorAll('.testimonial-row');
rows.forEach(row => {
    row.addEventListener('mouseenter', () => {
        row.style.animationPlayState = 'paused';
    });
    row.addEventListener('mouseleave', () => {
        row.style.animationPlayState = 'running';
    });
});