function openSlideMenu() {  
  //const logo = document.getElementById('logo');
  document.getElementById('menu').style.width = '50%';
  // document.getElementById('content').style.marginLeft = '50%';
  document.getElementById('bars').style.opacity = '0'; 
  document.getElementsByClassName('song_details')[0].style.color = '#ccc';

  setTimeout(() => {
    const logo = document.getElementById('logo');
    const styleRight = ((window.innerWidth / 2) / 2) + 90 ;
    //logo.style.right = styleRight + 'px';
  }, 10);
};

function closeSlideMenu() {
  const times = document.getElementById('times');
  const logo = document.getElementById('logo');

  document.getElementById('menu').style.width = '0px';
  document.getElementById('content').style.marginLeft = '0px';
  document.getElementById('bars').style.opacity = '1';
  document.getElementsByClassName('song_details')[0].style.color = 'black';
  logo.style.right = '50px';

  times.style.opacity = '0';
  setTimeout(() => {
    times.style.opacity = '1';
  }, 500);  
};

document.getElementById('music_link').addEventListener('mouseover', (e) => {
    e.target.children[0].style.visibility = 'visible';
});

document.getElementById('music_link').addEventListener('mouseout', (e) => {
    e.target.children[0].style.visibility = 'hidden';
});