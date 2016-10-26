var Zefr = {};

$(function(){
  var thumbImgs = $(".span_1 img");
  Zefr.employees = [];
  for (var i = 0; i<thumbImgs.length; i++){
    $(thumbImgs[i]).data("thumbId", i);
    $(thumbImgs[i]).attr('src', "./img/thumb"+ i + ".jpeg");
    Zefr.employees.push(new Zefr.Employee());
  }
  Zefr.employees[2].content = ("Vito McAwesome Cairone:  Software Engineer at Zefr");
  Zefr.employees[18].content = ("Livey Lauren Vellanoweth:  Corporate Recruiter at Zefr");
  Zefr.employees[5].content = ("Kaelin MegaCool Burns:  Project Manager at Zefr");
  $(".thumbnails").on('click', 'img', Zefr.handleThumbnailClick);
}); 

Zefr.handleThumbnailClick = function() {
   var thumbId = $(this).data("thumbId");
   console.log(this);
   var opacity = $(this).css({"opacity": 0.6});
   console.log(this);
   if (this.opacity === "0.6") {
    $(this.opacity).css({"opacity": 1});
   }
   else {
    this.opacity
  };
   Zefr.prependPanel(thumbId);
};

Zefr.prependPanel = function(thumbId) {
  var $panel = $("<div class='panel col span_4 bgc p mb-md bxsh'><div class='h-md mb-sm mr-sm fl-l'><img src='img/lg-thumb" + thumbId + ".jpeg'/></div><div>" + Zefr.employees[thumbId].content + "</div></div>");
  $( "#panels" ).prepend($panel);
  $panel.css({ left: -1000, position: "relative" }).animate({ left: "0px"}, 1000)
  $(".panel:nth-child(2)").css({left: "-34%"}).animate({ left: "0px"}, 1000);
  $(".panel:nth-child(3)").css({left: "-34%"}).animate({ left: "0px"}, 1000);
  $(".panel:nth-child(4)").remove();
  $('.about-us').slideUp();
};

Zefr.Employee = function(content){
  this.content = content || "Lorem ipsum dolor sit amet, consectetur elit. Phasellus maximus nec elit at mollis. In id convallis velit, ac euismod erat. Donec finibus facilisis ex eu gravida. Etiam vestibulum orci quis ultrices. Sed malesuada non diam et vestibulum."
}
