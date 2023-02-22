var images = [
    "img/img0.svg",
    "img/img1.svg",
    "img/img2.svg"
  ];
  var imageSwitch = document.querySelector("[image-switch]");
  setInterval(function() {
    var randomIndex;
    if (Math.random() < 0.75) {
      randomIndex = Math.floor(Math.random() * 3);
    } else {
      randomIndex = 2;
    }
    var randomImage = images[randomIndex];
    imageSwitch.style.backgroundImage = "url(" + randomImage + ")";
  }, 888);