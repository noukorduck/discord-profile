// Multiuse Functions
function toggleDisplay(x){
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}



// Restricts input for the given textbox to the given inputFilter.
function setInputFilter(textbox, inputFilter, errMsg) {
  ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop", "focusout"].forEach(function (event) {
    textbox.addEventListener(event, function (e) {
      if (inputFilter(this.value)) {
        // Accepted value
        if (["keydown", "mousedown", "focusout"].indexOf(e.type) >= 0) {
          this.classList.remove("input-error");
          this.setCustomValidity("");
        }
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        // Rejected value - restore the previous one
        this.classList.add("input-error");
        this.setCustomValidity(errMsg);
        this.reportValidity();
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        // Rejected value - nothing to restore
        this.value = "";
      }
    });
  });
}
setInputFilter(document.getElementById("intLimitTextBox"), function (value) {
  return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 9999);
}, "Must be a number between 0 and 9999!");

// Hide Editor
function hideEditor() {
  var x = document.getElementById("editoritems");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// Text Area Linebreak
// Dealing with Textarea Height
function calcHeight(value) {
  let numberOfLineBreaks = (value.match(/\n/g) || []).length;
  // min-height + lines x line-height + padding + border
  let newHeight = 20 + numberOfLineBreaks * 20 + 12 + 2;
  return newHeight;
}

let textareaStatus = document.querySelector("#status");
let textareaAbout = document.querySelector("#about");
let textareaNote = document.querySelector("#note");

textareaStatus.addEventListener("keyup", () => { textareaStatus.style.height = calcHeight(textareaStatus.value) + "px"; });
textareaAbout.addEventListener("keyup", () => { textareaAbout.style.height = calcHeight(textareaAbout.value) + "px"; });
textareaNote.addEventListener("keyup", () => { textareaNote.style.height = calcHeight(textareaNote.value) + "px"; });
textareaStatus.addEventListener("keypress", () => { textareaStatus.style.height = calcHeight(textareaStatus.value) + "px"; });
textareaAbout.addEventListener("keypress", () => { textareaAbout.style.height = calcHeight(textareaAbout.value) + "px"; });
textareaNote.addEventListener("keypress", () => { textareaNote.style.height = calcHeight(textareaNote.value) + "px"; });



// Background Color
var colorBackground;
var defaultColor = "#36393e";

window.addEventListener("load", startup, false);
function startup() {
  colorBackground = document.querySelector("#colorBackground");
  colorBackground.value = defaultColor;
  colorBackground.addEventListener("input", updateFirst, false);
  colorBackground.addEventListener("change", updateAll, false);
  colorBackground.select();
}
function updateFirst(event) {
  let bg = document.querySelector(".background");
  if (bg) {
    bg.style.backgroundColor = event.target.value;
  }
}
function updateAll(event) {
  document.querySelectorAll(".background").forEach(function (bg) {
    bg.style.backgroundColor = event.target.value;
  });
}

// Background Image
const inputBgImg = document.querySelector('#bgImageValue');
const logBgImg = document.getElementById('bgImage');

inputBgImg.addEventListener('input', updateValueBgImg);

function updateValueBgImg(e) {
  logBgImg.style.backgroundImage = "url(" + e.target.value + ")";
  console.log("idk")
}

// Username Text
const inputName = document.querySelector('#usernameValue');
const logName = document.getElementById('username');

inputName.addEventListener('input', updateValueName);

function updateValueName(e) {
  if (e.target.value == '') {
    logName.textContent = 'Wumpus';
  } else {logName.textContent = e.target.value;}
}

// Tag Number
const inputTag = document.querySelector('#intLimitTextBox');
const logTag = document.getElementById('tagSet');

inputTag.addEventListener('input', updateValueTag);

function updateValueTag(e) {
  if (e.target.value == '') {
    logTag.textContent = '0000';
  } else if (e.target.value.charAt(1) == '') {
    logTag.textContent = e.target.value + "000"
  } else if (e.target.value.charAt(2) == '') {
    logTag.textContent = e.target.value + "00"
  } else if (e.target.value.charAt(3) == '') {
    logTag.textContent = e.target.value + "0"
  } else {
    logTag.textContent = e.target.value;
  }
}

// Avatar Image URL
const inputAvatar = document.querySelector('#iconValue');
const logAvatar = document.getElementById('avatar');

inputAvatar.addEventListener('input', updateValueAvImage);

function updateValueAvImage(e) {
  logAvatar.src = e.target.value;
}

// Banner Color
var bannerColor;
var defaultBannerColor = "#5865F2";

window.addEventListener("load", startupBanner, false);
function startupBanner() {
  bannerColor = document.querySelector("#bannerColor");
  bannerColor.value = defaultBannerColor;
  bannerColor.addEventListener("input", updateFirstBanner, false);
  bannerColor.addEventListener("change", updateAllBanner, false);
  bannerColor.select();
}
function updateFirstBanner(event) {
  let bg = document.querySelector(".header");
  if (bg) {
    bg.style.backgroundColor = event.target.value;
  }
}
function updateAllBanner(event) {
  document.querySelectorAll(".header").forEach(function (bg) {
    bg.style.backgroundColor = event.target.value;
  });
}

// Banner Image URL
const inputBanner = document.querySelector('#bannerImg');
const logBanner = document.getElementById('imgSel');

inputBanner.addEventListener('input', updateValueBanner);

function updateValueBanner(e) {
  logBanner.src = e.target.value;
}

/* In-Window Popups */

// Make the DIV element draggable:
dragElement(document.getElementById("badges"));

dragElement(document.getElementById("popup"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}