// Aethoflix - Real Movies Data (2026)
const movies = [
  {
    id: 0,
    title: "Dune: Part Two",
    year: 2024,
    rating: "PG-13",
    duration: "2h 46m",
    desc: "Paul Atreides unites Chani and the Fremen while seeking revenge for his father's death and faces a destiny greater than he could ever have imagined.",
    genres: ["Sci-Fi", "Adventure", "Drama"],
    cast: "Timothée Chalamet, Zendaya, Rebecca Ferguson, Austin Butler, Javier Bardem",
    director: "Denis Villeneuve",
    poster: "images/posters/dune-part-two-official-movie-poster-2024-1.jpg",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny_320x180.mp4",
    category: ["sci-fi", "trending", "popular", "top10"],
    isTop10: true,
    topRank: 1
  },
  {
    id: 1,
    title: "Oppenheimer",
    year: 2023,
    rating: "R",
    duration: "3h 0m",
    desc: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II.",
    genres: ["Drama", "History", "Biography"],
    cast: "Cillian Murphy, Emily Blunt, Matt Damon, Robert Downey Jr.",
    director: "Christopher Nolan",
    poster: "images/posters/oppenheimer-official-movie-poster-2023-h-1.jpg",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    category: ["drama", "popular", "trending"],
    isTop10: true,
    topRank: 2
  },
  {
    id: 2,
    title: "Deadpool & Wolverine",
    year: 2024,
    rating: "R",
    duration: "2h 7m",
    desc: "Deadpool is offered a place in the Marvel Cinematic Universe by the Time Variance Authority, but instead recruits a variant of Wolverine to save his world from extinction.",
    genres: ["Action", "Comedy", "Adventure"],
    cast: "Ryan Reynolds, Hugh Jackman, Emma Corrin, Matthew Macfadyen",
    director: "Shawn Levy",
    poster: "images/posters/deadpool-and-wolverine-official-movie-po-1.jpg",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny_320x180.mp4",
    category: ["action", "trending", "popular"],
    isTop10: true,
    topRank: 3
  },
  {
    id: 3,
    title: "Furiosa: A Mad Max Saga",
    year: 2024,
    rating: "R",
    duration: "2h 28m",
    desc: "The origin story of the warrior Furiosa before her encounter with Mad Max, as she fights to survive in the Wasteland and find her way home.",
    genres: ["Action", "Adventure", "Sci-Fi"],
    cast: "Anya Taylor-Joy, Chris Hemsworth, Tom Burke, Alyla Browne",
    director: "George Miller",
    poster: "images/posters/furiosa-a-mad-max-saga-official-movie-po-1.jpg",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    category: ["action", "sci-fi", "trending"],
    isTop10: true,
    topRank: 4
  },
  {
    id: 4,
    title: "Inception",
    year: 2010,
    rating: "PG-13",
    duration: "2h 28m",
    desc: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    genres: ["Sci-Fi", "Action", "Thriller"],
    cast: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    director: "Christopher Nolan",
    poster: "images/posters/inception-official-movie-poster-high-res-1.jpg",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny_320x180.mp4",
    category: ["sci-fi", "action", "popular"],
    isTop10: false
  },
  {
    id: 5,
    title: "Interstellar",
    year: 2014,
    rating: "PG-13",
    duration: "2h 49m",
    desc: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival as Earth becomes uninhabitable.",
    genres: ["Sci-Fi", "Adventure", "Drama"],
    cast: "Matthew McConaughey, Anne Hathaway, Jessica Chastain, Michael Caine",
    director: "Christopher Nolan",
    poster: "images/posters/interstellar-official-movie-poster-high--1.jpg",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    category: ["sci-fi", "popular", "trending"],
    isTop10: true,
    topRank: 5
  },
  {
    id: 6,
    title: "Spider-Man: Across the Spider-Verse",
    year: 2023,
    rating: "PG",
    duration: "2h 20m",
    desc: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence.",
    genres: ["Animation", "Action", "Adventure"],
    cast: "Shameik Moore, Hailee Steinfeld, Oscar Isaac, Jake Johnson",
    director: "Joaquim Dos Santos, Kemp Powers, Justin K. Thompson",
    poster: "images/posters/spider-man-across-the-spider-verse-offic-1.jpg",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny_320x180.mp4",
    category: ["action", "popular"],
    isTop10: false
  },
  {
    id: 7,
    title: "Top Gun: Maverick",
    year: 2022,
    rating: "PG-13",
    duration: "2h 11m",
    desc: "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates.",
    genres: ["Action", "Drama"],
    cast: "Tom Cruise, Jennifer Connelly, Miles Teller, Jon Hamm",
    director: "Joseph Kosinski",
    poster: "images/posters/top-gun-maverick-official-movie-poster-h-1.jpg",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    category: ["action", "popular", "trending"],
    isTop10: false
  },
  {
    id: 8,
    title: "Barbie",
    year: 2023,
    rating: "PG-13",
    duration: "1h 54m",
    desc: "Barbie suffers a crisis that leads her to question her world and her existence, embarking on a journey to the real world.",
    genres: ["Comedy", "Adventure", "Fantasy"],
    cast: "Margot Robbie, Ryan Gosling, America Ferrera, Will Ferrell",
    director: "Greta Gerwig",
    poster: "images/posters/barbie-2023-official-movie-poster-high-r-1.jpg",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny_320x180.mp4",
    category: ["drama", "popular"],
    isTop10: false
  },
  {
    id: 9,
    title: "Avatar: The Way of Water",
    year: 2022,
    rating: "PG-13",
    duration: "3h 12m",
    desc: "Jake Sully lives with his newfound family formed on the planet of Pandora. Once a familiar threat returns, Jake must work with Neytiri and the army of the Na'vi to protect their home.",
    genres: ["Sci-Fi", "Adventure", "Action"],
    cast: "Sam Worthington, Zoe Saldaña, Sigourney Weaver, Stephen Lang",
    director: "James Cameron",
    poster: "images/posters/avatar-the-way-of-water-official-movie-p-1.jpg",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    category: ["sci-fi", "action", "popular"],
    isTop10: false
  }
];

// My List (persisted in localStorage)
let myList = JSON.parse(localStorage.getItem('aethoflix_mylist')) || [];

// Current movie in modal
let currentMovieId = null;

// DOM references
let navbar, searchInput, mobileMenuBtn;
let trendingRow, top10Row, popularRow, scifiRow, actionRow;
let browseGrid, mylistGrid;
let movieModal, playerModal, videoPlayer;

// Initialize everything
function init() {
  // Grab DOM elements
  navbar = document.getElementById('navbar');
  searchInput = document.getElementById('search-input');
  mobileMenuBtn = document.getElementById('mobile-menu-btn');
  
  trendingRow = document.getElementById('trending-row');
  top10Row = document.getElementById('top10-row');
  popularRow = document.getElementById('popular-row');
  scifiRow = document.getElementById('scifi-row');
  actionRow = document.getElementById('action-row');
  
  browseGrid = document.getElementById('browse-grid');
  mylistGrid = document.getElementById('mylist-grid');
  
  movieModal = document.getElementById('movie-modal');
  playerModal = document.getElementById('player-modal');
  videoPlayer = document.getElementById('video-player');
  
  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Mobile menu toggle
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      const navLinks = document.querySelector('.nav-links');
      navLinks.classList.toggle('mobile-open');
      mobileMenuBtn.classList.toggle('active');
    });
  }
  
  // Search functionality
  searchInput.addEventListener('input', handleSearch);
  
  // Navigation links
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const section = link.getAttribute('data-section');
      
      // Close mobile menu if open
      const navLinks = document.querySelector('.nav-links');
      if (navLinks) navLinks.classList.remove('mobile-open');
      if (mobileMenuBtn) mobileMenuBtn.classList.remove('active');
      
      // Remove active class from all
      document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      
      showSection(section);
    });
  });
  
  // Logo click -> Home
  document.querySelector('.logo').addEventListener('click', (e) => {
    e.preventDefault();
    showSection('home');
    document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
    const homeLink = document.querySelector('.nav-links a[data-section="home"]');
    if (homeLink) homeLink.classList.add('active');
    
    // Close mobile menu
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) navLinks.classList.remove('mobile-open');
    if (mobileMenuBtn) mobileMenuBtn.classList.remove('active');
  });
  
  // Category filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const filter = btn.getAttribute('data-filter');
      filterBrowseMovies(filter);
    });
  });
  
  // Close modals on escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (playerModal.classList.contains('show')) {
        closePlayer();
      } else if (movieModal.classList.contains('show')) {
        closeMovieModal();
      }
    }
  });
  
  // Populate all movie rows
  renderAllRows();
  
  // Render initial browse grid (all)
  renderBrowseGrid(movies);
  
  // Render My List
  renderMyList();
  
  // Show home section by default
  showSection('home');
  
  console.log('%c[Aethoflix] Real movies website initialized successfully.', 'color:#555');
}

// Render all the horizontal movie rows
function renderAllRows() {
  // Trending Now
  const trending = movies.filter(m => m.category.includes('trending'));
  populateMovieRow(trendingRow, trending);
  
  // Top 10
  const top10 = [...movies].filter(m => m.isTop10).sort((a, b) => a.topRank - b.topRank);
  populateTop10Row(top10Row, top10);
  
  // Popular
  const popular = movies.filter(m => m.category.includes('popular'));
  populateMovieRow(popularRow, popular);
  
  // Sci-Fi
  const scifi = movies.filter(m => m.category.includes('sci-fi'));
  populateMovieRow(scifiRow, scifi);
  
  // Action
  const action = movies.filter(m => m.category.includes('action'));
  populateMovieRow(actionRow, action);
}

// Populate a standard movie row
function populateMovieRow(container, movieList) {
  container.innerHTML = '';
  
  movieList.forEach(movie => {
    const card = createMovieCard(movie, false);
    container.appendChild(card);
  });
}

// Populate Top 10 row (with special numbering)
function populateTop10Row(container, movieList) {
  container.innerHTML = '';
  
  movieList.forEach((movie) => {
    const card = createMovieCard(movie, true);
    container.appendChild(card);
  });
}

// Create a single movie card element
function createMovieCard(movie, isTop10 = false) {
  const card = document.createElement('div');
  card.className = `movie-card ${isTop10 ? 'top10' : ''}`;
  
  let badgeHTML = '';
  if (isTop10 && movie.topRank) {
    badgeHTML = `<div class="top10-badge">Top 10</div>`;
  }
  
  let cardHTML = `
    <img src="${movie.poster}" alt="${movie.title}" onerror="this.style.display='none'; this.parentNode.insertAdjacentHTML('beforeend', '<div class=\\'poster-fallback\\'><span>${movie.title}</span><br><small>Poster unavailable</small></div>')">
    
    ${badgeHTML}
    
    <div class="card-overlay">
      <div class="card-title">${movie.title}</div>
      <div class="card-meta">${movie.year} • ${movie.duration}</div>
    </div>
  `;
  
  // Add special top 10 number if needed
  if (isTop10) {
    cardHTML = `
      <div style="position:relative;">
        <img src="${movie.poster}" alt="${movie.title}" onerror="this.style.display='none'; this.parentNode.insertAdjacentHTML('beforeend', '<div class=\\'poster-fallback\\' style=\\'height:260px\\'><span>${movie.title}</span></div>')">
        
        <div class="top10-number" style="left: 6px; bottom: -6px; font-size: 68px;">${movie.topRank}</div>
        
        <div class="card-overlay">
          <div class="card-title">${movie.title}</div>
          <div class="card-meta">${movie.year} • ${movie.duration}</div>
        </div>
      </div>
    `;
  }
  
  card.innerHTML = cardHTML;
  
  // Event listeners
  card.addEventListener('click', () => {
    showMovieModal(movie.id);
  });
  
  // Hover effect
  card.addEventListener('mouseenter', () => {
    if (!isTop10) card.style.boxShadow = '0 15px 30px rgba(0,0,0,0.7)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = '';
  });
  
  return card;
}

// Show movie detail modal
function showMovieModal(movieId) {
  const movie = movies.find(m => m.id === movieId);
  if (!movie) return;
  
  currentMovieId = movieId;
  
  // Set hero / banner background
  const heroEl = document.getElementById('modal-hero');
  heroEl.style.backgroundImage = `url('${movie.poster}')`;
  heroEl.style.backgroundSize = 'cover';
  heroEl.style.backgroundPosition = 'center top';
  
  // Populate fields
  document.getElementById('modal-title').textContent = movie.title;
  document.getElementById('modal-rating').textContent = movie.rating;
  document.getElementById('modal-year').textContent = movie.year;
  document.getElementById('modal-duration').textContent = movie.duration;
  document.getElementById('modal-desc').textContent = movie.desc;
  
  // Genres
  const genresContainer = document.getElementById('modal-genres');
  genresContainer.innerHTML = '';
  movie.genres.forEach(genre => {
    const tag = document.createElement('span');
    tag.className = 'genre-tag';
    tag.textContent = genre;
    genresContainer.appendChild(tag);
  });
  
  // Cast + Director
  document.getElementById('modal-cast').textContent = movie.cast;
  document.getElementById('modal-director').textContent = movie.director;
  
  // My List button status
  updateModalListButton(movieId);
  
  // Similar titles
  renderSimilarMovies(movie);
  
  // Show modal
  movieModal.style.display = 'flex';
  movieModal.classList.add('show');
  
  // Close modal on clicking outside content
  movieModal.onclick = function(e) {
    if (e.target === movieModal) {
      closeMovieModal();
    }
  };
}

// Update the My List button text inside modal
function updateModalListButton(movieId) {
  const btnText = document.getElementById('modal-list-text');
  const isInList = myList.some(id => id === movieId);
  
  if (isInList) {
    btnText.innerHTML = '✓ In My List';
    btnText.parentElement.onclick = () => removeFromMyList(movieId, true);
  } else {
    btnText.innerHTML = '+ My List';
    btnText.parentElement.onclick = () => addToMyList(movieId, true);
  }
}

// Render similar titles (for modal)
function renderSimilarMovies(currentMovie) {
  const container = document.getElementById('modal-similar');
  container.innerHTML = '';
  
  // Get 3 movies that share at least one genre (excluding current)
  const similar = movies
    .filter(m => m.id !== currentMovie.id)
    .filter(m => m.genres.some(g => currentMovie.genres.includes(g)))
    .slice(0, 3);
  
  similar.forEach(movie => {
    const thumb = document.createElement('div');
    thumb.style.cssText = 'width: 78px; height: 110px; border-radius: 4px; overflow: hidden; cursor: pointer; flex-shrink:0;';
    thumb.innerHTML = `
      <img src="${movie.poster}" style="width:100%; height:100%; object-fit:cover;" alt="${movie.title}">
    `;
    
    thumb.onclick = () => {
      closeMovieModal();
      setTimeout(() => {
        showMovieModal(movie.id);
      }, 200);
    };
    
    container.appendChild(thumb);
  });
  
  // If not enough, add more
  if (similar.length < 3) {
    const filler = movies.filter(m => m.id !== currentMovie.id && !similar.includes(m)).slice(0, 3 - similar.length);
    filler.forEach(movie => {
      const thumb = document.createElement('div');
      thumb.style.cssText = 'width: 78px; height: 110px; border-radius: 4px; overflow: hidden; cursor: pointer; flex-shrink:0;';
      thumb.innerHTML = `<img src="${movie.poster}" style="width:100%; height:100%; object-fit:cover;" alt="${movie.title}">`;
      
      thumb.onclick = () => {
        closeMovieModal();
        setTimeout(() => showMovieModal(movie.id), 200);
      };
      container.appendChild(thumb);
    });
  }
}

// Close the movie detail modal
function closeMovieModal() {
  movieModal.style.display = 'none';
  movieModal.classList.remove('show');
}

// Play a movie from the list (main play button)
function playMovie(movieId) {
  const movie = movies.find(m => m.id === movieId);
  if (!movie) return;
  
  // Close modal if open
  if (movieModal.classList.contains('show')) {
    closeMovieModal();
  }
  
  // Open the video player
  openVideoPlayer(movie);
}

// Play movie directly from modal
function playCurrentMovie() {
  if (currentMovieId === null) return;
  const movie = movies.find(m => m.id === currentMovieId);
  if (!movie) return;
  
  closeMovieModal();
  setTimeout(() => {
    openVideoPlayer(movie);
  }, 260);
}

// Open the video player modal
function openVideoPlayer(movie) {
  // Set title
  document.getElementById('player-title').textContent = movie.title;
  
  // Set video source
  videoPlayer.src = movie.videoUrl || "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny_320x180.mp4";
  videoPlayer.load();
  
  // Show player
  playerModal.style.display = 'flex';
  playerModal.classList.add('show');
  
  // Autoplay
  setTimeout(() => {
    videoPlayer.play().catch(() => {
      // Autoplay blocked by browser — that's okay, user can click play
    });
  }, 450);
  
  // Optional: Add event listeners to video
  videoPlayer.onended = () => {
    // Could show a 'next episode' prompt here
  };
}

// Close video player
function closePlayer() {
  videoPlayer.pause();
  videoPlayer.src = ''; // reset source
  playerModal.style.display = 'none';
  playerModal.classList.remove('show');
}

// Add movie to My List
function addToMyList(movieId, fromModal = false) {
  if (!myList.includes(movieId)) {
    myList.push(movieId);
    saveMyList();
    
    // Refresh UI
    renderMyList();
    
    if (fromModal) {
      updateModalListButton(movieId);
    }
    
    // Show brief toast notification
    showToast(`${movies.find(m => m.id === movieId).title} added to My List`);
  }
}

// Remove from My List
function removeFromMyList(movieId, fromModal = false) {
  myList = myList.filter(id => id !== movieId);
  saveMyList();
  
  renderMyList();
  
  if (fromModal) {
    updateModalListButton(movieId);
  }
  
  // If user is currently on My List page, re-render it
  const mylistSection = document.getElementById('mylist-content');
  if (mylistSection.style.display !== 'none') {
    renderMyList();
  }
}

// Toggle My List from modal
function toggleMyListFromModal() {
  if (currentMovieId === null) return;
  
  const isInList = myList.includes(currentMovieId);
  
  if (isInList) {
    removeFromMyList(currentMovieId, true);
  } else {
    addToMyList(currentMovieId, true);
  }
}

// Save My List to localStorage
function saveMyList() {
  localStorage.setItem('aethoflix_mylist', JSON.stringify(myList));
}

// Render My List grid
function renderMyList() {
  const grid = document.getElementById('mylist-grid');
  const empty = document.getElementById('mylist-empty');
  
  grid.innerHTML = '';
  
  if (myList.length === 0) {
    empty.style.display = 'block';
    return;
  } else {
    empty.style.display = 'none';
  }
  
  const listMovies = myList.map(id => movies.find(m => m.id === id)).filter(Boolean);
  
  listMovies.forEach(movie => {
    const card = createMovieCard(movie, false);
    
    // Add remove icon overlay for My List
    const removeBtn = document.createElement('div');
    removeBtn.style.cssText = 'position:absolute; top:8px; right:8px; background:rgba(0,0,0,0.7); color:#fff; width:22px; height:22px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:13px; cursor:pointer; z-index:4;';
    removeBtn.innerHTML = '×';
    
    removeBtn.onclick = (e) => {
      e.stopImmediatePropagation();
      removeFromMyList(movie.id);
    };
    
    card.style.position = 'relative';
    card.appendChild(removeBtn);
    
    grid.appendChild(card);
  });
}

// Show different sections
function showSection(section) {
  const homeContent = document.getElementById('home-content');
  const browseContent = document.getElementById('browse-content');
  const mylistContent = document.getElementById('mylist-content');
  
  // Hide all
  homeContent.style.display = 'none';
  browseContent.style.display = 'none';
  mylistContent.style.display = 'none';
  
  if (section === 'home') {
    homeContent.style.display = 'block';
  } else if (section === 'browse') {
    browseContent.style.display = 'block';
    filterBrowseMovies('all');
  } else if (section === 'mylist') {
    mylistContent.style.display = 'block';
    renderMyList();
  }
}

// Filter browse grid
function filterBrowseMovies(filter) {
  const grid = document.getElementById('browse-grid');
  
  let filtered = movies;
  
  if (filter !== 'all') {
    filtered = movies.filter(movie => movie.category.includes(filter));
  }
  
  renderBrowseGrid(filtered);
}

// Render the full browse grid
function renderBrowseGrid(movieList) {
  const grid = document.getElementById('browse-grid');
  grid.innerHTML = '';
  
  movieList.forEach(movie => {
    const card = createMovieCard(movie, false);
    
    // Add quick add-to-list button on browse cards
    const addBtn = document.createElement('div');
    addBtn.style.cssText = 'position:absolute; top:9px; right:9px; background:rgba(20,20,20,0.85); width:26px; height:26px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:15px; cursor:pointer; z-index:4; border:1px solid #444;';
    addBtn.innerHTML = myList.includes(movie.id) ? '✓' : '+';
    
    addBtn.onclick = (e) => {
      e.stopImmediatePropagation();
      
      if (myList.includes(movie.id)) {
        removeFromMyList(movie.id);
        addBtn.innerHTML = '+';
      } else {
        addToMyList(movie.id);
        addBtn.innerHTML = '✓';
      }
    };
    
    card.style.position = 'relative';
    card.appendChild(addBtn);
    
    grid.appendChild(card);
  });
}

// Search handler
function handleSearch() {
  const query = searchInput.value.toLowerCase().trim();
  
  // If search is active, switch to browse
  const browseContent = document.getElementById('browse-content');
  const homeContent = document.getElementById('home-content');
  
  if (query.length > 1) {
    // Hide home, show browse and filter
    homeContent.style.display = 'none';
    browseContent.style.display = 'block';
    
    // Filter movies
    const results = movies.filter(movie => 
      movie.title.toLowerCase().includes(query) ||
      movie.genres.join(' ').toLowerCase().includes(query) ||
      movie.desc.toLowerCase().includes(query)
    );
    
    renderBrowseGrid(results.length > 0 ? results : []);
    
    // Optional: update section header temporarily
    const header = browseContent.querySelector('.section-title');
    if (header) header.textContent = `Search results for "${query}"`;
  } else {
    // Reset browse if query is cleared
    if (browseContent.style.display === 'block') {
      const header = browseContent.querySelector('.section-title');
      if (header) header.textContent = 'Browse All Titles';
      filterBrowseMovies('all');
    }
  }
}

// Simple toast notification
function showToast(message) {
  const toast = document.createElement('div');
  toast.style.cssText = `position:fixed; bottom:28px; left:50%; transform:translate(-50%, 0); background:#222; color:#ddd; padding:11px 22px; border-radius:4px; font-size:14px; box-shadow:0 3px 12px rgba(0,0,0,0.4); z-index:9999;`;
  toast.textContent = message;
  
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.transition = 'all 0.3s ease';
    toast.style.opacity = '0';
    
    setTimeout(() => {
      toast.remove();
    }, 250);
  }, 1900);
}

// Show full browse view (used by "See All")
function showBrowseAll() {
  // Make nav active
  document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
  const browseLink = document.querySelector('.nav-links a[data-section="browse"]');
  if (browseLink) browseLink.classList.add('active');
  
  showSection('browse');
}

// Logout simulation
function logout() {
  if (confirm('Are you sure you want to sign out?')) {
    document.body.style.transition = 'opacity .35s';
    document.body.style.opacity = '0';
    
    setTimeout(() => {
      window.location.reload();
    }, 400);
  }
}

// Initialize the website
init();
