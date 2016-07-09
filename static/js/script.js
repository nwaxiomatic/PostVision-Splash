$('#bg-video').vide({
	mp4: 'static/media/video/comingsoon.mp4',
	poster: 'static/media/img/snow.jpg',
}, {
	posterType: 'jpg',
	origin: 'content-box',
});
instance = $('#bg-video').data('vide');
video = instance.getVideoObject();
video.onloadeddata = function(){
	$('#bg-video-box').addClass('shown');
}