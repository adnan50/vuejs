// optional
$('#blogCarousel').carousel({
  interval: 1000
});

$(document).ready(function(){
$("#how_menu").click(function() {
$('html, body').animate({
  scrollTop: $("#how-it-work").offset().top
}, 2000);
return false;
});
$("#how_menu1").click(function() {
$('html, body').animate({
  scrollTop: $("#how-it-works").offset().top
}, 2000);
return false;
});
$("#case_menu").click(function() {
$('html, body').animate({
  scrollTop: $("#our_history").offset().top
}, 2000);
return false;
});
$("#faq_menu").click(function() {
$('html, body').animate({
  scrollTop: $("#faq").offset().top
}, 2000);
return false;
});
$("#pricing_menu").click(function() {
$('html, body').animate({
  scrollTop: $("#pricing").offset().top
}, 2000);
return false;
});
$("#contact_menu").click(function() {
$('html, body').animate({
  scrollTop: $("#contact").offset().top
}, 2000);
return false;
});
$("#footer_work").click(function() {
$('html, body').animate({
  scrollTop: $("#how-it-work").offset().top
}, 2000);
return false;
});
$("#footer_work1").click(function() {
$('html, body').animate({
  scrollTop: $("#how-it-works").offset().top
}, 2000);
return false;
});
$("#footer_case").click(function() {
$('html, body').animate({
  scrollTop: $("#our_history").offset().top
}, 2000);
return false;
});
$("#footer_faq").click(function() {
$('html, body').animate({
  scrollTop: $("#faq").offset().top
}, 2000);
return false;
});
$("#footer_price").click(function() {
$('html, body').animate({
  scrollTop: $("#pricing").offset().top
}, 2000);
return false;
});
$("#footer_contact").click(function() {
$('html, body').animate({
  scrollTop: $("#contact").offset().top
}, 2000);
return false;
});
$(function() {
// init the validator
// validator files are included in the download package
// otherwise download from http://1000hz.github.io/bootstrap-validator

$("#contact-form").validator();

// when the form is submitted
$("#contact-form").on("submit", function(e) {
// if the validator does not prevent form submit
if (!e.isDefaultPrevented()) {
var url = "contact.php";

// FOR CODEPEN DEMO I WILL PROVIDE THE DEMO OUTPUT HERE, download the PHP files from
// https://bootstrapious.com/p/how-to-build-a-working-bootstrap-contact-form

var messageAlert = "alert-success";
var messageText =
  "Your message was sent, thank you. I will get back to you soon.";

// let's compose Bootstrap alert box HTML
var alertBox =
  '<div class="alert ' +
  messageAlert +
  ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' +
  messageText +
  "</div>";

// If we have messageAlert and messageText
if (messageAlert && messageText) {
  // inject the alert to .messages div in our form
  $("#contact-form").find(".messages").html(alertBox);
  // empty the form
  $("#contact-form")[0].reset();
}

return false;
}
});
});
$('.your-class').slick({
dots: true,
infinite: true,
speed: 1000,
slidesToShow: 4,
arrows:true,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 2000,
responsive: [
{
breakpoint: 1024,
settings: {
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  dots: true
}
},
{
breakpoint: 600,
settings: {
  slidesToShow: 2,
  slidesToScroll: 1
}
},
{
breakpoint: 480,
settings: {
  slidesToShow: 1,
  slidesToScroll: 1
}
}
// You can unslick at a given breakpoint now by adding:
// settings: "unslick"
// instead of a settings object
]
});
});