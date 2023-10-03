"use strict";

////////////////////////////////////////////////////////////////////////////////
// Ano alterar ano atual
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

/////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const headerLink = document.querySelector(".main-nav-list");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

headerLink.addEventListener("click", function () {
  headerEl.classList.remove("nav-open");
});

//////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (!ent.isIntersecting) document.body.classList.add("sticky");
    if (ent.isIntersecting) document.body.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-100px",
  }
);
obs.observe(sectionHeroEl);
