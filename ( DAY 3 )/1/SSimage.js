var images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg"];
        var currentIndex = 0;
        var slideshow = document.getElementById("slideshow");
        setInterval(function() {
            slideshow.src = images[currentIndex];
            currentIndex = (currentIndex + 1) % images.length;
        }, 2000);