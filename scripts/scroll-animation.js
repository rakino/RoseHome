window.addEventListener('scroll', (e) => {
  let scrolled = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
  
  let $h1 = document.querySelector('h1')

  $h1.style.opacity = scrolled * 10

  //$theChip.style.width = $theChip.style.height = document.documentElement.clientWidth * 20 * (scrolled * scrolled * scrolled) + 'px'

  //if (scrolled <= 0.3) {
      //$h1.style.opacity = scrolled * 5 
      //$h1.style.marginTop = scrolled * 1000 * -1 + 'px'
    //} else {
        //$h1.style.opacity = 0
      //}
  
  //if (scrolled <= 0.2) {
  //    $A13.style.opacity = (scrolled - 0.1) / 0.1
  //  } else {
  //      $A13.style.opacity = 1
  //    }
  
  //if (scrolled >= 0.5) {
  //    $A13TextBg.style.opacity = (1 - scrolled) / 0.5
  //    $theChip.classList.add('transparent')
  //  } else {
  //      $A13TextBg.style.opacity = 1
  //      $theChip.classList.remove('transparent')
  //    }
  
  //if (scrolled >= 0.95) {
  //    $theChip.style.opacity = (1 - scrolled) / 0.05
  //  } else {
  //      $theChip.style.opacity = 1
  //    }
  
})
