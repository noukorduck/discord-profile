// Detect Mobile
if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
  let para = document.createElement("p");
  let element = document.getElementById("bgImage");
  let node = document.createTextNode("Mobile detected! The website might look broken!");
  para.setAttribute('id', 'mobiledetect')
  para.appendChild(node);
  element.appendChild(para);
}


// Multiuse Functions
function toggleDisplay(x, z, c1, c2){
  if (x.style.display === "block") {
    x.style.display = "none";
    if (typeof z !== 'undefined') {z.style.backgroundColor = c1}
  } else {
    x.style.display = "block";
    if (typeof z !== 'undefined') { z.style.backgroundColor = c2}
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

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById("popupheader")) {
    // if present, the header is where you move the DIV from:
    document.getElementById("popupheader").onmousedown = dragMouseDown;
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

const badgesList = document.querySelectorAll('.badges img');
const badgesEditorList = document.querySelectorAll('.selector img');

function badgesAllOff(z){
  badgesList.forEach(img => {img.style.display = 'none';});
  badgesEditorList.forEach(img => {img.style.backgroundColor = "#23272A"});
  z.style.backgroundColor = "rgba(255, 0, 0, 0.4)"
  setTimeout(function(){
    z.style.backgroundColor = "#23272A";
  },250);
}
