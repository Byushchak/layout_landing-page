'use strict';

document.addEventListener('click', documentActions);

function documentActions(e) {
  const targetElement = e.target;

  if (targetElement.closest('.menu__icon')) {
    document.documentElement.classList.toggle('menu-open');
  }

  if (targetElement.closest('.menu__link')) {
    document.documentElement.classList.remove('menu-open');
  }
}

/* global IntersectionObserver */

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2,
};

const callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('--animate');
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(callback, options);

const animElements = document.querySelectorAll('[class*="--anim"]');

animElements.forEach((animElement) => {
  observer.observe(animElement);
});

const contactForm = document.querySelector('.contact__form');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  contactForm.reset();
});
