document.addEventListener("DOMContentLoaded", () => {
    const navLinks = Array.from(document.querySelectorAll(".nav-link"));
    const sections = Array.from(document.querySelectorAll("section[id]"));
    const revealItems = Array.from(document.querySelectorAll(".reveal"));

    navLinks.forEach((anchor) => {
        anchor.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = anchor.getAttribute("href");
            const targetElement = targetId ? document.querySelector(targetId) : null;

            if (!targetElement) {
                return;
            }

            const offset = 60;
            const top = targetElement.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: "smooth" });
        });
    });

    const setActiveNav = (id) => {
        navLinks.forEach((link) => {
            const isActive = link.getAttribute("href") === `#${id}`;
            link.classList.toggle("active", isActive);
        });
    };

    const sectionObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveNav(entry.target.id);
                }
            });
        },
        { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 }
    );

    sections.forEach((section) => sectionObserver.observe(section));

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 }
    );

    revealItems.forEach((item) => revealObserver.observe(item));
});
