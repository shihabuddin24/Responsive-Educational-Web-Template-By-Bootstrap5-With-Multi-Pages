
// ===================================================================================
// Eta hocche dropdown e click and hover korle zate dropdown show kore setar jonno
// ===================================================================================


document.addEventListener("DOMContentLoaded", function () {
    let dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(function (dropdown) {
        let menu = dropdown.querySelector(".dropdown-menu");
        let toggle = dropdown.querySelector(".dropdown-toggle");

        // Hover start in big screen
        dropdown.addEventListener("mouseover", function () {
            if (window.innerWidth >= 992) { 
                let menu = this.querySelector(".dropdown-menu");
                menu.classList.add("show");
            }
        });

        // Stay hover some time 
        dropdown.addEventListener("mouseleave", function () {
            if (window.innerWidth >= 992) {
                let menu = this.querySelector(".dropdown-menu");
                setTimeout(() => {
                    if (!menu.matches(":hover")) {
                        menu.classList.remove("show");
                    }
                }, 200);
            }
        });

        // Hide dropdown on item click (both desktop & mobile)
        menu.querySelectorAll(".dropdown-item").forEach(item => {
            item.addEventListener("click", function () {
                menu.classList.remove("show");
            });
        });
    });

    // Hide dropdown when clicking outside (desktop & mobile)
    document.addEventListener("click", function (event) {
        if (!event.target.closest(".dropdown")) {
            document.querySelectorAll(".dropdown-menu").forEach(menu => menu.classList.remove("show"));
        }
    });
});




// ======================================================================================
// Navbar Toggler button er menu te and bahire click korle er toggler button off hoye zabe
// ======================================================================================


document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    // **Navbar এর বাহিরে ক্লিক করলে Navbar বন্ধ হবে**
    document.addEventListener("click", function (event) {
        if (!navbarToggler.contains(event.target) && !navbarCollapse.contains(event.target)) {
            navbarCollapse.classList.remove("show"); // Navbar বন্ধ করবে
        }
    });

    // **Navbar menu item এ ক্লিক করলে Navbar বন্ধ হবে**
    document.querySelectorAll(".navbar-nav .nav-link").forEach((item) => {
        item.addEventListener("click", function () {
            if (window.innerWidth < 992) { // শুধু মোবাইলে কাজ করবে
                navbarCollapse.classList.remove("show");
            }
        });
    });
});



// ===============================================================
// Achivements Counter Section scroll amination er jonno
// ===============================================================

document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter");
    const speed = 200; // Change animation speed if needed

    const animateCounters = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute("data-targert");
            let count = 0;
            const increment = target / speed;
            
            const updateCounter = () => {
                if (count < target) {
                    count += increment;
                    counter.innerText = Math.ceil(count);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.innerText = target;
                }
            };
            updateCounter();
        });
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.disconnect(); // Stop observing after animation starts
            }
        });
    }, { threshold: 0.5 });

    observer.observe(document.querySelector(".achivement-counter"));
});



// ===================================================================
// NewsLetter and Register input close icon er jonno
//====================================================================


document.addEventListener("DOMContentLoaded", function () {
    // সব ক্লোজ বাটন সিলেক্ট করা
    const closeBtns = document.querySelectorAll(".close-btn");

    closeBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            // যেই `form-floating` div এর মধ্যে ক্লিক হয়েছে, সেটার input খুঁজে বের করা
            const inputField = btn.closest(".form-floating").querySelector(".form-control");
            if (inputField) {
                inputField.value = ""; // ইনপুট ফিল্ড খালি করা
                inputField.blur(); // আনফোকাস করা
            }
        });
    });
});



// ================================================
// Show/Hide Password For Register Section 
// ===============================================


document.addEventListener("DOMContentLoaded", function () {
    document.body.addEventListener("click", function (event) {
        // যদি ক্লিক করা এলিমেন্ট "toggle-pass-btn" হয়
        if (event.target.classList.contains("toggle-pass-btn") || event.target.closest(".toggle-pass-btn")) {
            const btn = event.target.closest(".toggle-pass-btn"); // বাটন সিলেক্ট করা
            const inputField = btn.closest(".form-floating").querySelector(".form-control"); // ইনপুট ফিল্ড সিলেক্ট করা
            
            if (inputField) {
                if (inputField.type === "password") {
                    inputField.type = "text"; // পাসওয়ার্ড দেখানো
                    btn.innerHTML = '<i class="fa-solid fa-eye-slash"></i>'; // আইকন পরিবর্তন
                } else {
                    inputField.type = "password"; // পাসওয়ার্ড লুকানো
                    btn.innerHTML = '<i class="fa-solid fa-eye"></i>'; // আগের আইকন ফেরত
                }
            }
        }
    });
});
