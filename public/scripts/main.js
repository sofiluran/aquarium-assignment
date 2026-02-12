const slideInLeft = (element) => {
  gsap.from(element, {
    x: -100,
    duration: .7,
    ease: "power1.out",
    stagger: .03
  })
}

const bubbleAnimation = (element) => {
  gsap.from(element, {
    y: 100,
    x: ()=> ((Math.random() -.5 ) * 100),
    scale: 0,
    rotation: ()=> ((Math.random() -.5 ) * 50),
    duration: 1,
    ease: "back.out(1.7)",
    color: "rgb(126, 126, 126)",
    stagger: {
      each: 0.01,
      from: "random"
    }
  })
}

const bubbleFadeOut = (element) => {
  gsap.to(element, {
    opacity: 0,
    delay: 1.6,
    duration: .6,
    stagger: .1
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

const factText = document.querySelectorAll(".fact-text")
factText.forEach(text => {
  let p = text.innerText
  text.innerHTML = p.split('').map(e => {
    return `<span class="letter">${e === ' ' ? '&nbsp;' : e}</span>`
  }).join('')
});

const navItems = document.querySelectorAll('.nav-item')
navItems.forEach(item => {
  let underlinedItem = item.querySelector('.nav-underline')
  item.addEventListener('mouseenter', ()=> expandLine(underlinedItem))
  item.addEventListener('mouseleave', ()=> shrinkLine(underlinedItem))
});

const letters = document.querySelectorAll('.letter')
const leftItems = document.querySelectorAll('.nav-left .nav-item')
const rightItems = document.querySelectorAll('.nav-right .nav-item')
const title = document.querySelector('.title')
const sidebarItems = document.querySelectorAll('.sidebar-item')
const sidebarHeader = document.querySelector('.sidebar-header')
const logo = document.querySelector('.logo')
const bubbleVideo = document.querySelectorAll('.bubbles')

fadeIn(logo)
dropDown(logo)
dropDown(navItems)
fadeIn(navItems)
fadeIn(title)
slideUp(title)
slideInLeft(sidebarHeader)
fadeIn(sidebarItems)
slideUp(sidebarItems)
bubbleAnimation(letters)
bubbleFadeOut(bubbleVideo)
