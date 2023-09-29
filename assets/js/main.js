/**
* Template Name: MyPortfolio - v4.7.0
* Template URL: https://bootstrapmade.com/myportfolio-bootstrap-portfolio-website-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * burgerMenu
   */
  const burgerMenu = select('.burger')
  on('click', '.burger', function (e) {
    burgerMenu.classList.toggle('active');
  })

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('#portfolio-grid');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.item',
      });

      let portfolioFilters = select('#filters a', true);

      on('click', '#filters a', function (e) {
        e.preventDefault();
        portfolioFilters.forEach(function (el) {
          el.classList.remove('active');
        });
        this.classList.add('active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function () {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()


// Committed Changes on 28-08-2023

function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();



function copyTextAndShowPopup(copyButtonId, copyPopupId, preClassName) {
  const copyButton = document.getElementById(copyButtonId);
  const preTag = document.querySelector(`.${preClassName}`);
  const copyPopup = document.getElementById(copyPopupId);

  copyButton.addEventListener('click', () => {
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = preTag.textContent;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);

    // Show the corresponding popup
    copyPopup.style.display = 'block';

    // Hide the popup after a delay (e.g., 2 seconds)
    setTimeout(() => {
      copyPopup.style.display = 'none';
    }, 2000); // 2 seconds
  });
}

// Initialize copy functionality for the first set of elements
copyTextAndShowPopup('copyButton1', 'copyPopup1', 'prompt1');

// Initialize copy functionality for the second set of elements
copyTextAndShowPopup('copyButton2', 'copyPopup2', 'prompt2');




const iconContainer = document.querySelector('.icon-container');
const popoverContent = document.querySelector('.popover-content');

iconContainer.addEventListener('click', (e) => {
  e.stopPropagation(); // Prevent clicks inside the icon container from closing the popover
  const iconRect = iconContainer.getBoundingClientRect();
  popoverContent.style.top = iconRect.bottom + 'px'; // Position below the icon
  popoverContent.style.left = iconRect.left + 'px'; // Align with the left edge of the icon
  popoverContent.style.display = popoverContent.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', (e) => {
  if (!iconContainer.contains(e.target) && e.target !== popoverContent) {
    popoverContent.style.display = 'none';
  }
});





function copyText(contentId, copyImageClass, tickImageClass) {
  const textToCopy = document.getElementById(contentId);

  // Create a textarea element to temporarily hold the text
  const textarea = document.createElement("textarea");
  textarea.value = textToCopy.textContent;
  document.body.appendChild(textarea);

  // Select the text in the textarea and copy it to the clipboard
  textarea.select();
  document.execCommand("copy");

  // Remove the textarea element
  document.body.removeChild(textarea);

  // Hide the copy button image and show the tick image
  const copyImage = document.querySelector(`.${copyImageClass}`);
  copyImage.style.display = "none";

  // Find the corresponding tick image and show it
  const tickImage = document.querySelector(`.${tickImageClass}`);
  tickImage.style.display = "inline";

  // Reset the tick image after a few seconds
  setTimeout(() => {
    copyImage.style.display = "inline";
    tickImage.style.display = "none";
  }, 2000); // Reset after 2 seconds
}



function adjustPromptBoxSize() {
  const promptBox1 = document.getElementById('prompt-box1');
  const content1 = document.getElementById('content1');
  const promptBox2 = document.getElementById('prompt-box2');
  const content2 = document.getElementById('content2');

  const minHeight = 150;

  // Get the height of the content for both containers
  const contentHeight1 = content1.offsetHeight;
  const contentHeight2 = content2.offsetHeight;


  promptBox1.style.maxHeight = contentHeight1 < minHeight ? minHeight + 'px' : '300px';
  promptBox2.style.maxHeight = contentHeight2 < minHeight ? minHeight + 'px' : '300px';
  // Adjust the prompt box height based on the content height
}

// Call the adjustPromptBoxSize function when the page loads
window.addEventListener('load', adjustPromptBoxSize);

// Call the adjustPromptBoxSize function whenever the content changes
// For example, you can call it after copying the text in your specific use case
function copyText(contentId, copyImageClass, tickImageClass) {
  const textToCopy = document.getElementById(contentId);

  // Create a textarea element to temporarily hold the text
  const textarea = document.createElement("textarea");
  textarea.value = textToCopy.textContent;
  document.body.appendChild(textarea);

  // Select the text in the textarea and copy it to the clipboard
  textarea.select();
  document.execCommand("copy");

  // Remove the textarea element
  document.body.removeChild(textarea);

  // Hide the copy button image and show the tick image
  const copyImage = document.querySelector(`.${copyImageClass}`);
  copyImage.style.display = "none";

  // Find the corresponding tick image and show it
  const tickImage = document.querySelector(`.${tickImageClass}`);
  tickImage.style.display = "inline";

  // Reset the tick image after a few seconds
  setTimeout(() => {
    copyImage.style.display = "inline";
    tickImage.style.display = "none";
  }, 2000); // Reset after 2 seconds

  // After copying, adjust the prompt box size
  adjustPromptBoxSize();
}


