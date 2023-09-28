const container = document.querySelector('.container_grid');
let activePopup = null; // To track the active popup

function generateMasonryGrid(columns, posts) {
  container.innerHTML = '';

  //Store column arrays that contain relevant posts
  let columnWrappers = {};

  //Create column item array and  add this to column wrapper object
  for (let i = 0; i < columns; i++) {
    columnWrappers[`column${i}`] = [];
  }
  for (let i = 0; i < posts.length; i++) {
    const column = i % columns;
    columnWrappers[`column${column}`].push(posts[i]);
  }
  for (let i = 0; i < columns; i++) {
    let columnPosts = columnWrappers[`column${i}`];
    let column = document.createElement('div');
    column.classList.add('column');
    columnPosts.forEach((posts) => {
      let postDiv = document.createElement('div');
      postDiv.classList.add('post');
      let image = document.createElement('img');
      image.src = posts.image;

      let infoIcon = document.createElement('div');
      infoIcon.classList.add('info-icon'); // You can style this class for the icon
      infoIcon.innerHTML = '<i class="fas fa-info-circle"></i>'; // You can use any icon library or custom icon

      let infoPopup = document.createElement('div');
      infoPopup.classList.add('info-popup'); // You can style this class for the popup

      infoPopup.innerHTML = '';

      for (let i = 0; i < posts.heading.length; i++) {
        const parameter = posts.parameter
        const heading = posts.heading[i];
        const content = posts.content[i];

        switch (i) {
          case 0:
            if (heading && content) {
              infoPopup.innerHTML += `
                <div class="popup-section1">
                <div class="alignment-container">
                  <div class="popup-heading">${heading}</div>
                  <div class="parameter">${parameter}</div>
                  <button class="copy-button"></button>
                </div>
                <div class="popup-content">${content}</div>
              </div><br>`;
            }
            break;
          case 2:
          case 3:
            if (heading && content) {
              infoPopup.innerHTML += `
                  <div class="popup-section1">
                    <div class="alignment-container">
                      <div class="popup-heading">${heading}</div>
                      <div class="popup-content">${content}</div>
                    </div>
                  </div><br>`;
            }
            break;
          case 4:
          case 5:
            if (heading && content) {
              infoPopup.innerHTML += `
                <div class="popup-section2">
                  <div class="alignment-container">
                    <div class="popup-heading">${heading}</div>
                    <div class="popup-content" style="padding-left: 10px;">${content}</div>
                  </div>
                </div><br>`;
            }
            break;
          case 6:
          case 7:  
            if (heading && content) {
              infoPopup.innerHTML += `
                <div class="popup-section3">
                  <div class="alignment-container">
                    <div class="popup-heading">${heading}</div>
                    <div class="popup-content" style="padding-left: 50px;">${content}</div>
                  </div>
                </div><br>`;
            }
            break;
          default: // For other entries
            infoPopup.innerHTML += `
              <div class="popup-section1">
              <div class="alignment-container">
                <div class="popup-heading">${heading}</div>
                <button class="copy-button"></button>
              </div>
                <div class="popup-content">${content}</div>
              </div><br>`;
            break;
        }
        
      }

      infoIcon.addEventListener('click', () => {
        if (infoPopup.style.display === 'block') {
          infoPopup.style.display = 'none'; // Hide the popup if it's already open
        } else {
          // Close any active popup if one exists
          if (activePopup) {
            activePopup.style.display = 'none';
          }
          infoPopup.style.display = 'block'; // Show the popup when the info icon is clicked
          activePopup = infoPopup; // Set the active popup
        }
      });

      // Add a click event listener to the document body
      document.body.addEventListener('click', (event) => {
        // Check if the click target is not the info icon or the info popup
        if (
          !infoIcon.contains(event.target) &&
          !infoPopup.contains(event.target)
        ) {
          // Hide the info popup
          infoPopup.style.display = 'none';
          activePopup = null; // Set activePopup to null
        }
      });
      
      postDiv.append(image, infoIcon, infoPopup);
      column.appendChild(postDiv);
    });
    container.appendChild(column);
  }
}

let previousScreenSize = innerWidth;
console.log(previousScreenSize);

window.addEventListener('resize', () => {
  imageIndex = 0;
  if (innerWidth < 600 && previousScreenSize >= 600) {
    generateMasonryGrid(1, posts);
  } else if (
    innerWidth >= 600 &&
    innerWidth < 1000 &&
    (previousScreenSize < 600 || previousScreenSize >= 1000)
  ) {
    generateMasonryGrid(2, posts);
  } else if (innerWidth >= 1000 && previousScreenSize < 1000) {
    generateMasonryGrid(3, posts);
  }
  previousScreenSize = innerWidth;
});

//Page Load
if (previousScreenSize < 600) {
  generateMasonryGrid(1, posts);
} else if (previousScreenSize >= 600 && previousScreenSize < 1000) {
  generateMasonryGrid(2, posts);
} else {
  generateMasonryGrid(3, posts);
}

// Add a click event listener to the document body for copy buttons
document.body.addEventListener('click', (event) => {
  const copyButton = event.target.closest('.copy-button');
  if (copyButton) {
    const popup = copyButton.closest('.info-popup');
    if (popup) {
      const popupContent = popup.querySelector('.popup-content');
      if (popupContent) {
        const sectionContent = copyButton.closest('.popup-section1');
        if (sectionContent) {
          const textToCopy = sectionContent.querySelector('.popup-content').innerText;
          copyTextToClipboard(textToCopy, copyButton);
        }
      }
    }
  }
});

// Function to copy text to the clipboard
function copyTextToClipboard(text, copyButton) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);

  // Optionally, you can provide user feedback here using the .copy-done class for the specific copyButton
  copyButton.innerText = ''; // Clear any previous text
  copyButton.classList.add('copy-done'); // Add the .copy-done class

  setTimeout(() => {
    copyButton.classList.remove('copy-done'); // Remove the .copy-done class after some time
  }, 1000); // Reset the button appearance after 1 second
}