
// IntersectionObserver to reveal elements
const reveal = () => {
  const els = document.querySelectorAll('[data-animate]');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  },{threshold:.15});
  els.forEach(el=>io.observe(el));
};
reveal();

// Dynamic year
document.getElementById('year').textContent = new Date().getFullYear();
