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
    menuElement.style.boxShadow = shad + "px " + shad + "px " + ( shad * 2 ) + "px " + " rgba(0,0,0,0.5)"
  }
  function init () {
    menuElement.style.position = "fixed"
    menuElement.style.overflow = "hidden"
    menuElement.style.backgroundColor = "#eee"
    menuElement.style.borderRadius = "5px"
    menuElement.style.borderTop = "solid 40px #eee"
    menuElement.style.borderLeft = "solid 15px #eee"
    menuElement.style.borderRight = "solid 15px #eee"
    menuElement.style.borderBottom = "solid 15px #eee"
    menuElement.style.zIndex = "1500"
    menuElement.style.padding = "20px 25px"

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
      menuElement.style.boxShadow = 'inset 1px 1px 1px gray, ' + menuElement.style.boxShadow
      var closeButton = document.createElement ( 'button' )
      closeButton.className = "closeButton"

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
