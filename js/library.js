function menuAppearFromCenter ( menuElement ) {
  var margins = 40
  var shadow = 5
  var __opacity = 0
  function setSize ( marg, shad, __opacity ) {
    menuElement.style.top = marg + "%"
    menuElement.style.left = marg + "%"
    menuElement.style.bottom = marg + "%"
    menuElement.style.right = marg + "%"
    menuElement.style.opacity = "" + __opacity
  }
  function init () {
    menuElement.className = "popup-window"
    menuElement.style.overflow = "hidden"

    setSize ( margins, shadow, __opacity )
  }

  init ()
  var __interval = setInterval ( function () {
    margins -= 1
    shadow += 1
    __opacity +=5
    if ( margins < 10 ) {
      clearInterval ( __interval )
      menuElement.style.overflow = "auto"
      var closeButton = document.createElement ( 'button' )
      closeButton.className = "popup-window-closeButton"

      closeButton.objToRemove = menuElement

      document.body.appendChild ( closeButton )

      closeButton.onclick = function ( event ) {
        var removingObject = this.objToRemove
        removingObject.style.overflow = "hidden"
        var __interval = setInterval ( function () {
          margins += 1
          shadow -= 1
          __opacity -=5
          if ( margins > 40 ) {
            clearInterval ( __interval )
            removingObject.parentNode.removeChild ( removingObject )
          } else setSize ( margins, shadow, __opacity )
        }, 20 )
        this.parentNode.removeChild ( this )
      }
    }
    else setSize ( margins, shadow, __opacity )
  }, 20 )
}
