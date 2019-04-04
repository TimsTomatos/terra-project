// Login Modal
var login_box = document.querySelector("#login-box");
var login_buton = document.querySelector("#login-button");
var close_button = document.querySelector(".close");

login_buton.onclick = function () 
{
    login_box.style.display = "block";
}

close_button.onclick = function () 
{
    login_box.style.display = "none";
}

window.onclick = function(event)                         // If user clicks any where else modal closes
{
    if (event.target == login_box)
    {
        login_box.style.display = 'none';
    }
}