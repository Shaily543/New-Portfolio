gsap.registerPlugin(ScrollTrigger);

gsap.to("#shaily", {
    scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "100vh top",
        scrub: true
    },
    scale: 0.22,  // Shrinks logo to 50% of original size
    y: -280,      // Moves it up slightly
    x: -360,
    ease: "power1.out"
});
gsap.to("#meet", {
    scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "100vh top",
        scrub: true
    },
    scale: 0,  
    y: -367,      
    x: -540,
    ease: "power1.out"
});
gsap.to("#meet1", {
    scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "100vh top",
        scrub: true
    },
    scale: 0,  
    y: -367,      
    x: -540,
    ease: "power1.out"
});

gsap.to("#nav", {
    scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "300px top",
        scrub: true
    },
    opacity: 0,
    ease: "power1.out"
});


const button = document.querySelector('.toggle-btn');
const themeStyle = document.getElementById('theme-style');

function toggleDarkMode() {
    // Check current stylesheet
    if (themeStyle.getAttribute('href') === 'style.css') {
        themeStyle.setAttribute('href', 'dark.css'); // Switch to dark mode
        localStorage.setItem('theme', 'dark');
        button.innerHTML = '☀️ Light Mode';
    } else {
        themeStyle.setAttribute('href', 'style.css'); // Switch to light mode
        localStorage.setItem('theme', 'light');
        button.innerHTML = '🌙 Dark Mode';
    }
}



// Load saved theme from localStorage
if (localStorage.getItem('theme') === 'dark') {
    themeStyle.setAttribute('href', 'dark.css');
    button.innerHTML = '☀️ Light Mode';
}



const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});



document.addEventListener("DOMContentLoaded", function() {
    particlesJS("particles-js", {
        particles: {
            number: { value: 150 },
            size: { value: 2 },
            color: { value: "#ffffff" },
            opacity: { value: 0.8, random: true },
            move: { speed: 0.5 }
        }
    });
});



gsap.registerPlugin(ScrollTrigger);
gsap.to(".container", {
    x: "-400vw", // Moves the container left by 200% of viewport width
    scrollTrigger: {
        trigger: ".scroll-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        onUpdate: (self) => {
            let progress = self.progress * 100;
            document.querySelector(".scroll-progress").style.height = progress + "%";
        }
    }
});

const ctx = document.getElementById('myBarChart').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['HTML', 'CSS', 'JavaScript', 'Python', 'Machine Learning', 'C', 'C++', 'MATLAB'],
        datasets: [{
            label: 'Skill Level',
            data: [90, 85, 80, 75, 70, 70, 65, 60], // Skill percentages
            backgroundColor: ['#441752', '#F60C86', '#318FB5', '#065446', '#005086', '#3C0753', '#860A35', '#610094'],
            borderRadius: 8,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        },
        animation: {
            duration: 4000 // Increase for slower animation (default is 1000)
        }
    }
});




        