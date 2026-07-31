// Aethoflix - TMDB Powered

let movies = [];
let myList = JSON.parse(localStorage.getItem('aethoflix_mylist')) || [];
let currentMovieId = null;

let navbar, searchInput, mobileMenuBtn;
let trendingRow, top10Row, popularRow, scifiRow, actionRow;
let browseGrid, mylistGrid;
let movieModal, playerModal, videoPlayer;

// Check TMDB key
function hasTMDBKey() {
  return typeof TMDB_API_KEY !== 'undefined' && TMDB_API_KEY.length > 10;
}

// Fetch from TMDB
async function fetchTMDB(endpoint) {
  if (!hasTMDBKey()) return null;
  
  try {
    const res = await fetch(`${TMDB_BASE_URL}${endpoint}?api_key=${TMDB_API_KEY}&language=en-US`);
    if (!res.ok) throw new Error('TMDB error');
    return await res.json();
  } catch (e) {
    console.warn('TMDB fetch failed:', e);
    return null;
  }
}

async function loadMoviesFromTMDB() {
  if (!hasTMDBKey()) {
    console.log('No TMDB key — using fallback movies');
    return loadFallbackMovies();
  }

  const data = await fetchTMDB('/trending/movie/week');
  if (!data || !data.results) return loadFallbackMovies();

  const results = data.results.slice(0, 12);

  movies = await Promise.all(results.map(async (m) => {
    const details = await fetchTMDB(`/movie/${m.id}`);
    const videos = await fetchTMDB(`/movie/${m.id}/videos`);
    
    let trailer = FALLBACK_VIDEO;
    if (videos && videos.results) {
      const yt = videos.results.find(v => v.site === 'YouTube' && v.type === 'Trailer');
      if (yt) trailer = `https://www.youtube.com/embed/${yt.key}?autoplay=1&rel=0`;
    }

    return {
      id: m.id,
      title: m.title,
      year: m.release_date ? m.release_date.split('-')[0] : '2024',
      rating: m.adult ? 'R' : 'PG-13',
      duration: details && details.runtime ? `${Math.floor(details.runtime/60)}h ${details.runtime%60}m` : '2h',
      desc: m.overview || 'No description available.',
      genres: details && details.genres ? details.genres.map(g => g.name) : ['Action'],
      cast: 'Loading...',
      director: 'Loading...',
      poster: m.poster_path ? TMDB_IMAGE_BASE + m.poster_path : 'images/posters/dune-part-two-official-movie-poster-2024-1.jpg',
      videoUrl: trailer,
      category: ['trending', 'popular'],
      isTop10: Math.random() > 0.6,
      topRank: Math.floor(Math.random() * 8) + 1
    };
  }));

  // Get cast & director
  for (let movie of movies) {
    const credits = await fetchTMDB(`/movie/${movie.id}/credits`);
    if (credits) {
      movie.cast = credits.cast?.slice(0, 4).map(c => c.name).join(', ') || 'Various';
      const dir = credits.crew?.find(c => c.job === 'Director');
      movie.director = dir ? dir.name : 'Various';
    }
  }

  return movies;
}

// Fallback (no API key)
function loadFallbackMovies() {
  movies = [
    { id: 0, title: "Dune: Part Two", year: "2024", rating: "PG-13", duration: "2h 46m", desc: "Paul Atreides unites Chani and the Fremen...", genres: ["Sci-Fi","Adventure"], cast: "Timothée Chalamet, Zendaya", director: "Denis Villeneuve", poster: "images/posters/dune-part-two-official-movie-poster-2024-1.jpg", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny_320x180.mp4", category: ["sci-fi","trending","popular","top10"], isTop10: true, topRank: 1 },
    { id: 1, title: "Oppenheimer", year: "2023", rating: "R", duration: "3h 0m", desc: "The story of J. Robert Oppenheimer...", genres: ["Drama","History"], cast: "Cillian Murphy, Emily Blunt", director: "Christopher Nolan", poster: "images/posters/oppenheimer-official-movie-poster-2023-h-1.jpg", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4", category: ["drama","popular","trending"], isTop10: true, topRank: 2 },
    { id: 2, title: "Deadpool & Wolverine", year: "2024", rating: "R", duration: "2h 7m", desc: "Deadpool recruits Wolverine...", genres: ["Action","Comedy"], cast: "Ryan Reynolds, Hugh Jackman", director: "Shawn Levy", poster: "images/posters/deadpool-and-wolverine-official-movie-po-1.jpg", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny_320x180.mp4", category: ["action","trending"], isTop10: true, topRank: 3 },
    { id: 3, title: "Furiosa: A Mad Max Saga", year: "2024", rating: "R", duration: "2h 28m", desc: "The origin of Furiosa...", genres: ["Action","Sci-Fi"], cast: "Anya Taylor-Joy, Chris Hemsworth", director: "George Miller", poster: "images/posters/furiosa-a-mad-max-saga-official-movie-po-1.jpg", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4", category: ["action","sci-fi"], isTop10: true, topRank: 4 },
    { id: 4, title: "Interstellar", year: "2014", rating: "PG-13", duration: "2h 49m", desc: "A team travels through a wormhole...", genres: ["Sci-Fi","Adventure"], cast: "Matthew McConaughey, Anne Hathaway", director: "Christopher Nolan", poster: "images/posters/interstellar-official-movie-poster-high--1.jpg", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny_320x180.mp4", category: ["sci-fi","popular"], isTop10: false }
  ];
  return movies;
}

// Init
async function init() {
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

  // Scroll effect
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  // Mobile menu
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      document.getElementById('nav-links').classList.toggle('mobile-open');
      mobileMenuBtn.classList.toggle('active');
    });
  }

  // Search
  searchInput.addEventListener('input', handleSearch);

  // Nav links
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const section = link.dataset.section;
      document.getElementById('nav-links').classList.remove('mobile-open');
      if (mobileMenuBtn) mobileMenuBtn.classList.remove('active');
      document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      showSection(section);
    });
  });

  // Logo
  document.querySelector('.logo').onclick = e => {
    e.preventDefault();
    showSection('home');
    document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
    document.querySelector('.nav-links a[data-section="home"]').classList.add('active');
  };

  // Filters
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterBrowseMovies(btn.dataset.filter);
    };
  });

  // Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if (playerModal.classList.contains('show')) closePlayer();
      else if (movieModal.classList.contains('show')) closeMovieModal();
    }
  });

  // Load movies
  await loadMoviesFromTMDB();

  // Show API key notice if missing
  if (!hasTMDBKey()) {
    showAPIKeyNotice();
  }

  renderAllRows();
  renderBrowseGrid(movies);
  renderMyList();
  showSection('home');
}

// Show notice if no API key
function showAPIKeyNotice() {
  const notice = document.createElement('div');
  notice.style.cssText = 'position:fixed;bottom:10px;left:10px;background:#222;color:#ffcc00;padding:8px 12px;border-radius:4px;font-size:12px;z-index:9999';
  notice.innerHTML = `Add your TMDB key in <b>tmdb-config.js</b> for real data`;
  document.body.appendChild(notice);
  setTimeout(() => notice.remove(), 6500);
}

// Render rows (same as before)
function renderAllRows() {
  const trending = movies.filter(m => m.category.includes('trending'));
  populateMovieRow(trendingRow, trending.slice(0, 8));

  const top10 = [...movies].filter(m => m.isTop10).sort((a,b)=>a.topRank-b.topRank);
  populateTop10Row(top10Row, top10);

  const popular = movies.filter(m => m.category.includes('popular'));
  populateMovieRow(popularRow, popular.slice(0, 8));

  const scifi = movies.filter(m => m.genres.some(g => g.toLowerCase().includes('sci')));
  populateMovieRow(scifiRow, scifi);

  const action = movies.filter(m => m.genres.some(g => g.toLowerCase().includes('action')));
  populateMovieRow(actionRow, action);
}

function populateMovieRow(container, list) {
  container.innerHTML = '';
  list.forEach(m => container.appendChild(createMovieCard(m)));
}

function populateTop10Row(container, list) {
  container.innerHTML = '';
  list.forEach(m => container.appendChild(createMovieCard(m, true)));
}

function createMovieCard(movie, isTop10 = false) {
  const card = document.createElement('div');
  card.className = `movie-card ${isTop10 ? 'top10' : ''}`;

  let html = `
    <img src="${movie.poster}" alt="${movie.title}" onerror="this.style.display='none'">
    ${isTop10 ? `<div class="top10-badge">Top 10</div>` : ''}
    <div class="card-overlay">
      <div class="card-title">${movie.title}</div>
      <div class="card-meta">${movie.year} • ${movie.duration}</div>
    </div>
  `;

  if (isTop10) {
    html = `
      <div style="position:relative">
        <img src="${movie.poster}" alt="${movie.title}">
        <div class="top10-number">${movie.topRank}</div>
        <div class="card-overlay">
          <div class="card-title">${movie.title}</div>
          <div class="card-meta">${movie.year} • ${movie.duration}</div>
        </div>
      </div>`;
  }

  card.innerHTML = html;
  card.onclick = () => showMovieModal(movie.id);
  return card;
}

// Modal
function showMovieModal(id) {
  const movie = movies.find(m => m.id === id);
  if (!movie) return;
  currentMovieId = id;

  document.getElementById('modal-hero').style.backgroundImage = `url('${movie.poster}')`;
  document.getElementById('modal-title').textContent = movie.title;
  document.getElementById('modal-rating').textContent = movie.rating;
  document.getElementById('modal-year').textContent = movie.year;
  document.getElementById('modal-duration').textContent = movie.duration;
  document.getElementById('modal-desc').textContent = movie.desc;

  const genresEl = document.getElementById('modal-genres');
  genresEl.innerHTML = movie.genres.map(g => `<span class="genre-tag">${g}</span>`).join('');

  document.getElementById('modal-cast').textContent = movie.cast;
  document.getElementById('modal-director').textContent = movie.director;

  updateModalListButton(id);
  renderSimilarMovies(movie);

  movieModal.style.display = 'flex';
  movieModal.classList.add('show');
  movieModal.onclick = e => { if (e.target === movieModal) closeMovieModal(); };
}

function updateModalListButton(id) {
  const btn = document.getElementById('modal-list-text');
  const inList = myList.includes(id);
  btn.innerHTML = inList ? '✓ In My List' : '+ My List';
  btn.parentElement.onclick = () => inList ? removeFromMyList(id, true) : addToMyList(id, true);
}

function renderSimilarMovies(current) {
  const container = document.getElementById('modal-similar');
  container.innerHTML = '';
  movies.filter(m => m.id !== current.id).slice(0, 3).forEach(m => {
    const div = document.createElement('div');
    div.style.cssText = 'width:78px;height:110px;border-radius:4px;overflow:hidden;cursor:pointer';
    div.innerHTML = `<img src="${m.poster}" style="width:100%;height:100%;object-fit:cover">`;
    div.onclick = () => { closeMovieModal(); setTimeout(() => showMovieModal(m.id), 180); };
    container.appendChild(div);
  });
}

function closeMovieModal() {
  movieModal.style.display = 'none';
  movieModal.classList.remove('show');
}

// Play
function playMovie(id) {
  const m = movies.find(x => x.id === id);
  if (!m) return;
  closeMovieModal();
  openVideoPlayer(m);
}

function playCurrentMovie() {
  if (currentMovieId == null) return;
  const m = movies.find(x => x.id === currentMovieId);
  closeMovieModal();
  setTimeout(() => openVideoPlayer(m), 220);
}

function openVideoPlayer(movie) {
  document.getElementById('player-title').textContent = movie.title;
  
  const container = document.querySelector('.video-container');
  container.innerHTML = '';

  if (movie.videoUrl.includes('youtube.com')) {
    // YouTube trailer
    const iframe = document.createElement('iframe');
    iframe.src = movie.videoUrl;
    iframe.width = '100%';
    iframe.height = '620';
    iframe.style.maxWidth = '1180px';
    iframe.allow = 'autoplay; encrypted-media';
    iframe.allowFullscreen = true;
    container.appendChild(iframe);
  } else {
    const video = document.createElement('video');
    video.id = 'video-player';
    video.controls = true;
    video.autoplay = true;
    video.style.cssText = 'max-width:1180px;max-height:620px;width:100%;background:#111';
    video.src = movie.videoUrl;
    container.appendChild(video);
    setTimeout(() => video.play().catch(()=>{}), 400);
  }

  playerModal.style.display = 'flex';
  playerModal.classList.add('show');
}

function closePlayer() {
  playerModal.style.display = 'none';
  playerModal.classList.remove('show');
  const container = document.querySelector('.video-container');
  container.innerHTML = `<video id="video-player" controls autoplay width="100%" style="max-width:1180px;max-height:620px;background:#111"></video>`;
}

// My List
function addToMyList(id, fromModal) {
  if (!myList.includes(id)) {
    myList.push(id);
    localStorage.setItem('aethoflix_mylist', JSON.stringify(myList));
    renderMyList();
    if (fromModal) updateModalListButton(id);
    showToast(`${movies.find(m=>m.id===id).title} added`);
  }
}

function removeFromMyList(id, fromModal) {
  myList = myList.filter(x => x !== id);
  localStorage.setItem('aethoflix_mylist', JSON.stringify(myList));
  renderMyList();
  if (fromModal) updateModalListButton(id);
}

function toggleMyListFromModal() {
  if (currentMovieId == null) return;
  const inList = myList.includes(currentMovieId);
  inList ? removeFromMyList(currentMovieId, true) : addToMyList(currentMovieId, true);
}

function renderMyList() {
  const grid = document.getElementById('mylist-grid');
  const empty = document.getElementById('mylist-empty');
  grid.innerHTML = '';

  if (!myList.length) {
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';

  myList.forEach(id => {
    const movie = movies.find(m => m.id === id);
    if (!movie) return;
    const card = createMovieCard(movie);
    const del = document.createElement('div');
    del.style.cssText = 'position:absolute;top:8px;right:8px;background:rgba(0,0,0,.7);color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:15px;cursor:pointer;z-index:4';
    del.innerHTML = '×';
    del.onclick = e => { e.stopImmediatePropagation(); removeFromMyList(id); };
    card.style.position = 'relative';
    card.appendChild(del);
    grid.appendChild(card);
  });
}

// Sections
function showSection(section) {
  ['home-content','browse-content','mylist-content'].forEach(id => {
    document.getElementById(id).style.display = 'none';
  });
  if (section === 'home') document.getElementById('home-content').style.display = 'block';
  if (section === 'browse') {
    document.getElementById('browse-content').style.display = 'block';
    filterBrowseMovies('all');
  }
  if (section === 'mylist') {
    document.getElementById('mylist-content').style.display = 'block';
    renderMyList();
  }
}

function filterBrowseMovies(filter) {
  let filtered = movies;
  if (filter !== 'all') {
    filtered = movies.filter(m => 
      m.genres.some(g => g.toLowerCase().includes(filter)) ||
      m.category.includes(filter)
    );
  }
  renderBrowseGrid(filtered);
}

function renderBrowseGrid(list) {
  const grid = document.getElementById('browse-grid');
  grid.innerHTML = '';
  list.forEach(movie => {
    const card = createMovieCard(movie);
    const add = document.createElement('div');
    add.style.cssText = 'position:absolute;top:9px;right:9px;background:rgba(20,20,20,.85);width:26px;height:26px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:15px;cursor:pointer;z-index:4;border:1px solid #444';
    add.innerHTML = myList.includes(movie.id) ? '✓' : '+';
    add.onclick = e => {
      e.stopImmediatePropagation();
      if (myList.includes(movie.id)) {
        removeFromMyList(movie.id);
        add.innerHTML = '+';
      } else {
        addToMyList(movie.id);
        add.innerHTML = '✓';
      }
    };
    card.style.position = 'relative';
    card.appendChild(add);
    grid.appendChild(card);
  });
}

function handleSearch() {
  const q = searchInput.value.toLowerCase().trim();
  const browse = document.getElementById('browse-content');
  const home = document.getElementById('home-content');

  if (q.length > 1) {
    home.style.display = 'none';
    browse.style.display = 'block';
    const res = movies.filter(m => m.title.toLowerCase().includes(q) || m.desc.toLowerCase().includes(q));
    renderBrowseGrid(res);
  } else {
    if (browse.style.display === 'block') {
      filterBrowseMovies('all');
    }
  }
}

function showToast(msg) {
  const t = document.createElement('div');
  t.style.cssText = 'position:fixed;bottom:25px;left:50%;transform:translate(-50%);background:#222;color:#ddd;padding:9px 18px;border-radius:4px;font-size:13px;z-index:9999';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => {
    t.style.transition = 'opacity .3s';
    t.style.opacity = '0';
    setTimeout(() => t.remove(), 200);
  }, 1700);
}

function showBrowseAll() {
  document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
  const b = document.querySelector('.nav-links a[data-section="browse"]');
  if (b) b.classList.add('active');
  showSection('browse');
}

function logout() {
  if (confirm('Sign out?')) location.reload();
}

// Start
init();