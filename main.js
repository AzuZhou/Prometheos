document.addEventListener('DOMContentLoaded', function() {
  let eosButton
  let prometeosButton

  const changeButton = function() {
    if (document.getElementsByClassName('upper-button')[0].id === 'prometeos-button') {
      eosButton = document.getElementsByClassName('upper-button')[0]
      eosButton.id = 'eos-button'
      eosButton.innerHTML = "<img src='./assets/about/eos-text.png'> <button> <span style='font-weight: bold;'>EOS</span>.io </button>"

      prometeosButton = document.getElementsByClassName('lower-button')[0]
      prometeosButton.id = 'prometeos-button'
      prometeosButton.innerHTML = "<button> <span>PROMETH</span> <span style='font-weight: bold;'>EOS</span> </button>"

      document.getElementsByClassName('about-logo')[0].style.backgroundImage = 'url(./assets/about/eos-logo.svg)'
      document.getElementsByClassName('prometeos-text')[0].style.display = 'none'
      document.getElementsByClassName('eos-text')[0].style.display = 'block'
    } else {
      prometeosButton = document.getElementsByClassName('upper-button')[0]
      prometeosButton.id = 'prometeos-button'
      prometeosButton.innerHTML =
        "<img src='./assets/about/prometeos-text.png'> <button> <span>PROMETH</span><span style='font-weight: bold;'>EOS</span> </button> <p>Prometheos aims to build a token-based blockchain travel distribution platform</p>"

      eosButton = document.getElementsByClassName('lower-button')[0]
      eosButton.id = 'eos-button'
      eosButton.innerHTML = "<button><span style='font-weight: bold;'>EOS</span>.io</button>"

      document.getElementsByClassName('about-logo')[0].style.backgroundImage = 'url(./assets/about/prometeos-logo.svg)'
      document.getElementsByClassName('eos-text')[0].style.display = 'none'
      document.getElementsByClassName('prometeos-text')[0].style.display = 'block'
    }
  }

  document.getElementsByClassName('lower-button')[0].addEventListener('click', changeButton)
})
