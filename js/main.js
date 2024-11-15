const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')

const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')

const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
$(document).ready(function(){
  $(".btn-copy").click(function(){
    $(".btn-copy").popover('hide');
    setTimeout(function(){
      alert("نم نسخ النص ....")
    },50)
    setTimeout(function(){
      $(".btn-copy button").popover('hide');
    },100)

  });
});



const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')


var btnCopy = document.getElementById('btn-copy');
btnCopy.onclick = function(){
  this.removeAttribute('data-bs-title')
    
}

