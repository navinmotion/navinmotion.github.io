document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container_grid_animation');

  let spineResourcesLoaded = false;
  let spineJSLoaded = false;

  function loadSpineWebComponentsResources(callback) {
    if (spineResourcesLoaded) {
      // Resources are already loaded, directly call the callback
      callback();
      return;
    }

    if (spineJSLoaded) {
      // If the Spine JS is already loaded, wait for the callback
      const interval = setInterval(() => {
        if (window.spine) { // Check if the spine object is available
          clearInterval(interval);
          spineResourcesLoaded = true;
          callback();
        }
      }, 100); // Check every 100ms
      return;
    }

    // Load JS from unpkg CDN
    const spineJS = document.createElement('script');
    spineJS.src = 'https://unpkg.com/@esotericsoftware/spine-webcomponents@4.2.*/dist/iife/spine-webcomponents.js';
    document.body.appendChild(spineJS);

    spineJS.onload = () => {
      console.log('Spine Web Components JS loaded');
      spineJSLoaded = true;
      spineResourcesLoaded = true;
      if (callback) callback(); // Execute callback when JS is loaded
    };

    spineJS.onerror = () => {
      console.error('Failed to load Spine Web Components JS');
    };
  }

  // Check if container exists
  if (!container) {
    console.error('Container not found: .container_grid_animation');
    return;
  }

  const posts = [
    {
      title: 'Samurai',
      link: '',
      type: 'spine-component',
      spineData: {
        width: '100%',
        height: '500px',
        skeleton: 'assets/spine/samurai.json',
        atlas: 'assets/spine/samurai.atlas',
        animation: '04 damage',
        backgroundColor: '#1f242d'
      }
    },
    {
      title: 'Anubis',
      link: '',
      type: 'spine-component',
      spineData: {
        width: '100%',
        height: '500px',
        skeleton: 'assets/spine/Anubis.json',
        atlas: 'assets/spine/Anubis.atlas',
        animation: '02 walk',
        backgroundColor: '#1f242d'
      }
    },
    {
      title: 'Maa Durga',
      link: '',
      type: 'spine-component',
      spineData: {
        width: '100%',
        height: '500px',
        skeleton: 'assets/spine/Maa Durga.json',
        atlas: 'assets/spine/Maa Durga.atlas',
        animation: 'idle',
        backgroundColor: '#1f242d'
      }
    },
    {
      title: 'Egypt Queen',
      link: '',
      type: 'spine-component',
      spineData: {
        width: '100%',
        height: '400px',
        skeleton: 'assets/spine/Egypt-Queen.json',
        atlas: 'assets/spine/Egypt-Queen.atlas',
        animation: 'idle-nodding',
        backgroundColor: '#1f242d',
        // video: [
        //   'assets/video/Egypt-Queen.webm',
        // ]
      }
    },
    {
      title: 'Magic Crystal',
      link: '',
      type: 'spine-component',
      spineData: {
        width: '100%',
        height: '400px',
        skeleton: 'assets/spine/magic-crystal-stone.json',
        atlas: 'assets/spine/magic-crystal-stone.atlas',
        animation: 'animation',
        backgroundColor: '#1f242d'
      }
    },
    {
      title: 'Chibi Boy',
      link: '',
      type: 'spine-component',
      spineData: {
        width: '100%',
        height: '500px',
        skeleton: 'assets/spine/Chibi-Boy.json',
        atlas: 'assets/spine/Chibi-Boy.atlas',
        animation: 'walking',
        backgroundColor: '#1f242d'
      }
    },
    {
      title: 'Viking Warrior',
      link: '',
      type: 'video',
      video: 'assets/video/Viking-Warrior.webm'
    },
    {
      title: 'FlyingPCG',
      link: 'animation/project-5',
      type: 'image',
      image: 'assets/img/Thumbnails/primecraft.webp'
    },
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
          anchor.classList.add('item-wrap', 'fancybox', 'hover');
        }

        let workInfo = document.createElement('div');
        workInfo.classList.add('work-info');

        if (post.link) {
          let heading = document.createElement('h3');
          heading.textContent = post.title; // Set the title of the post
          workInfo.appendChild(heading);
        }

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
          }
          else {
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
        else if (post.type === 'spine-component') {
          // Create a container for the slider
          let slider = document.createElement('div');
          slider.classList.add('slider');

          let spineContainer = document.createElement('div');
          const containerId = `spine_container_${Math.random().toString(36).substring(2, 15)}`;
          spineContainer.id = containerId;
          spineContainer.style.width = post.spineData.width;
          spineContainer.style.display = 'flex';
          spineContainer.style.flexDirection = 'column';
          spineContainer.style.backgroundColor = post.spineData.backgroundColor || 'transparent';
          spineContainer.style.overflow = 'hidden';
          spineContainer.style.borderRadius = '8px'; // Optional but keeps cards looking neat if overflow clips

          slider.appendChild(spineContainer);

          // Check if videos are present
          let hasVideos = post.spineData.video && Array.isArray(post.spineData.video) && post.spineData.video.length > 0;

          let videoSlides = [];
          if (hasVideos) {
            // Add videos as slides
            videoSlides = post.spineData.video.map((videoSrc) => {
              let slide = document.createElement('div');
              slide.classList.add('slide');
              slide.style.display = 'none'; // Initially hidden

              let video = document.createElement('video');
              video.src = videoSrc;
              video.classList.add('img-fluid');
              video.autoplay = true;
              video.muted = true;
              video.controls = false;
              video.loop = true;

              slide.appendChild(video);
              return slide;
            });

            videoSlides.forEach((slide) => slider.appendChild(slide));
          }

          // Function to handle slide transitions
          let currentIndex = 0; // Start with the video slides
          const slides = slider.querySelectorAll('.slide');
          const totalSlides = slides.length + 1; // +1 for the Spine Component

          function showNextContent() {
            if (currentIndex < videoSlides.length) {
              // Show video slides one by one
              spineContainer.style.display = 'none';
              slides.forEach((slide, index) => {
                slide.style.display = index === currentIndex ? 'block' : 'none';
              });
              currentIndex = (currentIndex + 1);
              setTimeout(() => showNextContent(), 5000); // Switch to next slide after 5 seconds
            } else if (currentIndex === videoSlides.length) {
              // Go to Spine Component after all video slides have been shown
              spineContainer.style.display = 'block';
              slides.forEach((slide) => (slide.style.display = 'none'));
              currentIndex++;
              setTimeout(() => showNextContent(), 5000); // Display Spine Component for 5 seconds
            } else {
              // If reached the end, start over with the videos
              currentIndex = 0;
              showNextContent();
            }
          }

          // Initialize the cycle
          showNextContent();

          // Add the slider to the anchor
          anchor.appendChild(slider);

          // Initialize Spine Web Components after DOM is ready
          loadSpineWebComponentsResources(() => {
            let wc = document.createElement('spine-skeleton');
            wc.setAttribute('identifier', containerId);
            wc.setAttribute('atlas', post.spineData.atlas);
            wc.setAttribute('skeleton', post.spineData.skeleton);
            if (post.spineData.animation) {
                wc.setAttribute('animation', post.spineData.animation);
            }
            wc.setAttribute('fit', 'contain');
            wc.setAttribute('auto-calculate-bounds', '');
            wc.style.width = '100%';
            wc.style.height = post.spineData.height;
            wc.style.display = 'block';
            wc.style.backgroundColor = 'transparent';
            
            spineContainer.appendChild(wc);

            // Add UI for Dropdowns
            let controlsDiv = document.createElement('div');
            controlsDiv.style.padding = '10px';
            controlsDiv.style.display = 'flex';
            controlsDiv.style.gap = '10px';
            // Stop events from propagating so you can select without triggering other clicks
            controlsDiv.addEventListener('click', (e) => e.stopPropagation());
            controlsDiv.addEventListener('mousedown', (e) => e.stopPropagation());
            controlsDiv.addEventListener('touchstart', (e) => e.stopPropagation());

            let animSelect = document.createElement('select');
            animSelect.style.flex = '1';
            animSelect.style.padding = '6px';
            animSelect.style.borderRadius = '6px';
            animSelect.style.backgroundColor = '#323946';
            animSelect.style.border = '1px solid #4a5568';
            animSelect.style.color = '#ffffff';
            animSelect.style.outline = 'none';
            animSelect.style.cursor = 'pointer';

            let skinSelect = document.createElement('select');
            skinSelect.style.flex = '1';
            skinSelect.style.padding = '6px';
            skinSelect.style.borderRadius = '6px';
            skinSelect.style.backgroundColor = '#323946';
            skinSelect.style.border = '1px solid #4a5568';
            skinSelect.style.color = '#ffffff';
            skinSelect.style.outline = 'none';
            skinSelect.style.cursor = 'pointer';

            controlsDiv.appendChild(animSelect);
            controlsDiv.appendChild(skinSelect);
            spineContainer.appendChild(controlsDiv);

            setTimeout(() => {
              const skeletonComponent = spine.getSkeleton(containerId);
              if (!skeletonComponent) {
                console.error('Spine skeleton not found for id:', containerId);
                return;
              }
              skeletonComponent.whenReady.then((skelInfo) => {
                let skeleton = skelInfo.skeleton;
                
                let showAnimSelect = false;
                let showSkinSelect = false;

                // Populate Animations
                let animations = skeleton.data.animations;
                if (animations.length > 1) {
                    showAnimSelect = true;
                    animations.forEach(anim => {
                      let opt = document.createElement('option');
                      opt.value = anim.name;
                      opt.textContent = anim.name;
                      if (anim.name === post.spineData.animation) {
                        opt.selected = true;
                      }
                      animSelect.appendChild(opt);
                    });
                    animSelect.addEventListener('change', (e) => {
                      wc.setAttribute('animation', e.target.value);
                    });
                } else {
                    animSelect.style.display = 'none';
                }

                // Populate Skins
                let skins = skeleton.data.skins;
                if (skins.length > 1) { // more than default skin
                    showSkinSelect = true;
                    skins.forEach(skin => {
                      let opt = document.createElement('option');
                      opt.value = skin.name;
                      opt.textContent = skin.name;
                      skinSelect.appendChild(opt);
                    });
                    skinSelect.addEventListener('change', (e) => {
                      wc.setAttribute('skin', e.target.value);
                    });
                } else {
                    skinSelect.style.display = 'none';
                }

                // Hide the whole container if there are no dropdowns needed
                if (!showAnimSelect && !showSkinSelect) {
                    controlsDiv.style.display = 'none';
                }
              }).catch(err => {
                console.error('Failed to initialize Spine skeleton:', err);
              });
            }, 100);
          });
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

  // Load Spine resources and then render the grid
  loadSpineWebComponentsResources(() => {
    if (previousScreenSize < 600) {
      generateMasonryGrid(1, posts);
    } else if (previousScreenSize >= 600 && previousScreenSize < 1000) {
      generateMasonryGrid(2, posts);
    } else {
      generateMasonryGrid(3, posts);
    }
  });
});