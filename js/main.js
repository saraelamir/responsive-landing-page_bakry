


//  let offset=$(العنصر).offset();
// بيعرف بعد العنصر عن فوق وشمال الموقع 
// let offset=$(".page2").offset().top

// $(window).scroll(function(){
//     let scroll=$(window).scrollTop()
// if(scroll>offset-30){
//    $("ul").css("backgroundColor","red") 
//    $(".btn").fadeIn(500);
// }
// else{
//      $("ul").css("backgroundColor","transparent") 

//      $(".btn").fadeOut(500);

// }
// })

$(".btn").click(function(){
    // $(window).scrollTop(0)
    $("body,html").animate({scrollTop:0},2000)
})

// $("a[href^=#]").click(function(e){//any link start with #

//    let href= e.target.getAttribute("href");//#home #about
//     let offset=$(href).offset().top
//     $("body,html").animate({scrollTop:offset}, 1000)


// })

$(document).ready(function(){
   $("#spinner").fadeOut(2000,function(){
    $("body").css("overflow","auto");
   });
       let width=$(".colors").outerWidth()
      $("#options").animate({left:-width},1000)

       $('.owl-carousel').owlCarousel({
     
        loop:true,
        items:4,
        margin:4,
        loop:true



       });

})



    //  (particles.js bugin )

// /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
// particlesJS.load('particles-js', 'js/particles.json', function() {
//   console.log('callback - particles.js config loaded');
// });


$("#btnToogle").click(function(){
    // $("#options").toggle()
    let width=$(".colors").outerWidth()
    if ( $("#options").css("left")=="0px"){
      $("#options").animate({left:-width},1000)

    }
    else{
      $("#options").animate({left:"0px"},1000)

    }
})

let colorItem=$(".color-item");
colorItem.eq(0).css("backgroundColor","green")
colorItem.eq(1).css("backgroundColor","red")
colorItem.eq(2).css("backgroundColor","orange")
colorItem.eq(3).css("backgroundColor","blue")


colorItem.click(function(e){

   let bgColor= $(e.target).css("backgroundColor");
   $("h1,h2,h3").css("color",bgColor)
})


