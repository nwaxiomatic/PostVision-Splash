console.log($('body'));
$('#bg-video').vide({
	mp4: 'static/media/video/comingsoon.mp4',
	//poster: '',
}, {
	//posterType: 'jpg',
	origin: 'content-box',
});
$('#bg-video').html('YO');
console.log($('#bg-video'));