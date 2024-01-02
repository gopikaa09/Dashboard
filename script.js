let sidenav = document.getElementsByClassName("sidenav")[0];
console.log(sidenav);
let togglenav = document.getElementsByClassName("toggle-div")[0];
let crossIcon = document.getElementsByClassName("close-x")[0];
let sidecontainer = document.getElementsByClassName("sidecontainer")[0];
console.log(togglenav);
const displaysidenav = () => {
  console.log("sdhbasb");
  crossIcon.style.display = "inline-block";
  // crossIcon.style.float = "right";
  sidenav.style.display = "block";
  sidenav.style.position = "absolute";
  sidenav.style.zIndex = "500";
  sidenav.style.width = "70%";
  sidenav.style.height = "100vh";
  sidenav.style.right = "0";
  // document.body.style.opacity = "0.2";
  sidecontainer.style.opacity = "0.5";
};
const closesidenav = () => {
  sidenav.style.display = "none";
  sidecontainer.style.opacity = "1";
  window.location.reload();
};
