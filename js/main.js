//Scripts for Main page


function updateForm () {
    var $this = $(this),
        $label = $this.find('label, i');
    $this.addClass("parsed");
    $this.find(".input").addClass("input-field");
    $this.find(".input textarea").addClass("materialize-textarea");

    $this.find('input[type=submit], .hs-button').addClass('btn btn-primary waves-effect');

    // if ($this.has("input[type=text]").length) {
    //     $this.find("label").insertAfter($this.find("input"));
    // } else if ($this.has("input[type=email]").length) {
    //     $this.find("label").insertAfter($this.find("input"));
    // } else if ($this.has("textarea").length) {
    //     $this.find("label").insertAfter($this.find("textarea"));
    // } else if ($this.has("select").length) {
    //     $this.find('select').material_select();
    //     $this.find("label").insertAfter($this.find(".select-wrapper"));
    // } else if ($this.has("input[type=checkbox]").length) {
    //     var $checkbox = $this.find("input[type=checkbox]");
    //     $checkbox.parent().before($checkbox);
    //     $checkbox.addClass("filled-in");
    // }
    if ($this.has("input[type=checkbox]").length) {
        var $checkbox = $this.find("input[type=checkbox]");
        $checkbox.parent().before($checkbox);
        $checkbox.addClass("filled-in");
    } else if ($this.has('select').length) {
        $this.find("select").addClass('browser-default');
    }

    if ($this.has("input, textarea").length) {
        if ($this.find('input, textarea').val().length) {
            $label.addClass('active');
        }
    }
    // $this.find(".hs-form-checkbox").each(function() {
    //     var $this = $(this);
    //     if ($this.has("input").length) {
    //         $this.find("input").insertBefore($this.find("label"));
    //     }
    // });
}

jQuery(document).ready(function($) {

    $("select").addClass('browser-default');
  

    // $('select').material_select();
    setTimeout(function () {
        $('.tooltipped').tooltip({delay: 50});
    }, 50);
    $('.slider').slider({
        full_width: true,
        height: 400,
        transition: 300
    });
    if(window.location.href == "https://www.straphq.com/resources"){
        $('body').addClass("overview");
    }

  $(".topics-list-menu li a").not(".noparse").each(function(){ 
     var t = $(this).text(),
         i = t.indexOf('(');
     $(this).text( t.substr(0,i) );  
     $("#blog-nav .topics-list-menu").removeClass("hide");                        
   });

    if ($(".home.main-content").length) {
        $("body").addClass("home");
    } else {
        $("body").removeClass("home");
    }

        // How it Works Section
    var controllerHashLink = new ScrollMagic.Controller();

    // change behaviour of controller to animate scroll instead of jump
    controllerHashLink.scrollTo(function (newpos) {
        TweenMax.to(window, 0.5, {scrollTo: {y: newpos - 128}});
    });

    //  bind scroll to anchor links
    $(document).on("click", "a[href^=#]", function (e) {
        var id = $(this).attr("href");
        if ($(id).length > 0) {
            e.preventDefault();

            // trigger scroll
            controllerHashLink.scrollTo(id);
        }
    });


    var responsive_viewport = $(window).width();

    $('.modal-trigger').leanModal({
        ready: function() { alert('Ready'); }, // Callback for Modal open
        complete: function() { alert('Closed'); } // Callback for Modal close
    });

    $(".button-collapse").sideNav({
        closeOnClick: true
    });


   
    $(".dropdown-button").dropdown({ hover: false });
    $(".dropdown-content").each(function(){
        if ($(this).find('.dropdown-menu-nub').length===0) {
            $(this).prepend("<div class='dropdown-menu-nub'></div>");
        }
    });

    $('.dropdown-toggle').each(function() {
        if ($(this).find('.dropdown-menu-nub').length===0) {
            $(this).prepend("<div class='dropdown-menu-nub'></div>");
        }
    });

    $('[data-toggle="tooltip"]').tooltip();

    document.createElement( "picture" );


    //Thumbs
    $("#product-updates-register").on("change", function(e){
        var _this = e.currentTarget;
        if ($(_this).is(':checked')) {
            $('.thumbs-up-left').addClass("checked");
        } else {
            $('.thumbs-up-left').removeClass("checked");
        }
    });

    $("#blog-register").on("change", function(e){
        var _this = e.currentTarget;
        if ($(_this).is(':checked')) {
            $('.thumbs-up-right').addClass("checked");
        } else {
            $('.thumbs-up-right').removeClass("checked");
        }
    });



    if ($('#home-hero video').length){

    } else {
        $("#home-hero .background-gif").remove();
        $("#home-hero").vide({
            mp4: 'https://d1oyuxnsvvtuwc.cloudfront.net/strap-hero-poster.mp4',
            webm: 'https://d1oyuxnsvvtuwc.cloudfront.net/strap-hero-poster.webm',
            ogv: 'https://d1oyuxnsvvtuwc.cloudfront.net/strap-hero-poster.ogv',
            poster: 'https://d1oyuxnsvvtuwc.cloudfront.net/strap-hero-poster.jpg'
        }, {
            resizing:true,
            position: "100% 0%"
        });
    }
    if ($('#blog-hero video').length){

    } else {
        $("#blog-hero .background-gif").remove();
        $("#blog-hero").vide({
            mp4: 'https://d1oyuxnsvvtuwc.cloudfront.net/strap-hero-poster.mp4',
            webm: 'https://d1oyuxnsvvtuwc.cloudfront.net/strap-hero-poster.webm',
            ogv: 'https://d1oyuxnsvvtuwc.cloudfront.net/strap-hero-poster.ogv',
            poster: 'https://d1oyuxnsvvtuwc.cloudfront.net/strap-hero-poster.jpg'
        }, {
            resizing:true,
            position: "100% 0%"
        });
    }
    

    $('#video-link, #video-tab-link').leanModal({
        ready: function() { 
            $('body').addClass("modal-open"); 
        }, // Callback for Modal open
        complete: function() {
            $('body').removeClass("modal-open");
            $('#myModal iframe').removeAttr('src');
        } // Callback for Modal close
    });


    $("#video-link, #video-tab-link").click(function() {
        var src = '//www.youtube.com/embed/UQ5ViLekGU8?autoplay=1';

        $('#myModal iframe').attr('src', src);

        analytics.track("Home Video Played");
    });

    $("#myModal").click(function() {
        $('#myModal iframe').removeAttr('src');
    });

    //Thumbs
    // $("#product-updates-register").on("change", function(e,t){
    //     var _this = e.currentTarget;
    //     if ($(_this).is(':checked')) {
    //         $('.thumbs-up-left').addClass("checked");
    //     } else {
    //         $('.thumbs-up-left').removeClass("checked");
    //     }
    // });

    // $("#blog-register").on("change", function(e,t){
    //     var _this = e.currentTarget;
    //     if ($(_this).is(':checked')) {
    //         $('.thumbs-up-right').addClass("checked");
    //     } else {
    //         $('.thumbs-up-right').removeClass("checked");
    //     }
    // });

    $("input[type=checkbox]").eq(0).on("change", function(e,t){
        var _this = e.currentTarget;
        if ($(_this).is(':checked')) {
            $('.thumbs-up-left').addClass("checked");
        } else {
            $('.thumbs-up-left').removeClass("checked");
        }
    });

    $("input[type=checkbox]").eq(1).on("change", function(e,t){
        var _this = e.currentTarget;
        if ($(_this).is(':checked')) {
            $('.thumbs-up-right').addClass("checked");
        } else {
            $('.thumbs-up-right').removeClass("checked");
        }
    });

    


    if (responsive_viewport > 768) {

        var controllerHWP = new ScrollMagic.Controller();


        new ScrollMagic.Scene({triggerElement: "#how-it-works", triggerHook: "onLeave", offset: -120, duration: $(".how-it-works-menu-wrap").height() - $(".how-it-works-menu").height()})
                        .setPin(".how-it-works-menu")
                        .addTo(controllerHWP);
        new ScrollMagic.Scene({triggerElement: "#how-it-works", triggerHook: "onLeave", offset: -120, duration: $(".how-it-works-menu-wrap").height() - $(".how-it-works-menu").height()})
                        .setPin("#how-it-works-section")
                        .addTo(controllerHWP);


        var controllerHW = new ScrollMagic.Controller();

        // How it works scenes
        new ScrollMagic.Scene({triggerElement: "#how-enable"})
                        .setClassToggle("#how-enable-tic", "active")
                        .addTo(controllerHW);
        new ScrollMagic.Scene({triggerElement: "#how-enable"})
                        .setClassToggle(".item-nub", "step-one") // add class toggle
                        .addTo(controllerHW);

        new ScrollMagic.Scene({triggerElement: "#how-connect"})
                        .setClassToggle(".item-nub", "step-two") // add class toggle
                        .addTo(controllerHW);
        new ScrollMagic.Scene({triggerElement: "#how-connect"})
                        .setClassToggle("#how-connect-tic", "active") // add class toggle
                        .addTo(controllerHW);

        new ScrollMagic.Scene({triggerElement: "#how-push"})
                        .setClassToggle("#how-push-tic", "active") // add class toggle
                        .addTo(controllerHW);
        new ScrollMagic.Scene({triggerElement: "#how-push"})
                        .setClassToggle(".item-nub", "step-three") // add class toggle
                        .addTo(controllerHW);

        new ScrollMagic.Scene({triggerElement: "#how-metrics"})
                        .setClassToggle("#how-metrics-tic", "active") // add class toggle
                        .addTo(controllerHW);
        new ScrollMagic.Scene({triggerElement: "#how-metrics"})
                        .setClassToggle(".item-nub", "step-four") // add class toggle
                        .addTo(controllerHW);
    }

    //ScrollMagic

    // init controller
    var controllerScrollTabs = new ScrollMagic.Controller();


    // Home Page Scroll Sections Tabs
    new ScrollMagic.Scene({triggerElement: "#home-hero-trigger", duration: $("#home-hero-trigger").height()})
                    .addTo(controllerScrollTabs)
                    .on("enter", function (e) {
                        $('#subHeader ul.tabs').tabs('activate_tab', 'home-hero');
                        $('a.down-button').attr("href", "#how-it-works-trigger");
                    });
    new ScrollMagic.Scene({triggerElement: "#how-it-works-trigger", duration: $("#how-it-works-trigger").height()})
                    .addTo(controllerScrollTabs)
                    .on("enter", function (e) {
                        $('#subHeader ul.tabs').tabs('activate_tab', 'how-it-works-section');
                        $('a.down-button').attr("href", "#how-enable");
                    });
    new ScrollMagic.Scene({triggerElement: "#how-enable", duration: $("#how-enable").height()})
                    .addTo(controllerScrollTabs)
                    .on("enter", function (e) {
                        $('#subHeader ul.tabs').tabs('activate_tab', 'how-it-works-section');
                        $('a.down-button').attr("href", "#how-connect");
                    });
    new ScrollMagic.Scene({triggerElement: "#how-connect", duration: $("#how-connect").height()})
                    .addTo(controllerScrollTabs)
                    .on("enter", function (e) {
                        $('#subHeader ul.tabs').tabs('activate_tab', 'how-it-works-section');
                        $('a.down-button').attr("href", "#how-push");
                    });
    new ScrollMagic.Scene({triggerElement: "#how-push", duration: $("#how-push").height()})
                    .addTo(controllerScrollTabs)
                    .on("enter", function (e) {
                        $('#subHeader ul.tabs').tabs('activate_tab', 'how-it-works-section');
                        $('a.down-button').attr("href", "#how-metrics");
                    });
    new ScrollMagic.Scene({triggerElement: "#how-metrics", duration: $("#how-metrics").height()})
                    .addTo(controllerScrollTabs)
                    .on("enter", function (e) {
                        $('#subHeader ul.tabs').tabs('activate_tab', 'how-it-works-section');
                        $('a.down-button').attr("href", "#consulting-section");
                    });
    new ScrollMagic.Scene({triggerElement: "#consulting-section", duration: $("#consulting-section").height()})
                    .addTo(controllerScrollTabs)
                    .on("enter", function (e) {
                        $('a.down-button').attr("href", "#benefits-trigger");
                    });

    new ScrollMagic.Scene({triggerElement: "#benefits-trigger", duration: $("#benefits-trigger").height()})
                    .addTo(controllerScrollTabs)
                    .on("enter", function (e) {
                        $('#subHeader ul.tabs').tabs('activate_tab', 'benefits');
                        $('a.down-button').attr("href", "#white-paper-section");
                    });
    new ScrollMagic.Scene({triggerElement: "#white-paper-section", duration: $("#white-paper-section").height()})
                    .addTo(controllerScrollTabs)
                    .on("enter", function (e) {
                        $('#subHeader ul.tabs').tabs('activate_tab', 'benefits');
                        $('a.down-button').attr("href", "#why-wear");
                    });
    new ScrollMagic.Scene({triggerElement: "#why-wear", duration: $("#why-wear").height()})
                    .addTo(controllerScrollTabs)
                    .on("enter", function (e) {
                        $('#subHeader ul.tabs').tabs('activate_tab', 'benefits');
                        $('a.down-button').attr("href", "#contact-trigger");
                    });
    new ScrollMagic.Scene({triggerElement: "#contact-trigger", duration: $("#contact-trigger").height()})
                    .addTo(controllerScrollTabs)
                    .on("enter", function (e) {
                        $('a.down-button').attr("href", "#contact-trigger");
                    });

});
function checkClasses() {
    var $this = $(this);
    if ($this.has("select").length) {
        $("select").addClass('browser-default');
    }
    $this.find(".input").addClass("input-field");
    $this.find(".input textarea").addClass("materialize-textarea");
}
function inspectForms() {
    setTimeout(function () {

        var $toCheck = $('.invalid.error').closest(".field");

        $toCheck.each(checkClasses);

        var $toUpdate = $('.field').not('.parsed');
        if ($toUpdate.length) {
            $toUpdate.each(updateForm);
        }
        inspectForms();
    }, 250);
}
inspectForms();


