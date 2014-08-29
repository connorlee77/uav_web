$("#menu-close").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });

    // Opens the sidebar menu
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });

    $('a[href*=#]:not([href=#top],[href=#])').hover(function(){ 
            $("#uav").css({
               '-ms-transform': 'rotate(90deg)',
                '-webkit-transform': 'rotate(90deg)', 
                'transform': 'rotate(90deg)', 
                '-webkit-transition': '.3s ease-in',
                '-moz-transition': '.3s ease-in',
                '-o-transition': '.3s ease-in',
                'transition': '.3s ease-in',
            });
        }, function(){
            $("#uav").css({
               '-ms-transform': 'rotate(0deg)',
                '-webkit-transform': 'rotate(0deg)', 
                'transform': 'rotate(0deg)', 
                '-webkit-transition': '.3s ease-in',
                '-moz-transition': '.3s ease-in',
                '-o-transition': '.3s ease-in',
                'transition': '.3s ease-in',
            });
        });
        
        $('a[href*=#]:not([href=#])').click(function() {
            $('#uavBox')
            .transition({y: '+=700'}, 700, 'ease');
            setTimeout(function(){
                $('#uavBox').transition({rotate: '-90deg'}, 200, 'ease');
                $('#uavBox').transition({y: '-=700'}, 500, 'ease');
                $('#uavBox').transition({rotate: '0deg'}, 200, 'ease');
            }, 700);
        });


    // Scrolls to the selected menu item on the page
   $(function() {

        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

                var target = $(this.hash);

                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
 
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);

                    return false;
                }
            }
        });
        
    });