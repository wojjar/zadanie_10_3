$(function() {
var carouselList = $("#carousel ul "); 
    setInterval(function() {
		$(carouselList).animate({'margin-left':-400 },5000,moveFirstSlide); 
});

function moveFirstSlide() {
    var firstItem = carouselList.find("li:first");
    var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
}
});

