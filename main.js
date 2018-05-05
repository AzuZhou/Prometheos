document.addEventListener('DOMContentLoaded', function() {
  let eosButton
  let prometheosButton

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        })
    })
})
  
  window.onscroll = function() {
    if ( window.scrollY >= 702 ) {
      if (document.getElementsByClassName('about-logo')[0].id === 'empty') {
        document.getElementsByClassName('about-logo')[0].id = 'notEmpty'
        toPrometheos()
      } 
    }
  }

  const toEos = () => {

    eosButton = document.getElementsByClassName('upper-button')[0]
    eosButton.id = 'eos-button'
    eosButton.innerHTML = "<img src='./assets/about/eos-text.png' id='eos-button-img' style='visibility: hidden;'> <button id='eos-button-btn' style='visibility: hidden;'> <span style='font-weight: bold;'>EOS</span><span>.io</span> </button>"
    prometheosButton = document.getElementsByClassName('lower-button')[0]
    prometheosButton.innerHTML = "<button class='disabled' style='animation: '';'> <span>PROMETH</span> <span style='font-weight: bold;'>EOS</span> </button>"
    document.getElementsByClassName('disabled')[0].style.position = "absolute"
    document.getElementsByClassName('disabled')[0].style.zIndex = "-1"

    setTimeout(() => {
      document.getElementById("eos-button-btn").style.visibility = "visible"
      document.getElementById("eos-button-btn").style.animation = "grow-up .5s linear forwards"
      document.getElementsByClassName('backgroundImg')[0].style.backgroundImage = 'url(./assets/about/eos-logo.svg)'
      document.getElementsByClassName('backgroundImg')[0].style.animation = "appear 2s linear both"
    }, 400)

    setTimeout(() => {
      document.getElementById("eos-button-img").style.visibility = "visible"
      document.getElementById("eos-button-img").style.animation = "grow-up .5s linear forwards"
    }, 1200)

    setTimeout(() => {
      document.getElementById("eos-text-p1").style.visibility = "visible"
      document.getElementById("eos-text-p1").style.animation = "grow-up .5s linear forwards"
    }, 2000)

    setTimeout(() => {
      document.getElementById("eos-text-p2").style.visibility = "visible"
      document.getElementById("eos-text-p2").style.animation = "grow-up .5s linear forwards"
    }, 2800)

    setTimeout(() => {
      document.getElementById("eos-text-p3").style.visibility = "visible"
      document.getElementById("eos-text-p3").style.animation = "grow-up .5s linear forwards"
    }, 3600)

    setTimeout(() => {
      document.getElementsByClassName('disabled')[0].style.zIndex = "0"
      document.getElementsByClassName('disabled')[0].style.animation = "appear 1s linear forwards"
    },4000)

    document.getElementsByClassName('prometheos-text')[0].style.display = 'none'
    document.getElementsByClassName('eos-text')[0].style.display = 'block'


    document.getElementById("eos-button-img").style.visibility = "hidden"
    document.getElementById("eos-button-img").style.animation = ""

    document.getElementById("eos-text-p1").style.visibility = "hidden"
    document.getElementById("eos-text-p1").style.animation = ""

    document.getElementById("eos-text-p2").style.visibility = "hidden"
    document.getElementById("eos-text-p2").style.animation = ""

    document.getElementById("eos-text-p3").style.visibility = "hidden"
    document.getElementById("eos-text-p3").style.animation = ""

  }

  const toPrometheos = () => {

    prometheosButton = document.getElementsByClassName('upper-button')[0]
    prometheosButton.id = 'prometheos-button'
    prometheosButton.innerHTML =
      "<img src='./assets/about/prometheos-text.png' id='prometheos-button-img' style='visibility: hidden;'> <button id='prometheos-button-btn' style='visibility: hidden;'> <span>PROMETH</span><span style='font-weight: bold;'>EOS</span> </button> <p id='prometheos-button-p' style='visibility: hidden;'>Prometheos aims to build a token-based blockchain travel distribution platform</p>"
    eosButton = document.getElementsByClassName('lower-button')[0]
    eosButton.innerHTML = "<button class='disabled' style='animation: '';'><span style='font-weight: bold;'>EOS</span>.io</button>"
    document.getElementsByClassName('disabled')[0].style.position = "absolute"
    document.getElementsByClassName('disabled')[0].style.zIndex = "-1"

    setTimeout(() => {
      document.getElementById("prometheos-button-btn").style.visibility = "visible"
      document.getElementById("prometheos-button-btn").style.animation = "grow-up .5s linear forwards"
      document.getElementsByClassName('backgroundImg')[0].style.backgroundImage = 'url(./assets/about/prometheos-logo.svg)'
      document.getElementsByClassName('backgroundImg')[0].style.animation = "appear 2s linear both"
    }, 400)

    setTimeout(() => {
      document.getElementById("prometheos-button-img").style.visibility = "visible"
      document.getElementById("prometheos-button-img").style.animation = "grow-up .5s linear forwards"
      document.getElementById("prometheos-button-p").style.visibility = "visible"
      document.getElementById("prometheos-button-p").style.animation = "grow-up .5s linear forwards"
    }, 1200)

    setTimeout(() => {
      document.getElementById("prometheos-text-p").style.visibility = "visible"
      document.getElementById("prometheos-text-p").style.animation = "grow-up .5s linear forwards"
    }, 2000)

    setTimeout(() => {
      document.getElementById("prometheos-text-ul").style.visibility = "visible"
      document.getElementById("prometheos-text-ul").style.animation = "grow-up .5s linear forwards"
    }, 2800)

    setTimeout(() => {
      document.getElementsByClassName('disabled')[0].style.zIndex = "0"
      document.getElementsByClassName('disabled')[0].style.animation = "appear 1s linear forwards"
    }, 3200)
    
    document.getElementsByClassName('eos-text')[0].style.display = 'none'
    document.getElementsByClassName('prometheos-text')[0].style.display = 'block'


    document.getElementById("prometheos-button-img").style.visibility = "hidden"
    document.getElementById("prometheos-button-img").style.animation = ""
    document.getElementById("prometheos-button-p").style.visibility = "hidden"
    document.getElementById("prometheos-button-p").style.animation = ""

    document.getElementById("prometheos-text-p").style.visibility = "hidden"
    document.getElementById("prometheos-text-p").style.animation = ""

    document.getElementById("prometheos-text-ul").style.visibility = "hidden"
    document.getElementById("prometheos-text-ul").style.animation = ""

  }

  const changeButton = function() {
    if (document.getElementsByClassName('upper-button')[0].id === 'prometheos-button') {
      toEos()
    } else {
      toPrometheos()
    }
    
  }

  document.getElementsByClassName('lower-button')[0].addEventListener('click', changeButton)
})
