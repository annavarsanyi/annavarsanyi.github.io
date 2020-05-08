let data = {
    photo: 'images/photo01.jpg',
    title: 'Picture about a lying cat',
    description: 'Ut diam ligula, interdum non elit sed, placerat venenatis ligula. Etiam est nisi, eleifend quis purus ultricies, convallis vehicula enim. Interdum et malesuada fames ac ante ipsum primis in faucibus',
    alt: 'picture about a lying cat'
};

let data2 = {
    photo: 'images/photo02.jpg',
    title: 'Picture about a contemplative bear',
    description: 'Quisque leo justo, auctor et elementum sit amet, mollis id neque. Proin blandit accumsan mollis. Aliquam dignissim felis metus, sit amet sagittis orci commodo eleifend.',
    alt: 'picture about a contemplative bear'
};

let data3 = {
    photo: 'images/photo03.jpg',
    title: 'Picture about a respectable lion',
    description: 'Proin volutpat et est ac imperdiet. Ut nec nisl eu lectus commodo sollicitudin. Sed finibus tincidunt iaculis. Vivamus mi dolor, tincidunt sed scelerisque bibendum, rhoncus a est.',
    alt: 'Picture about a respectable lion'
};

let data4 = {
    photo: 'images/photo04.jpg',
    title: 'Picture about a flying owl',
    description: 'Praesent vitae dui et sem facilisis egestas ut vitae nulla. Nam vel dui purus. Sed mi libero, dictum nec tincidunt ac, posuere non arcu.',
    alt: 'Picture about a flying owl'
};

let data5 = {
    photo: 'images/photo05.jpg',
    title: 'Picture about a gapy female lion',
    description: 'Proin tincidunt ipsum sit amet urna consectetur dignissim. Ut feugiat mi eros, eu placerat arcu vestibulum ac. Vestibulum eu neque felis. Nulla in ante sit amet nisi sagittis rutrum vel quis nibh.',
    alt: 'Picture about a gapy female lion'
};

let data6 = {
    photo: 'images/photo06.jpg',
    title: 'Picture about an approaching cat',
    description: 'Nulla nulla eros, sagittis nec ante sed, lobortis congue sem. Aenean mollis dapibus lacus et volutpat. Donec sollicitudin fermentum faucibus. ',
    alt: 'Picture about an approaching cat'
};

let imagesData = [data, data2, data3, data4, data5, data6];

let currentPhoto = 0;

$('#photo-title').text(data.title);
$('#photo-description').text(data.description);
$('#photo').attr('alt', data.alt);
$('#photo').attr('src', imagesData[currentPhoto].photo);
//$('#photo').attr('src', imagesData[2].photo);

$('.right-arrow').click(() => {
    console.log(currentPhoto);
//    $('#photo').attr('src', imagesData[2].photo);
    currentPhoto = currentPhoto + 1;
//    console.log(currentPhoto);
//    console.log(currentPhoto);
    $('#photo').attr('src', imagesData[currentPhoto].photo);
    $('#photo-description').text(imagesData[currentPhoto].description);
    $('#photo-title').text(imagesData[currentPhoto].title);
});

$('.left-arrow').click(() => {
    console.log(currentPhoto);
//    $('#photo').attr('src', imagesData[2].photo);
    currentPhoto = currentPhoto - 1;
//    console.log(currentPhoto);
//    console.log(currentPhoto);
    $('#photo').attr('src', imagesData[currentPhoto].photo);
    $('#photo-description').text(imagesData[currentPhoto].description);
    $('#photo-title').text(imagesData[currentPhoto].title);
});

imagesData.forEach((data, index) => {
    // $('.animals')[index].attr('src', data.photo);
    $('.animals')[index].src = data.photo
    console.log($('.animals')[0]);
});   

