//  products read more toggole js
function toggleText() {
    const textElements = document.getElementsByClassName("text");

    Array.from(textElements).forEach((element) => {
      const content = element.innerHTML;
      const maxLength = 110; // Maximum number of characters to show

      if (content.length > maxLength) {
        const truncatedContent = content.slice(0, maxLength) + "...";
        const moreText = element.querySelector(".more-text");
        const readMoreLink = element.nextElementSibling;
        const readLessLink = element.nextElementSibling.nextElementSibling;

        element.innerHTML = truncatedContent;
        moreText.style.display = "inline";
        readMoreLink.style.display = "inline";

        readMoreLink.addEventListener("click", function (event) {
          event.preventDefault();
          element.innerHTML = content;
          moreText.style.display = "none";
          readMoreLink.style.display = "none";
          readLessLink.style.display = "inline";
        });

        readLessLink.addEventListener("click", function (event) {
          event.preventDefault();
          element.innerHTML = truncatedContent;
          moreText.style.display = "inline";
          readMoreLink.style.display = "inline";
          readLessLink.style.display = "none";
        });
      }
    });
  }

  // Call the function to toggle text when the page loads
  document.addEventListener("DOMContentLoaded", toggleText);






  // Disable scrolling
function disableScroll() {
    document.body.style.overflow = 'hidden';
}

// Enable scrolling
function enableScroll() {
    document.body.style.overflow = 'auto';
}

document.addEventListener('DOMContentLoaded', function () {
    var popup = document.getElementById('agePopup');
    popup.style.display = 'flex';
    disableScroll();

    document.querySelector('.agree').addEventListener('click', function () {
        popup.style.display = 'none';
        enableScroll();
    });

    document.querySelector('.disagree').addEventListener('click', function () {
        alert('You must be 18 or older to access this site.');
        window.location.href = 'https://www.google.com'; // Redirect to another site
    });
});

// scroll top
document.addEventListener('DOMContentLoaded', function () {
    var scrollTopBtn = document.getElementById('scroll-top-btn');

    window.onscroll = function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = 'block';
      } else {
        scrollTopBtn.style.display = 'none';
      }
    };

    scrollTopBtn.addEventListener('click', function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  });