    var storyArea = document.querySelector('.story-area');
    var isScrolling = false;

    storyArea.addEventListener('mouseenter', function() {
        isScrolling = true;
    });

    storyArea.addEventListener('mouseleave', function() {
        isScrolling = false;
    });

    storyArea.addEventListener('wheel', function(event) {
        if (isScrolling) {
            event.preventDefault();
            storyArea.scrollLeft += event.deltaY;
            var scrollWidth = storyArea.scrollWidth - storyArea.clientWidth;

            if (storyArea.scrollLeft >= scrollWidth && event.deltaY > 0) {
                event.stopPropagation();
                storyArea.blur();
                var nextElement = storyArea.parentElement.nextElementSibling;
                if (nextElement) {
                    nextElement.querySelector('.story-area').focus();
                } else {
                    document.body.focus();
                }

                // Yatay scroll sonunda scroll işlemini durdur
                isScrolling = false;
            }
        }
    });
