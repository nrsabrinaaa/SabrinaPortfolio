document.addEventListener("DOMContentLoaded", function () {
    const startDate = new Date(2023, 8, 16); 
    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();

    if (months < 0) {
        years--;
        months += 12;
    }

    const experienceText = `${years} year${years !== 1 ? 's' : ''} and ${months} month${months !== 1 ? 's' : ''}`;
    document.getElementById("experience").textContent = `${experienceText}`;




    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.spy-menu a');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            const navLink = document.querySelector(`.spy-menu a[href="#${id}"]`);

            if (entry.isIntersecting) {
                entry.target.classList.add('active');

                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) {
                    navLink.classList.add('active');
                }
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, {
        threshold: 0.3
    });

    sections.forEach(section => {
        observer.observe(section);
    });




    let mybutton = document.getElementById("myBtn");
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
    }

    window.topFunction = function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
})
