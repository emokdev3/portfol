let menuBtn = document.getElementById('menuBtn');

menuBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark');
});

let typed = new Typed('.auto-input', {
        strings: ["Web developer", "Content creator", "Graphic Designer","Event Organizer","Video Editor","Digital Marketing Manager" ,"Moblie App Developer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 2000,
        loop: true,
    });


    let navLinks = document.querySelectorAll('nav ul li a');
    let sections = document.querySelectorAll('.selection');
    
    window.addEventListener('scroll', function() {
        const scrollPos = window.scrollY;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
    
            if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    window.addEventListener('load', function() {
        setTimeout(function() {
            document.querySelector('.preloader').style.display = 'none';
        }, 5000); 
        
    });// 5000 milliseconds = 5 second
   



 