export function changeBackground() {
  console.log("in change background");
  // var ssContainer = document.getElementsByClassName('ss-container')[0] as HTMLElement;
  var siteBody = document.querySelector('.ss-site .body') as HTMLElement;
  siteBody.style.backgroundImage = "url('https://source.unsplash.com/1440x1440?sig=" + Math.random();
}
