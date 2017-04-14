  
$(function() {
    // $("#header").html('<nav class="navbar navbar-default navbar-fixed-top"><div class="container header_section"> <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> <div class="left_logo_section"> <div class="navbar-header"> <a class="navbar-brand" href="index.html"><img alt="Logo" src="images/smalllogo.png"></a> </div><div class="navbar-header secondNavbarHeader"> <h5 class="logoText">3D DESIGN SOFTWARE</h5> </div></div><div class="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1"> <ul class="nav navbar-nav"> <li><a href="about.html" id="about">ABOUT</a></li><li> <div id="openTools" class="dropdown dropdown_tools"> <a href="tools.html" id="openToolsPage" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">TOOLS<i class="fa fa-angle-down" aria-hidden="true"></i></a> <ul class="dropdown-menu" aria-labelledby="" id="bad_dropdown1" style="height: auto;"> <li class="nav-sublink"> <a href="room-visualizer.html">ROOM VISUALIZER</a> </li><li class="nav-sublink"> <a href="aircraft-visualizer.html">AIRCRAFT VISUALIZER</a> </li><li class="nav-sublink"> <a href="virtual-makeover.html">VIRTUAL MAKEOVER</a> </li><li class="nav-sublink"> <a href="virtual-car.html">CAR VISUALIZER</a> </li><li class="nav-sublink"> <a href="watercraft-visualizer.html">WATERCRAFT VISUALIZER</a> </li><li class="nav-sublink"> <a href="virtual-manicure.html">VIRTUAL MANICURE</a> </li><li class="nav-sublink"> <a href="outfit-visualizer.html">OUTFIT VISUALIZER</a> </li></ul> </div></li><li> <div id="openServices" class="dropdown dropdown_services"> <a href="services.html" id="openServicesPage" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">SERVICES<i class="fa fa-angle-down" aria-hidden="true"></i></a> <ul class="dropdown-menu" aria-labelledby="" id="bad_dropdown2" style="height: auto;"> <li class="nav-sublink2"> <a href="farm-rendering.html">FARM RENDERING</a> </li><li class="nav-sublink2"> <a href="ultra-realistic-photos.html">ULTRA REALISTIC PHOTOS</a> </li><li class="nav-sublink2"> <a href="threed-scanning.html">3D SCANNING</a> </li><li class="nav-sublink2"> <a href="custom-threed-tools.html">CUSTOM 3D TOOLS</a> </li><li class="nav-sublink2"> <a href="threesixty-vr.html">360 VR APPS</a> </li><li class="nav-sublink2"> <a href="oculus-rift.html">OCULUS RIFT APPS</a> </li><li class="nav-sublink2"> <a href="realistic-threed-animations.html">REALISTIC 3D ANIMATIONS</a> </li><li class="nav-sublink2"> <a href="graphic-design.html">GRAPHIC DESIGN</a> </li><li class="nav-sublink2"> <a href="custom-googles.html">CUSTOM GOOGLES</a> </li></ul> </div></li><li><a href="portfolio.html" id="about">PORTFOLIO</a></li><li><a href="contact.html" id="contact" class="">CONTACT</a></li></ul> </div></div></nav>');
    // $("#footer").html('<footer><div class="container-fluid get_in_touch_section"><div class="container"><div class="col-xs-12"><div class="col-xs-12 col-md-8"><h4>WOULD YOU LIKE TO USE OUR TOOLS?</h4><h4><a href="contact.html" style="text-decoration: underline;">GET IN TOUCH</a>WITH US.</h4></div><div class="col-xs-12 col-md-4 align-right"><p style="color: #ffffff;"><a href="mailto:info@visualizer.com">info@visualizerplus.com</a></p><p><a href="https://www.facebook.com/visualizerplus" target="_blank"><i class="fa fa-facebook-square" aria-hidden="true"></i></a></p></div></div></div></div><div class="container-fluid copyright_section" style="background-color: #ffffff;"><div class="container"><div class="col-xs-12"><div class="col-xs-12 col-md-6"><p><i class="fa fa-copyright" aria-hidden="true"></i>2017 Visualizer Plus</p></div><div class="col-xs-12 col-md-6 align-right"><p><a href="terms.html">Terms and Conditions</a></p></div><!-- <div class="col-xs-12 col-md-6 align-right"><a href="https://www.facebook.com/visualizerplus" target="_blank"><i class="fa fa-facebook-square" aria-hidden="true"></i></a></div>--></div></div></div></footer>');

    $("#header").load("header.html");
    $("#footer").load("footer.html");



    // Specific links for Tools and Services Pages. When Tools or Services is clicked on the menu, this page opens up. 
    $('#openToolsPage').click(function(){
      window.location = 'tools.html';
    });
    $('#openServicesPage').click(function(){
      window.location = 'services.html';
    });

    // $(".navbar-toggle").click(function(){
   // $("#openTools").addClass("open"); 

   $(".navbar-toggle").click(function(){

       $("#openTools").addClass("open"); 
    });

});

    $(function(){
        var url = window.location.pathname, 
        urlRegExp = new RegExp(url.replace(/\/$/,'') + "$");

        $('.navbar-nav > li > a').each(function(){
            if(urlRegExp.test(this.href.replace(/\/$/,''))){
                $(this).addClass('navbar_active_menu_title');
            }
        });

        
    });

    $(function(){
        var url = window.location.pathname, 
        urlRegExp = new RegExp(url.replace(/\/$/,'') + "$");

        $('#openToolsPage').each(function(){
            if(urlRegExp.test(this.href.replace(/\/$/,''))){
                $("#openTools").addClass('navbar_active_menu_title');
            }
        });

        $('#openServicesPage').each(function(){
            if(urlRegExp.test(this.href.replace(/\/$/,''))){
                $("#openServices").addClass('navbar_active_menu_title');
            }
        });

    });

    $(function(){
        var url = window.location.pathname, 
        urlRegExp = new RegExp(url.replace(/\/$/,'') + "$");

        $('.nav-sublink a').each(function(){
            if(urlRegExp.test(this.href.replace(/\/$/,''))){
                $(this).addClass('navbar_active_submenu_title');
                $(".dropdown_tools").addClass('navbar_active_menu_title');
            }
        });

    });

    $(function(){
        var url = window.location.pathname, 
        urlRegExp = new RegExp(url.replace(/\/$/,'') + "$");

        $('.nav-sublink2 a').each(function(){
            if(urlRegExp.test(this.href.replace(/\/$/,''))){
                $(this).addClass('navbar_active_submenu_title');
                $(".dropdown_services").addClass('navbar_active_menu_title');
            }
        });

    });


    








   

    var condenseMenus = function(){
        // var els = $('ul').attr('aria-labelledby', '');
        // Array.prototype.forEach.call(els, function(el, i) {
        //     if (i > 0){
        //          el.className = "";
        //     };
        // });
        $('#bad_dropdown1')[0].className = "";
        $('#bad_dropdown2')[0].className = "";
    }

    var normalizeMenus = function(){
        // var els = $('ul').attr('aria-labelledby', '');
        // Array.prototype.forEach.call(els, function(el, i) {
        // if (i > 0){
        //     el.className = "dropdown-menu";
        // };
        // });
        $('#bad_dropdown1')[0].className = "dropdown-menu";
        $('#bad_dropdown2')[0].className = "dropdown-menu";
    }
    $(document).ready(function(){
        if ($(window).width() < 768){
            condenseMenus();
        }
        else {
            normalizeMenus();
        }
        $(window).resize(function(){
            if ($(window).width() < 768){
                condenseMenus();
            }
            else {
                normalizeMenus();
            }
        })
    })


// if ($(window).width() < 768) {
//     $(".dropdown.dropdown_tools").addClass("open");
//     });
//    // alert('Less than 960');
// }



// });



                // $("#openTools").removeClass("open");

