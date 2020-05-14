$(document).ready(function(){

    // Change big image when click on tumbnail img or text beside
    $('#tumbnails').click(function(e){                                                          //Event function registering click.
        counter= ($('#tumbnails img').index(e.target) == -1) ? $('#tumbnails p').index(e.target): $('#tumbnails img').index(e.target);   //Take index of clicked element, it could be image or p text
        hideAndShow(counter);                                                                   //Run function to display appropriate big image
    });

    // Load big images to container
    $('#big-image-container').empty();                                                          // Clear div element to add more pictures
    $('#big-image-container').prepend('<img class="slider" src="images/image5b.jpg" alt=""/>'); // Add 5 images
    $('#big-image-container').prepend('<img class="slider" src="images/image4b.jpg" alt=""/>');
    $('#big-image-container').prepend('<img class="slider" src="images/image3b.jpg" alt=""/>');
    $('#big-image-container').prepend('<img class="slider" src="images/image2b.jpg" alt=""/>');
    $('#big-image-container').prepend('<img class="slider" src="images/image1b.jpg" alt=""/>');
    hideAndShow(counter);                                                                       //Display first image
    
    //Hide or show mobile navigation menu
    $('#logo p').click(function(){
        $('nav').slideToggle();
    });
    // On resizing window mobile navigation menu need to be hidden, but desktop nav menu must be visible, otherwise impossible to reach desktop nav menu
    $(window).resize(function(){                                                                //Using resize event
        if($(window).outerWidth(true)>768){                                                     //On increasing window make menu visible
            $('nav').slideDown();
        }else{
            $('nav').slideUp();                                                                 //On shrinking window size, hide mobile menu
        }
    });


    // Accordion slider
    $('.accordion').click(function(){                                                           //Trigger accordion action on click of heading
        $('article').slideToggle();                                                             //Slide down or slide up
        $('.accordion').toggleClass('accordion-minus accordion-plus');                          //Display - or + 
    });

    //Hover big image to zoom in
    $('#big-image-container').hover(function(){                                                 //On hover of big image
        var image =   $('.slider').eq(counter).attr('src');                                     //Read image address of current displayed image
        $('#big-image-container img').css('opacity', '0');                                      //Hide HTML image
        $('#big-image-container').css('background-image', 'url(' + image + ')');                //Show same CSS image
        $('#big-image-container').css('background-repeat', 'no-repeat');                        //No repeat property
        $('#big-image-container').css('backgroundSize', 300 +'%');                              //Resize big image to 300%
        $(this).mousemove(function(e){                                                          //Action on mouse move over the big image
            let _mouseX = e.pageX - this.offsetLeft;                                            //Capture mouse coordinate over big image
            let _mouseY = e.pageY - this.offsetTop; 
            let coordinates = (100 / $(this).width() * _mouseX) + '%'+ (100 / $(this).height() * _mouseY) + '%';  //Calculate x and y of image
            $('#big-image-container').css('backgroundPosition', coordinates);                   //Update image backgroud position
        });
    }, function(){                                                                              //Function mouse out of image
        $('#big-image-container').css('background-image', 'url()');                             //Hide CSS image
        hideAndShow(counter);                                                                   //Restore HTML image
    });
});

// Define global variables
var text = ['First', 'Second', 'Third', 'Fourth', 'Fifth']                                      //Text array added to under banner header
var counter = 0;                                                                                //Image index


// Hide all and show needed image
function hideAndShow(myPosition){
    $('.slider').each(function() {                                                              //Each image in class slider
        $(this).css({'opacity': 0});                                                            //Make opacity 0 (not visible)
    });
    $('.slider').eq(myPosition).css({'opacity': 1});                                            // Display only 1 our image
    $('#big-image h1').html(text[myPosition] + ' Image - This is a main title for an image');  // Display appropriate banner message
}