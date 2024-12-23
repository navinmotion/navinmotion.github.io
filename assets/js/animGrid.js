document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container_grid_animation');

  // Check if container exists
  if (!container) {
    console.error('Container not found: .container_grid_animation');
    return;
  }

  // Updated posts array with an additional video for Spine Boy
  const posts = [
    {
      title: 'Sage Welcome Ux/Ui',
      link: 'animation/project-1',
      type: 'image',
      image: 'assets/img/sage.png'
    },
    {
      title: 'Spine Boy',
      link: '',
      type: 'video',
      videos: [
        'assets/video/spineBoy-walking.webm',
        'assets/video/spineBoy-idle.webm'
      ]
    },
    {
      title: 'FlyingPCG',
      link: 'animation/project-5',
      type: 'image',
      image: 'assets/img/primecraft.png'
    },
    {
      title: 'Maa Durga',
      link: '',
      type: 'video',
      videos: [
        'assets/video/Maa-Durga.webm',
        'assets/video/Maa-Durga (Idle).webm',
        'assets/video/Maa-Durga (Skeletal).webm'
      ]
    },
    {
      title: 'Egypt Queen',
      link: '',
      type: 'video',
      videos: [
        'assets/video/Egypt-Queen.webm',
        'assets/video/Egypt-Queen (BTS).webm',
        'assets/video/Egypt-Queen (with bones).webm'
      ]
    },
    {
      title: 'Viking Warrior',
      link: '',
      type: 'video',
      videos: [
        'assets/video/Viking-Warrior.webm',
        'assets/video/Viking-Warrior (BTS).webm',
        'assets/video/Viking-Warrior (with bones).webm'
      ]
    }
  ];

  // Updated generateMasonryGrid function
  function generateMasonryGrid(columns, posts) {
    container.innerHTML = '';

    // Store column arrays that contain relevant posts
    let columnWrappers = {};

    // Create column item array and add this to column wrapper object
    for (let i = 0; i < columns; i++) {
      columnWrappers[`column${i}`] = [];
    }

    // Distribute posts into columns
    for (let i = 0; i < posts.length; i++) {
      const column = i % columns;
      columnWrappers[`column${column}`].push(posts[i]);
    }

    // Create column elements and populate them with posts
    for (let i = 0; i < columns; i++) {
      let columnPosts = columnWrappers[`column${i}`];
      let column = document.createElement('div');
      column.classList.add('column');

      columnPosts.forEach((post) => {
        let postDiv = document.createElement('div');
        postDiv.classList.add('item');

        let anchor = document.createElement('a');
        if (post.link) {
          anchor.href = post.link; // Set the link for the next page if it exists
        } else {
          // Remove href attribute and prevent any action
          anchor.href = "javascript:void(0)"; // Ensures no action is triggered
          anchor.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default action
          });
        }
        anchor.classList.add('item-wrap', 'fancybox');

        let workInfo = document.createElement('div');
        workInfo.classList.add('work-info');

        let heading = document.createElement('h3');
        heading.textContent = post.title; // Set the title of the post

        workInfo.appendChild(heading);

        // Check if the post is an image or a video
        if (post.type === 'image') {
          let image = document.createElement('img');
          image.src = post.image;
          image.classList.add('img-fluid');
          anchor.appendChild(image);
        } 
        else if (post.type === 'video') {
          if (post.videos && Array.isArray(post.videos)) {
            // Create a container for the video slider
            let slider = document.createElement('div');
            slider.classList.add('slider');
        
            // Create a dots container
            let dotsContainer = document.createElement('div');
            dotsContainer.classList.add('dots-container');
        
            // Add videos as slides
            post.videos.forEach((videoSrc, index) => {
              let slide = document.createElement('div');
              slide.classList.add('slide');
              if (index !== 0) slide.style.display = 'none'; // Hide all slides except the first
        
              let video = document.createElement('video');
              video.src = videoSrc;
              video.classList.add('img-fluid');
              video.autoplay = true;
              video.muted = true;
              video.controls = false;
              video.loop = true;
        
              slide.appendChild(video);
              slider.appendChild(slide);
        
              // Create a dot for each video
              let dot = document.createElement('span');
              dot.classList.add('dot');
              if (index === 0) dot.classList.add('active'); // Highlight the first dot initially
              dotsContainer.appendChild(dot);
            });
        
            // Add the slider and dots container to the anchor
            slider.appendChild(dotsContainer);
            anchor.appendChild(slider);
        
            // Functions for slider functionality
            let currentIndex = 0;
        
            function showSlide(n) {
              const slides = slider.querySelectorAll('.slide');
              const dots = dotsContainer.querySelectorAll('.dot');
        
              slides.forEach((slide, index) => {
                slide.style.display = index === n ? 'block' : 'none';
              });
        
              dots.forEach((dot, index) => {
                if (index === n) {
                  dot.classList.add('active');
                } else {
                  dot.classList.remove('active');
                }
              });
            }
        
            function showNextSlide() {
              const slides = slider.querySelectorAll('.slide');
              currentIndex = (currentIndex + 1) % slides.length;
              showSlide(currentIndex);
            }
        
            function showPreviousSlide() {
              const slides = slider.querySelectorAll('.slide');
              currentIndex = (currentIndex - 1 + slides.length) % slides.length;
              showSlide(currentIndex);
            }
        
            // Auto-advance functionality
            setInterval(() => {
              showNextSlide();
            }, 5000); // Auto-advance every 5 seconds
        
            // Swipe gesture handling
            let touchStartX;
            slider.addEventListener('touchstart', (e) => {
              touchStartX = e.touches[0].clientX;
            });
        
            slider.addEventListener('touchend', (e) => {
              const touchEndX = e.changedTouches[0].clientX;
              const delta = touchEndX - touchStartX;
        
              if (delta > 30) {
                showPreviousSlide(); // Swipe right
              } else if (delta < -30) {
                showNextSlide(); // Swipe left
              }
            });
        
            // Show the first slide and start autoplay
            showSlide(0);
            slider.querySelector('.slide').querySelector('video').play();
          } else {
            // Handle single video as before
            let video = document.createElement('video');
            video.src = post.video;
            video.classList.add('img-fluid');
            video.autoplay = true;
            video.muted = true;
            video.loop = true;
            anchor.appendChild(video);
          }
        }        
        
        anchor.appendChild(workInfo);
        postDiv.appendChild(anchor);
        column.appendChild(postDiv);
      });

      container.appendChild(column);
    }
  }

  let previousScreenSize = innerWidth;

  window.addEventListener('resize', () => {
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

  // Page Load
  if (previousScreenSize < 600) {
    generateMasonryGrid(1, posts);
  } else if (previousScreenSize >= 600 && previousScreenSize < 1000) {
    generateMasonryGrid(2, posts);
  } else {
    generateMasonryGrid(3, posts);
  }
});
