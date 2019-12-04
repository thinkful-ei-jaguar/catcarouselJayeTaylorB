'use strict';

function catCarousel () {
$('.thumbnail').on('click', e => {
    
    let newImg = $(event.currentTarget).find('img').attr('src');
    let altDesc = $(event.currentTarget).find('img').attr('alt');  
                
    $('.oldImage').attr('src', `${newImg}`);
    $('.oldImage').attr('alt', `${altDesc}`);


});

}

$(catCarousel);