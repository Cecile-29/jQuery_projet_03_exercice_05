var positionDivX = 0;
var positionDivY = 0;

$(document).ready(function(){
  $('input').keydown(function (e) {
    // ces variables correspondent à la largeur et à la hauteur de l'écran - la div
    var windowWidth = $(window).width() -50;
    var windowHeight = $(window).height() -50;

    switch (e.which) {
      case 37: // arrow left
        positionDivX = positionDivX -10;
        if (positionDivX > 0){
          $('#divOnMove').css('margin-left', positionDivX);
        // si la div sort de l'écran à gauche, elle réapparaît de l'autre côté de l'écran droit
        }else if  (positionDivX < 0){
          positionDivX = windowWidth;// largeur de la fenêtre - les 50px de largeur de la div
          $('#divOnMove').css('margin-left', positionDivX);
        }
        break;

        case 39: // arrow right
          positionDivX = positionDivX +10;
          if (positionDivX < windowWidth){
            $('#divOnMove').css('margin-left', positionDivX);
          // si la taille de ma fenêtre est inférieure à la position de ma div
        }else if  (positionDivX > windowWidth){
          positionDivX = 0;
        }
        break;

        case 38: // arrow high
          positionDivY = positionDivY -10;
          if (positionDivY > 0){
            $('#divOnMove').css('margin-top', positionDivY);
            // si la taille de ma fenêtre est inférieure à la position de ma div
          }else if  (positionDivY < 0){
            positionDivY = windowHeight;
            $('#divOnMove').css('margin-top', positionDivY);
          }
        break;

          case 40:    // flèche du bas
            positionDivY = positionDivY +10;
            if (positionDivY < windowHeight){
              $('#divOnMove').css('margin-top', positionDivY);
              // si la taille de ma fenêtre est inférieure à la position de ma div
            }else if  (positionDivY > windowHeight){
              positionDivY = 0;
            }
          break;

      default:
    }
  });
});
