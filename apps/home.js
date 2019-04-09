// Login Modal
var login_box = document.querySelector("#login-box");
var login_buton = document.querySelector("#login-button");
var close_button = document.querySelector(".close");




//Testing
const switchers = [...document.querySelectorAll('.switcher')]



switchers.forEach(item => {
	item.addEventListener('click', function() {
		switchers.forEach(item => item.parentElement.classList.remove('is-active'))
        this.parentElement.classList.add('is-active')
        console.log("oof")
	})
})




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



