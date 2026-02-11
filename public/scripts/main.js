const slideInLeft = (element) => {
  gsap.from(element, {
    x: -100,
    duration: .7,
    ease: "power1.out",
    stagger: .03
  })
}

const slideUp = (element) => {
  gsap.from(element, {
    y: 80,
    duration: .6,
    ease: "power1.out",
    stagger: .09
  })
}

const fadeIn = (element) => {
  gsap.from(element, {
    opacity: 0,
    ease: "power2out",
    duration: 1.1
  })
}

const dropDown = (element) => {
  gsap.from(element, {
    y: -50,
    duration: .6,
    ease: "bounce",
    stagger: .03
  })
}

const expandLine = (element) => {
  gsap.to(element, {
    scaleX: 1,
    duration: .4,
    ease: "back.out(1.2)",
  })
}


const shrinkLine = (element) => {
  gsap.to(element, {
    scaleX: 0,
    duration: .4,
    ease: "power1.out",
  })
}

const navItems = document.querySelectorAll('.nav-item')
navItems.forEach(item => {
  let underlinedItem = item.querySelector('.nav-underline')
  item.addEventListener('mouseenter', ()=> expandLine(underlinedItem))
  item.addEventListener('mouseleave', ()=> shrinkLine(underlinedItem))
});

const leftItems = document.querySelectorAll('.nav-left .nav-item')
const rightItems = document.querySelectorAll('.nav-right .nav-item')
const title = document.querySelector('.title')
const sidebarItems = document.querySelectorAll('.sidebar-item')
const sidebarHeader = document.querySelector('.sidebar-header')
const logo = document.querySelector('.logo')

fadeIn(logo)
dropDown(logo)
dropDown(navItems)
fadeIn(navItems)
fadeIn(title)
slideUp(title)
slideInLeft(sidebarHeader)
fadeIn(sidebarItems)
slideUp(sidebarItems)