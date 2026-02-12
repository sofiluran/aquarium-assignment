import { gsap } from "https://cdn.skypack.dev/gsap"
import { Flip } from "https://cdn.skypack.dev/gsap/Flip"

gsap.registerPlugin(Flip);

const slideInLeft = (element) => {
  gsap.from(element, {
    x: -100,
    duration: .7,
    ease: "power1.out",
    stagger: .03
  })
}

const slideInRight = (element) => {
  gsap.to(element, {
    x: "0%",
    duration: .7,
    ease: "elastic.out(.8, .8)",
    stagger: .03
  })
}

const slideOutRight = (element) => {
  gsap.to(element, {
    x: "100%",
    duration: .7,
    ease: "elastic.out(.8, .8)",
    stagger: .03,
    onComplete: ()=> {
      element.classList.remove('active')
    }
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
  console.log(element)
  gsap.from(element, {
    opacity: 0,
    ease: "power2out",
    duration: 1
  })
}

const fadeOn = (element) => {
  gsap.to(element, {
    autoAlpha: 1,
    opacity: 1,
    y: 0,
    ease: "power2out",
    duration: .5
  })
}

const fadeOut = (element) => {
  gsap.to(element, {
    autoAlpha: 0,
    opacity: 0,
    y: 40,
    ease: "power2.out",
    duration: .8,
    stagger: .08
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

const hamburger = document.querySelector(".hamburger")
const mobileNav = document.querySelector(".mobile-nav")
const mobileMenus = document.querySelectorAll('.mobile-nav-item')

hamburger.addEventListener("click", (e) => {
  if(mobileNav.classList.contains('active')){
    slideOutRight(mobileNav)
  } else{
    mobileNav.classList.add('active')
    slideInRight(mobileNav)
  }
})

window.addEventListener('resize', ()=> {
  checkWindowSize()
})

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

const sidebar = document.querySelector('.sidebar')
const sidebarContainer = document.querySelector('.sidebar-area')
const sidebarList = document.querySelector('.sidebar-list')
const minusButton = document.querySelector('.minus-icon')
const plusButton = document.querySelector('.plus-icon')

minusButton.addEventListener('click', ()=> {
  sidebarIn()
})

plusButton.addEventListener('click', ()=> {
  sidebarOut()
})

const sideBarButton = (willClose = true) => {
  const sidebarState = Flip.getState(sidebar)
  const sidebarContState = Flip.getState(sidebarContainer)
  if(willClose) {
    sidebar.classList.add('sidebar-closed')
    sidebarContainer.classList.add('sidebar-area-closed')
  } else {
    sidebar.classList.remove('sidebar-closed')
    sidebarContainer.classList.remove('sidebar-area-closed')
  }
  Flip.from(sidebarState, {
    duration: .2,
    delay: .03,
  })
  Flip.from(sidebarContState, {
    duration: .2,
    delay: .03
  })
}

const sidebarIn = () => {
  fadeOut(minusButton)
  fadeOut(sidebarList)
  fadeOn(plusButton)
  sideBarButton(true)
}

const sidebarOut = () => {
  fadeOn(minusButton)
  fadeOn(sidebarList)
  fadeOut(plusButton)
  sideBarButton(false)
}

const checkWindowSize = () => {
  if (window.innerWidth < 954) {
    sidebar.classList.add('sidebar-closed')
    sidebarContainer.classList.add('sidebar-area-closed')
    sidebarIn()
  } else {
    sidebar.classList?.remove('sidebar-closed')
    sidebarContainer.classList?.remove('sidebar-area-closed')
    sidebarOut()
  }
}

const letters = document.querySelectorAll('.letter')
const title = document.querySelector('.title')
const sidebarItems = document.querySelectorAll('.sidebar-item')
const sidebarHeader = document.querySelector('.sidebar-header')
const logo = document.querySelector('.logo')
const bubbleVideo = document.querySelectorAll('.bubbles')

checkWindowSize()
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

