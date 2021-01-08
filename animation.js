(function() {
  let type = window.getComputedStyle(document.documentElement).getPropertyValue('--slide-animation');
  let speed = window.getComputedStyle(document.documentElement).getPropertyValue('--slide-speed');
  let slides = window.getComputedStyle(document.documentElement).getPropertyValue('--num-of-slides');
  let time = window.getComputedStyle(document.documentElement).getPropertyValue('--display-time');
  type = type.trim();
  speed = Number(speed);
  if (speed < 1) {
    speed = 1;
  } else if (speed > 10) {
    speed = 10;
  }
  slides = Number(slides);
  time = parseInt(time);
  
  var end = 100 / slides;
  var start = (end / 2) * (1 / speed);
  var middle = end - start;

  let delay = [];
  let animation;

    css = document.createElement('style');
  css.media = 'all';
  

  for (i = 0; i < slides; i++) {
    delay = [delay, '.panel div:nth-of-type(', i+1, ') { animation-delay: ', i * time, 's }\n'].join('');
  }


  switch (type) {
    case 'fade':
      animation =  '@keyframes fade {\n' + [
        '0% {opacity: 0}',
        start + '% {opacity: 1}',
        middle + '0% {opacity: 1}',
        end + '0% {opacity: 0}',
        '100% {opacity: 0}'
      ].join('\n') + '}';
      break;

    case 'rotateX':
      animation = '@keyframes rotateX {\n' + [
        '0% {opacity: 0; transform: rotateX(90deg)}',
        start + '% {opacity: 1; transform: rotateX(0deg)}',
        middle + '% {opacity: 1; transform: rotateX(0deg)}',
        end + '% {opacity: 0; transform: rotateX(90deg)}',
        '100% {opacity: 0; transform: rotateX(90deg) }'
      ].join('\n') + '}';
      break;
    
    case 'rotateY':
      animation = '@keyframes rotateY {\n' + [
        '0% {opacity: 0; transform: rotateY(90deg)}',
        start + '% {opacity: 1; transform: rotateY(0deg)}',
        middle + '% {opacity: 1; transform: rotateY(0deg)}',
        end + '% {opacity: 0; transform: rotateY(90deg)}',
        '100% {opacity: 0; transform: rotateY(90deg) }'
      ].join('\n') + '}';
      break;

    case 'slideRL':
      animation = '@keyframes slideRL {\n' + [
        '0% {opacity: 0; left: 100%}',
        start + '% {opacity: 1; left: 0}',
        middle + '% {opacity: 1; left: 0}',
        end + '% {opacity: 0; left: -100%}',
        '100% {opacity: 0; left: -100%}'
      ].join('\n') + '}';
      break;

    case 'slideLR':
      animation = '@keyframes slideLR {\n' + [
        '0% {opacity: 0; left: -100%}',
        start + '% {opacity: 1; left: 0}',
        middle + '% {opacity: 1; left: 0}',
        end + '% {opacity: 0; left: 100%}',
      '100% {opacity: 0; left: 100%}'
      ].join('\n') + '}';
      break;
    
    case 'slideTB':
      animation = '@keyframes slideTB {\n' + [
        '0% {opacity: 0; top: -100%}',
        start + '% {opacity: 1; top: 0}',
        middle + '% {opacity: 1; top: 0}',
        end + '% {opacity: 0; top: 100%}',
      '100% {opacity: 0; top: 100%}'
      ].join('\n') + '}'; 
      break;
    
    case 'slideBT':
      animation = '@keyframes slideBT {\n' + [
        '0% {opacity: 0; top: 100%}',
        start + '% {opacity: 1; top: 0}',
        middle + '% {opacity: 1; top: 0}',
        end + '% {opacity: 0; top: -100%}',
      '100% {opacity: 0; top: -100%}'
      ].join('\n') + '}';
      break;

    default:
      break;
  }
  

  rules = document.createTextNode([delay, animation].join('\n'));
  css.appendChild(rules);

  document.getElementsByTagName('head')[0].appendChild(css);
}());