var width = window.innerWidth * 0.8;
var height = window.innerHeight * 0.7;

var stage = new Konva.Stage({
  container: "container",
  width: width,
  height: height,
});

var layer = new Konva.Layer();
stage.add(layer);

stage.container().style.backgroundColor = "red";

var background = new Konva.Rect({
  x: 0,
  y: 0,
  width: stage.width(),
  height: stage.height(),
  illLinearGradientStartPoint: { x: 0, y: 0 },
  fillLinearGradientEndPoint: { x: stage.width(), y: stage.height() },
  fillLinearGradientColorStops: [0.5, "#54B6C2"],
  listening: false,
});

stage.on("dragmove", () => {
  background.absolutePosition({ x: 0, y: 0 });
});

var rectX = stage.width() / 2 - 50;
var rectY = stage.height() / 2 - 25;

var backgroundShelf = new Konva.Image({
  x: rectX - 105,
  y: rectY - 160,
  height: 75,
  width: 275,
  draggable: false,
});

var monitor = new Konva.Image({
  x: rectX + 195,
  y: rectY - 15,
  height: 175,
  width: 225,
  draggable: false,
});

var posterbackground = new Konva.Rect({
  x: rectX - 70,
  y: rectY - 75,
  height: 95,
  width: 205,
  fill: "e6d9cc",
  stroke: "d5c0aa",
  strokeWidth: 4,
  draggable: true,
  visible: true,
});

var backgroundPoster = new Konva.Image({
  x: rectX - 65,
  y: rectY - 70,
  height: 85,
  width: 195,
  draggable: false,
});

var BerutStand = new Konva.Rect({
  x: 25,
  y: rectY - 90,
  width: 140,
  height: 250,
  fill: "",
  draggable: false,
  visible: false,
});

var BerutTube = new Konva.Rect({
  x: 120,
  y: rectY - 100,
  width: 100,
  height: 250,
  fill: "",
  draggable: true,
  visible: false,
});

var vFlask = new Konva.Rect({
  x: 200,
  y: rectY + 51,
  width: 120,
  height: 120,
  fill: "",
  draggable: true,
  visible: true,
});

var ironII = new Konva.Rect({
  x: 360,
  y: rectY + 85,
  width: 41,
  height: 75,
  fill: "",
  draggable: false,
  visible: true,
});

var permagant = new Konva.Rect({
  x: 402,
  y: rectY + 85,
  width: 41,
  height: 75,
  fill: "",
  draggable: false,
  visible: true,
});

var poly = new Konva.Line({
  points: [
    282, 332, 285, 331, 288, 330, 291, 327, 286, 310, 235, 310, 230, 325, 232,
    330, 235, 332,
  ],
  fill: "#9DA87D",
  closed: true,
  scaleY: 0.005,
  scaleX: 0.005,
  y: 220,
  x: 262,
});

var polyP = new Konva.Line({
  points: [65, 100, 65, 200, 68, 212, 71, 212, 72, 200, 72, 100],
  fill: "#453a5f",
  closed: true,
  x: 18,
  y: 212,
  scaleY: 0.005,
  scaleX: 0.75,
});

var polyPone = new Konva.Line({
  x: 100,
  y: 224,
  points: [100, 224, 100, 219, 66, 208, 67, 212],
  fill: "#453a5f",
  closed: true,
  visible: true,
  scaleY: 0.005,
  scaleX: 0.005,
});

var polyPtwo = new Konva.Line({
  x: 0,
  points: [98, 230, 107, 230, 107, 215, 98, 215],
  fill: "#453a5f",
  closed: true,
  scaleY: 0.005,
  scaleX: 1,
  y: 230,
});

var sulAcid = new Konva.Rect({
  x: 444,
  y: rectY + 85,
  width: 41,
  height: 75,
  fill: "",
  draggable: false,
  visible: true,
});

var table = new Konva.Rect({
  x: 10,
  y: rectY + 180,
  width: width - 20,
  height: 160,
  fillLinearGradientStartPoint: { x: 10, y: rectY + 180 },
  fillLinearGradientEndPoint: { x: width - 20, y: rectY + 180 },
  fillLinearGradientColorStops: [0, "#286c71", 1, "#4572ba"],
  strokeWidth: 1,
  draggable: false,
  listening: false,
});

var tableTop = new Konva.Rect({
  x: 1,
  y: rectY + 160,
  width: width - 2,
  height: 20,
  fillLinearGradientStartPoint: { x: 1, y: rectY + 160 },
  fillLinearGradientEndPoint: { x: 600, y: rectY + 160 },
  fillLinearGradientColorStops: [0, "#1b484b", 1, "#34568b"],
  strokeWidth: 1,
  draggable: false,
  listening: false,
});

var standImage = new Konva.Image({
  x: 25,
  y: rectY - 58,
  height: 220,
  width: 110,
});

var tubeImage = new Konva.Image({
  x: 48,
  y: rectY - 100,
  height: 220,
  width: 75,
  draggable: true,
});

var text = new Konva.Text({
  x: 10,
  y: 10,
  fontFamily: "Calibri",
  fontSize: 18,
  text: "",
  fill: "white",
});

var flaskGroup = new Konva.Group({});

// add cursor styling
BerutStand.on("mouseover", function () {
  document.body.style.cursor = "pointer";
});
BerutStand.on("mouseout", function () {
  document.body.style.cursor = "default";
});

// add cursor styling
vFlask.on("mouseover", function () {
  document.body.style.cursor = "pointer";
});
vFlask.on("mouseout", function () {
  document.body.style.cursor = "default";
});

// get fill pattern image
var fillPatternImage1 = BerutStand.fillPatternImage();

// set fill pattern image
var imageObj1 = new Image();

imageObj1.onload = function () {
  BerutStand.fillPatternImage(imageObj1);
  standImage.image(imageObj1);
};
imageObj1.src = "/assets/berut-stand.png";

// get fill pattern image
var fillPatternImage2 = vFlask.fillPatternImage();

// set fill pattern image
var imageObj2 = new Image();

imageObj2.onload = function () {
  vFlask.fillPatternImage(imageObj2);
};
imageObj2.src = "/assets/v-flask.png";

// get fill pattern image
var fillPatternImage3 = BerutTube.fillPatternImage();

// set fill pattern image
var imageObj3 = new Image();

imageObj3.onload = function () {
  BerutTube.fillPatternImage(imageObj3);
  tubeImage.image(imageObj3);
};
imageObj3.src = "/assets/berut-tube.png";

var fillPatternImage4 = ironII.fillPatternImage();

// set fill pattern image
var imageObj4 = new Image();

imageObj4.onload = function () {
  ironII.fillPatternImage(imageObj4);
};
imageObj4.src = "/assets/ironII.png";

var fillPatternImage5 = permagant.fillPatternImage();

// set fill pattern image
var imageObj5 = new Image();

imageObj5.onload = function () {
  permagant.fillPatternImage(imageObj5);
};
imageObj5.src = "/assets/perM.png";

var fillPatternImage6 = sulAcid.fillPatternImage();

// set fill pattern image
var imageObj6 = new Image();

imageObj6.onload = function () {
  sulAcid.fillPatternImage(imageObj6);
};
imageObj6.src = "/assets/SulAcid.png";

var imageObj7 = new Image();

imageObj7.onload = function () {
  backgroundShelf.image(imageObj7);
};
imageObj7.src = "/assets/shelf.png";

var imageObj8 = new Image();

imageObj8.onload = function () {
  backgroundPoster.image(imageObj8);
};
imageObj8.src = "/assets/periodic-table-elements.png";

var imageObj9 = new Image();
imageObj9.onload = function () {
  monitor.image(imageObj9);
};
imageObj9.src = "/assets/gray-monitor.png";

BerutStand.on("dragmove", () => {
  BerutStand.y(Math.min(BerutStand.y(), 600));
  BerutStand.y(Math.max(BerutStand.y(), 60));
  BerutStand.x(Math.min(BerutStand.x(), 1480));
  BerutStand.x(Math.max(BerutStand.x(), 0));
});

writeMessage("Step one : add Iron II to the flask");

// IRON ANimation
var ironClick = 0;
ironII.on("click", function () {
  if (ironClick == 0) {
    let quantity = prompt("enter the amount", "");

    if (quantity <= 75 && quantity >= 50) {
      let toolType = prompt("Pour the amount on ?", "");

      if (toolType == "Flask" || "flask") {
        setTimeout(function () {
          rotate.play();
        }, 1000);

        setTimeout(function () {
          movingH.play();
        }, 500);

        setTimeout(function () {
          movingV.play();
        }, 500);
      } else {
        alert("I don't think this experiment should be preform this way :(");
      }
    } else {
      alert("the amount is too big !");
      ironClick--;
    }
  } else if (ironClick == 1) {
    dirp.play();
    poly.setZIndex(3);
    filling.play();

    setTimeout(function () {
      rotate.reverse();
    }, 4000);

    setTimeout(function () {
      movingH.reverse();
    }, 4500);

    setTimeout(function () {
      movingV.reverse();
    }, 4500);
  }
  ironClick++;
});

// Sulfiric Acid ANimation
var sulAcidClick = 0;

sulAcid.on("click", function () {
  if (sulAcidClick == 0) {
    let quantity = prompt("enter the amount", "");

    if (quantity <= 50 && quantity >= 25) {
      let toolType = prompt("Pour the amount on ?", "");

      if (toolType == "Flask" || "flask") {
        setTimeout(function () {
          rotateS.play();
        }, 1000);

        setTimeout(function () {
          movingHS.play();
        }, 500);

        setTimeout(function () {
          movingVS.play();
        }, 500);
      } else {
        alert("I don't think this experiment should be preform this way :(");
      }
    } else {
      alert("the amount is too big !");
    }
  } else if (sulAcidClick == 1) {
    dirp.play();
    poly.setZIndex(3);
    filling.play();

    setTimeout(function () {
      rotateS.reverse();
    }, 4000);

    setTimeout(function () {
      movingHS.reverse();
    }, 4500);

    setTimeout(function () {
      movingVS.reverse();
    }, 4500);
  }
  sulAcidClick++;
});

// Permagnat ANimation
var permagantClick = 0;

permagant.on("click", function () {
  if (permagantClick == 0) {
    let quantity = prompt("enter the amount", "");

    if (quantity <= 50 && quantity >= 25) {
      let toolType = prompt("Pour the amount on ?", "");

      if (toolType == "tube" || "Tube") {
        setTimeout(function () {
          rotateP.play();
        }, 1000);

        setTimeout(function () {
          movingHP.play();
        }, 500);

        setTimeout(function () {
          movingVP.play();
        }, 500);
      } else {
        alert("I don't think this experiment should be preform this way :(");
      }
    } else {
      alert("the amount is too big !");
      permagantClick--;
    }
  } else if (permagantClick == 1) {
    dirp.play();
    polyPtwo.setZIndex(3);
    polyPone.setZIndex(3);
    polyP.setZIndex(3);

    filling2.play();

    setTimeout(function () {
      filling1.play();
    }, 1000);
    setTimeout(function () {
      filling3.play();
    }, 2000);

    setTimeout(function () {
      rotateP.reverse();
    }, 4000);

    setTimeout(function () {
      movingHP.reverse();
    }, 4500);

    setTimeout(function () {
      movingVP.reverse();
    }, 4500);
  }
  permagantClick++;
});

// VFlask animation
vFlask.on("click", function () {
  if (poly.scaleY() == 1) {
    flaskGroup.add(poly);
    flaskGroup.add(vFlask);

    flaskMoving.play();
  } else {
    alert("flask is empty");
  }
});

function writeMessage(message) {
  text.text(message);
}

layer.add(background);
layer.add(posterbackground);
layer.add(backgroundShelf);
layer.add(backgroundPoster);
layer.add(monitor);
layer.add(table);
layer.add(text);
layer.add(tableTop);
layer.add(ironII);
layer.add(permagant);
layer.add(sulAcid);
layer.add(BerutStand);
layer.add(BerutTube);
layer.add(vFlask);
layer.add(tubeImage);
layer.add(standImage);
layer.add(poly);
layer.add(polyP);
layer.add(polyPone);
layer.add(polyPtwo);
layer.add(flaskGroup);
stage.add(layer);

var dirp = new Audio("/assets/audio/pouring-water.mp3");

var filling = new Konva.Tween({
  node: poly,
  x: 0,
  y: 0,
  scaleY: 1,
  scaleX: 1,
  easing: Konva.Easings.EaseIn,
  duration: 3,
});

var filling2 = new Konva.Tween({
  node: polyPtwo,
  x: 0,
  y: 0,
  scaleY: 1,
  easing: Konva.Easings.EaseIn,
  duration: 1,
});

var filling1 = new Konva.Tween({
  node: polyPone,
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1,
  easing: Konva.Easings.EaseIn,
  duration: 1,
});

var filling3 = new Konva.Tween({
  node: polyP,
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1,
  easing: Konva.Easings.EaseIn,
  duration: 3,
});

var rotate = new Konva.Tween({
  node: ironII,
  duration: 1,
  rotation: -95,
  easing: Konva.Easings.easout,
  onFinish: function () {},
});

var movingH = new Konva.Tween({
  node: ironII,
  duration: 1,
  x: 260,
  easing: Konva.Easings.easout,
});

var movingV = new Konva.Tween({
  node: ironII,
  duration: 0.5,
  y: 200,
  easing: Konva.Easings.easout,
});

var rotateS = new Konva.Tween({
  node: sulAcid,
  duration: 1,
  rotation: -95,
  easing: Konva.Easings.easout,
  onFinish: function () {},
});

var movingHS = new Konva.Tween({
  node: sulAcid,
  duration: 1,
  x: 260,
  easing: Konva.Easings.easout,
});

var movingVS = new Konva.Tween({
  node: sulAcid,
  duration: 0.5,
  y: 200,
  easing: Konva.Easings.easout,
});

var rotateP = new Konva.Tween({
  node: permagant,
  duration: 1,
  rotation: -95,
  easing: Konva.Easings.easout,
  onFinish: function () {},
});

var movingHP = new Konva.Tween({
  node: permagant,
  duration: 1,
  x: 68,
  easing: Konva.Easings.easout,
});

var movingVP = new Konva.Tween({
  node: permagant,
  duration: 0.5,
  y: 100,
  easing: Konva.Easings.easout,
});

var flaskMoving = new Konva.Tween({
  node: flaskGroup,
  duration: 1,
  x: -160,
  y: -5,
  easing: Konva.Easings.easout,
});
