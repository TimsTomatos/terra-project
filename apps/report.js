const switchers = [...document.querySelectorAll('.switcher')]

switchers.forEach(item => {
	item.addEventListener('click', function() {
		switchers.forEach(item => item.parentElement.classList.remove('is-active'))
		this.parentElement.classList.add('is-active')
	})
})


const sub = document.querySelector('#submit');

var type = document.querySelector("#type-t");
var image = document.querySelector("#upload-image");
var long;
var lati;
var comment = document.querySelector("#comment");


const storageReference = storage.ref(); //reference to storage

window.onload = function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(setCoords);
      } else {
        console.log('oof');
      }
}

sub.addEventListener('click',() => {
    SubmitForm();
})

function setCoords(position) {
    long = position.coords.longitude;
    lati = position.coords.latitude;
    console.log(long);
    console.log(lati);
}

function SubmitForm() {

console.log('this function ran');

  const imageFile = image.files[0];

  const imagePushRef = `reportImages/${imageFile.name}`;



  const info = {
    litterType: type.value,
    comment: comment.value,
    long: long,
    lati: lati,
    image: imagePushRef,
    user: auth.currentUser.email
  };

  db.collection('pins').add(info).then(() => {
    storageReference.child(imagePushRef).put(imageFile).then((data) => {
      console.log('uploaded an image!');
    });
  });
}