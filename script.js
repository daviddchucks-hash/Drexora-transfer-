// Hero feed: simulate rotating "completed" transfer rows in sync with the beam animation
  const files = ["vacation_photos.zip","Q3_report.pdf","presentation.pptx","mixtape.mp3","notes.docx","screenshot_014.png","all_my_movies.mp4"];
  const feed = document.getElementById('feed');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let i = 0;

  function addRow(){
    const name = files[i % files.length];
    i++;
    const row = document.createElement('div');
    row.className = 'feed-row';
    row.innerHTML = `<span class="fname">${name}</span><span class="feed-badge">completed</span>`;
    feed.prepend(row);
    while(feed.children.length > 3){ feed.removeChild(feed.lastChild); }
  }
  addRow();
  if(!reduceMotion){ setInterval(addRow, 3200); }

  // Mobile menu toggle
  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');
  menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

  // Active nav link on scroll
  const sections = document.querySelectorAll('main section[id]');
  const links = document.querySelectorAll('.nav-link');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        links.forEach(l => l.classList.toggle('active', l.dataset.target === entry.target.id));
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px' });
  sections.forEach(s => observer.observe(s));
