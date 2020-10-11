function openSlideMenu() { 
  if (window.matchMedia("(orientation: landscape)").matches) {
    document.getElementById('menu').style.width = '100%';
    document.getElementsByClassName('music_player')[0].style.zIndex = '-2';
    document.getElementById('logo').style.opacity = '0';
  } else {
    document.getElementById('menu').style.width = '50%';
  }
  
  document.getElementsByClassName('song_details')[0].style.color = '#ccc';
};

function closeSlideMenu() {
  if (window.matchMedia("(orientation: landscape)").matches) {
    document.getElementById('logo').style.opacity = '1';
  } 
  const times = document.getElementById('times');
  document.getElementById('menu').style.width = '0px';
  document.getElementsByClassName('song_details')[0].style.color = 'black';

  times.style.opacity = '0';
  setTimeout(() => {
    times.style.opacity = '1';
  }, 500);  
};
