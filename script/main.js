document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById('bg-video');
    video.oncanplaythrough = function() {
        document.body.style.visibility = 'visible';
    };
});