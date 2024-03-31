const wrapper= document.querySelector('.wrapper');
const loginlink= document.querySelector('.login-link');
const registerlink= document.querySelector('.register-link');
const btnPopup= document.querySelector('.btnLogin-Popup');

registerlink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});

loginlink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});

