function openMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
}

document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        var skillItems = document.querySelectorAll('.skills .skill-items .item');
        var screenPosition = window.innerHeight / 0.3;

        skillItems.forEach(function(item) {
            var position = item.getBoundingClientRect().top;

            if (position < screenPosition) {
                item.classList.add("active");
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        var workSection = document.getElementById("work");
        var position = workSection.getBoundingClientRect().top;
        var screenPosition = window.innerHeight / 1.3;

        if (position < screenPosition) {
            workSection.classList.add("active");
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        var project = document.getElementById("project");
        var position = project.getBoundingClientRect().top;
        var screenPosition = window.innerHeight / 1.3;

        if (position < screenPosition) {
            project.classList.add("active");
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        var project2 = document.getElementById("project2");
        var position = project2.getBoundingClientRect().top;
        var screenPosition = window.innerHeight / 1.3;

        if (position < screenPosition) {
            project2.classList.add("active");
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        var viewProjects = document.getElementById("viewprojects");
        var position = viewProjects.getBoundingClientRect().top;
        var screenPosition = window.innerHeight / 1.3;

        if (position < screenPosition) {
            viewProjects.classList.add("active");
        }
    });
});