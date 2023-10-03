const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('hr_animation');
      }
    }); 
});
let elements = document.querySelectorAll('.hr_wrapper');
for (let elm of elements) {
  observer.observe(elm)
}