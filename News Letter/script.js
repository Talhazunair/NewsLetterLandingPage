let email=document.getElementById('email');
let submitbtn=document.getElementById('submitbtn');
const error_msg=document.getElementById('errormsg');
const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let user_msg=document.getElementById('message');
const blur_bg=document.getElementById('blur');
const msgbox=document.getElementById('messagebox');
let msg=document.getElementById('message');
let dismiss_msg=document.getElementById('dismiss_msg');
email.addEventListener('input',function()
{
    let user_email=email.value;
    if(emailRegex.test(user_email))
    {
        error_msg.style.visibility = 'hidden';
        email.style.backgroundColor="white";
        email.style.color="black";
        email.style.borderColor="black";
    }
    else
    {
        error_msg.style.visibility = 'visible';
        email.style.backgroundColor="#f2d5ed";
        email.style.color="#f53b76";
        email.style.borderColor="#f53b76";
    }
})