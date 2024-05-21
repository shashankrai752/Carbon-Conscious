document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        window.location.href = 'carbon footprint.html';
        
    });
    const button=
        document.getElementById('myButton');

    button.addEventListner('click',()=>{
        window.location.href='mailto:shuklakumar704@gmail.com';

    });
     
});
