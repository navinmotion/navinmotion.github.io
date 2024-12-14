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
      link: '#',
      type: 'video',
      videos: [
        'assets/video/spineBoy-walking.mp4',
        'assets/video/spineBoy-idle.mp4'
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
      link: '#',
      type: 'video',
      videos: [
        'assets/video/Maa-Durga.mp4',
        'assets/video/Maa-Durga (Idle).mp4',
        'assets/video/Maa-Durga (Skeletal).mp4'
      ]
    },
    {
      title: 'Egypt Queen',
      link: '#',
      type: 'video',
      videos: [
        'assets/video/Egypt-Queen.mp4',
        'assets/video/Egypt-Queen (BTS).mp4',
        'assets/video/Egypt-Queen (with bones).mp4'
      ]
    },
    {
      title: 'Viking Warrior',
      link: '#',
      type: 'video',
      videos: [
        'assets/video/Viking-Warrior.mp4',
        'assets/video/Viking-Warrior (BTS).mp4',
        'assets/video/Viking-Warrior (with bones).mp4'
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
        anchor.href = post.link; // Set the link for the next page
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
        } else if (post.type === 'video') {
          // Handle multiple videos
          if (post.videos && Array.isArray(post.videos)) {
            let video = document.createElement('video');
            video.src = post.videos[0];
            video.classList.add('img-fluid');
            video.autoplay = true;
            video.muted = true;
            video.loop = false; // Disable looping for chaining
            video.controls = true;

            // Chain videos
            let currentVideoIndex = 0;
            video.onended = () => {
              currentVideoIndex++;
              if (currentVideoIndex < post.videos.length) {
                video.src = post.videos[currentVideoIndex];
                video.play();
              } else {
                currentVideoIndex = 0; // Reset to first video
                video.src = post.videos[currentVideoIndex];
                video.play();
              }
            };

            anchor.appendChild(video);
          } else {
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
