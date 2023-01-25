const _nav = document.querySelector('.navbar');
let nums = document.querySelectorAll(".counter-num");
let section = document.querySelector("#services");
let started = false;

window.addEventListener('scroll', () => {
    if(window.scrollY > window.innerHeight){
        _nav.classList.add('nav-scroll');
        var items = document.querySelectorAll('.nav-link');
        var logo = document.querySelector('.navbar-brand')
        logo.classList.add('nav-link-b')
        for(var i=0;i<items.length;i++)
        {
            items[i].classList.add('nav-link-b');
        } 
    }else if(window.scrollY <= window.innerHeight){
        _nav.classList.remove('nav-scroll');
        var items = document.querySelectorAll('.nav-link');
        var logo = document.querySelector('.navbar-brand')
        logo.classList.remove('nav-link-b')
        for(var i=0;i<items.length;i++)
        {
            items[i].classList.remove('nav-link-b');
        } 
    }
    if (window.scrollY > section.scrollHeight) {
        if (!started) {
          nums.forEach((num) => startCount(num));
        }
        started = true;
      }
});

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
      el.textContent++;
      if (el.textContent == goal) {
        clearInterval(count);
      }
    }, 2000 / goal);
  }