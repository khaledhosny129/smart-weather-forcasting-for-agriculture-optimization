/* eslint-disable */
import '@babel/polyfill';
import { login, signup } from './login';
import { Contact } from './contactUs';
import { updateSettings } from './updateSettings';
import { updateUser } from './updateUser';
import { logout } from './logout';
import { deleteMe } from './deleteMe';
import { deleteUser } from './deleteUser';
import { deleteFarm } from './deleteFarm';
import { confirmEmail } from './confirmEmail';
import { forgotPassword, resetPassword } from './forgotPassword';
import { getUsers } from './users';
import { emailConfirm } from './emailConfirm';
import { createFarm } from './createFarm';

// DOM ELEMENTS
const farmForm = document.querySelector('.farm-form');
const loginForm = document.querySelector('.login-form');
const signupForm = document.querySelector('.signup-form');
const logOutBtn = document.querySelectorAll('.logout-btn');
const forgotPassForm = document.querySelector('.forgottenPassword');
const resetPassForm = document.querySelector('.resetPasswordForm');
const userDataForm = document.querySelector('.save-settting-user');
const userPasswordForm = document.querySelector('.form-user-password');
const updateUserFormAdmin = document.querySelector('.update-user-admin');
const deleteButtons = document.querySelectorAll('.delete-user-admin');
const deleteMeBtn = document.querySelector('.Delete-acc-btn');
const confirmEmailBtn = document.querySelector('.confirm-email');
const paginationLink = document.querySelector('.pagination-link');
const contactForm = document.querySelector('.contact-form');
const createFarmBrn = document.querySelector('.create-farm-btn');
const deleteFarmBtn = document.querySelectorAll('.delete-farm');
// VALUES

if (farmForm) {
  farmForm.addEventListener('submit', (e) => {
    e.preventDefault();
    createFarmBrn.textContent = 'Processing...';
    const name = document.getElementById('farmName').value;
    const longitude = parseFloat(document.getElementById('longitude').value);
    const latitude = parseFloat(document.getElementById('latitude').value);
    const predictionTime = document.getElementById('predictionTime').value;
    const userId = document.getElementById('userId').value; // Retrieve user ID

    if (isNaN(longitude) || isNaN(latitude)) {
      showAlert('error', 'Please enter valid coordinates.');
      return;
    }

    const coordinates = [longitude, latitude];
    createFarm(userId, name, coordinates, predictionTime);
  });
}

if (updateUserFormAdmin) {
  updateUserFormAdmin.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('fname').value;
    const email = document.getElementById('lname').value;
    const emailConfirm = document.getElementById('Email-Confirm').value;
    const role = document.getElementById('Role').value;
    const userId = document.getElementById('userId').value; // Retrieve user ID
    updateUser(userId, name, email, emailConfirm, role);
  });
}

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('description').value;
    const message = document.getElementById('message').value;

    Contact(name, email, subject, message);
  });
}

if (confirmEmailBtn) {
  confirmEmailBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    confirmEmail(email);
  });
}

// if (logOutBtn) {
//   logOutBtn.addEventListener('click', (e) => {
//     e.preventDefault();
//     logout();
//   });
// }
logOutBtn.forEach((button) => {
  button.addEventListener('click', async (e) => {
    e.preventDefault();
    logout();
  });
});

deleteButtons.forEach((button) => {
  button.addEventListener('click', async (e) => {
    e.preventDefault();
    const userId = button.parentNode.querySelector('#userIdForDel').value;
    await deleteUser(userId);
  });
});

deleteFarmBtn.forEach((button) => {
  button.addEventListener('click', async (e) => {
    e.preventDefault();
    const farmId = button.parentNode.querySelector('#farmIdForDel').value;
    await deleteFarm(farmId);
  });
});

if (deleteMeBtn) {
  deleteMeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    deleteMe();
    logout();
  });
}

if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email, password);
  });
}

if (forgotPassForm) {
  forgotPassForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    forgotPassword(email);
  });
}

if (window.location.pathname.startsWith('/resetPassword/')) {
  const token = window.location.pathname.split('/').pop(); // Extract token from URL
  resetPassForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const password = document.getElementById('newPassword').value;
    const passwordConfirm = document.getElementById('confirmNewPassword').value;
    await resetPassword(token, password, passwordConfirm); // Call resetPassword function passing token and new password
  });
}

if (window.location.pathname.startsWith('/verify/')) {
  const token = window.location.pathname.split('/').pop(); // Extract token from URL
  console.log(token);
  emailConfirm(token);
}

if (window.location.pathname.startsWith('/dashboard/users/page/')) {
  const num = window.location.pathname.split('/').pop(); // Extract num from URL
  // console.log('Page number:', num);
  getUsers(num);
}

if (signupForm) {
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('passwordConfirm').value;
    signup(name, email, password, passwordConfirm);
  });
}

if (userDataForm)
  userDataForm.addEventListener('click', (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('name', document.getElementById('name').value);
    form.append('email', document.getElementById('email').value);
    form.append('photo', document.getElementById('myphoto').files[0]);

    // console.log(form);

    updateSettings(form, 'data');
  });

if (userPasswordForm)
  userPasswordForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    document.querySelector('.btn--save-password').textContent = 'Updating...';

    const passwordCurrent = document.getElementById('current-password').value;
    const password = document.getElementById('new-password').value;
    const passwordConfirm = document.getElementById('confirm-password').value;
    await updateSettings(
      { passwordCurrent, password, passwordConfirm },
      'password',
    );

    document.querySelector('.btn--save-password').textContent = 'Save password';
    document.getElementById('current-password').value = '';
    document.getElementById('new-password').value = '';
    document.getElementById('confirm-password').value = '';
  });

// paginationLink.addEventListener("click", activePagination);
