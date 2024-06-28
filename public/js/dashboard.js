// Dashboard create farm
/* eslint-disable */

// pagination
document.addEventListener('DOMContentLoaded', function() {
  let paginationLink = document.querySelectorAll('.pagination-link');
  let currentValue = 1;

  function activePagination(event) {
    for (let x of paginationLink) {
      x.classList.remove("active");
    }
    event.target.classList.add("active");
    currentValue = event.target.value;
  }

  paginationLink.forEach(link => {
    link.addEventListener('click', event => {
      activePagination(event);
    });
  });
});
//// map for farm
document.addEventListener('DOMContentLoaded', function() {
  const farmMaps = document.querySelectorAll('#map');

  farmMaps.forEach(mapElement => {
    const locations = JSON.parse(mapElement.getAttribute('data-locations'));

    if (locations && locations.coordinates) {
      const [lat, lng] = locations.coordinates;
      const map = L.map(mapElement).setView([lat, lng], 13);

      // Remove attribution
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        // attribution: '<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      // Bind popup to coordinates
      L.marker([lat, lng]).addTo(map)
        .bindPopup(`Coordinates: (${lat.toFixed(5)}, ${lng.toFixed(5)})`)
        .openPopup();
    }
  });
});
// Function to show farm details modal
function showFarmDetails(farmId) {
  // Select the modal corresponding to the farmId
  var modal = document.getElementById(`farmModal-${farmId}`);
  
  // Show the modal using Bootstrap's modal method
  var modalInstance = new bootstrap.Modal(modal);
  modalInstance.show();

  // Handle close button click
  var closeButton = modal.querySelector('.btn-secondary');
  if (closeButton) {
    closeButton.addEventListener('click', function() {
      modalInstance.hide(); // Hide the modal when close button is clicked
    });
  }
}

//////////////////////////////////////////////////////////////////////////////////////


var FormStep1 = document.getElementById("FormStep1");
var FormStep2 = document.getElementById("FormStep2");
var FormStep3 = document.getElementById("FormStep3");

var nextStepBtn1 = document.getElementById("nextStep1");
var nextStepBtn2 = document.getElementById("nextStep2");
var prevStepBtn1 = document.getElementById("backStep1");
var prevStepBtn2 = document.getElementById("backStep2");
var progressFarmStep = document.getElementById("progressFarmStep");

nextStepBtn1.addEventListener("click", function () {
  event.preventDefault();
  FormStep2.style.display = "unset";
  FormStep1.style.display = "none";
  FormStep3.style.display = "none";
  progressFarmStep.style.width = "240px";
});

prevStepBtn1.addEventListener("click", function () {
  event.preventDefault();
  FormStep1.style.display = "unset";
  FormStep3.style.display = "none";
  FormStep2.style.display = "none";
  progressFarmStep.style.width = "120px";
});

nextStepBtn2.addEventListener("click", function () {
  event.preventDefault();
  FormStep3.style.display = "unset";
  FormStep2.style.display = "none";
  FormStep1.style.display = "none";
  progressFarmStep.style.width = "360px";
  progressFarmStep.classList.remove("with-after");
});

prevStepBtn2.addEventListener("click", function () {
  event.preventDefault();
  FormStep2.style.display = "unset";
  FormStep1.style.display = "none";
  FormStep3.style.display = "none";
  progressFarmStep.style.width = "240px";
  progressFarmStep.classList.add("with-after");
});

// dark mode

var icon = document.getElementById("dark-icon");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "./images/sun.png";
  } else {
    icon.src = "./images/moon.png";
  }
};

//welcome dashboard
// var sideBarBtn = document.getElementById('sidebar_btn')
// var sideBar1 = document.querySelector('.side-bar')
// var sideBar2 = document.querySelector('.side-bar a span')
// var sideBar3 = document.querySelector('.side-bar a')
// var sideBar4 = document.querySelector('.side-bar h6')
// var sideBar5 = document.querySelector('.content')
var welcomeDashBtn = document.getElementById("welcomeDashBtn");
var createFarm = document.querySelector(".create-farm");
var welcomeDash = document.querySelector(".welcome-dash");
var showFarms = document.querySelector(".Show-farms-dash");
var Showusers = document.querySelector(".Show-users-dash");
var showAccountSetting = document.querySelector(".account-setting-dash")
var createFarmBtnSidebar = document.getElementById("createFarmBtnSidebar");
var showFarmBtnSidebar = document.getElementById("showFarmBtnSidebar");
var showUsersBtnSidebar = document.getElementById("showUsersBtnSidebar");
var accountSettingBtnSidebar = document.getElementById("accountSettingBtnSidebar");

// function sideBarBtnClick(){
//   event.preventDefault();
//   sideBar1.style.left = '-205px';
//   sideBar2.style.display = 'none';
//   sideBar3.style.fontSize = '20px';
//   sideBar3.style.marginLeft = '170px';
//   sideBar3.style.width = '80px';
//   sideBar4.style.borderBottom = 'none';
//   sideBar5.style.marginLeft = '45px';

// }

function showFarmCreation() {
  event.preventDefault();
  welcomeDash.style.display = "none";
  showFarms.style.display = "none";
  Showusers.style.display = "none";
  showAccountSetting.style.display="none";
  createFarm.style.display = "unset";
}
function manageFarms() {
  event.preventDefault();
  welcomeDash.style.display = "none";
  createFarm.style.display = "none";
  Showusers.style.display = "none";
  showAccountSetting.style.display="none";
  showFarms.style.display = "unset";
}
function manageUsers() {
  welcomeDash.style.display = "none";
  createFarm.style.display = "none";
  showFarms.style.display = "none";
  showAccountSetting.style.display="none";
  Showusers.style.display = "unset";
}
function accountSetting() {
  welcomeDash.style.display = "none";
  createFarm.style.display = "none";
  showFarms.style.display = "none";
  Showusers.style.display = "none";
  showAccountSetting.style.display="unset";
}

welcomeDashBtn.addEventListener("click", showFarmCreation);
createFarmBtnSidebar.addEventListener("click", showFarmCreation);
// sideBarBtn.addEventListener('click', sideBarBtnClick);
showFarmBtnSidebar.addEventListener("click", manageFarms);
accountSettingBtnSidebar.addEventListener("click", accountSetting);
showUsersBtnSidebar.addEventListener("click", manageUsers);


