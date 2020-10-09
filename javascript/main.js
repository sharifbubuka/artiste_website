function openSlideMenu() {  
  document.getElementById('menu').style.width = '50%';
  document.getElementsByClassName('song_details')[0].style.color = '#ccc';
};

function closeSlideMenu() {
  const times = document.getElementById('times');

  document.getElementById('menu').style.width = '0px';
  document.getElementsByClassName('song_details')[0].style.color = 'black';

  times.style.opacity = '0';
  setTimeout(() => {
    times.style.opacity = '1';
  }, 500);  
};
