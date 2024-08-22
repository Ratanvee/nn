let player;
const videoUrl = 'https://youtu.be/aKNHFPTvEFQ?si=EdnWTW9D-u7jeULM'; // Replace with your YouTube video ID

// Load the IFrame Player API
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: getYouTubeVideoId(videoUrl),
        events: {
            'onReady': onPlayerReady,
        }
    });
}

// Extract YouTube video ID from URL
function getYouTubeVideoId(url) {
    const regExp = /^.*(?:youtu\.be\/|v\/|embed\/|watch\?v=|watch\?.+&v=|watch\?v=)([^"&?\/\s]{11})/;
    const match = url.match(regExp);
    return (match && match[1]) ? match[1] : null;
}

// When the player is ready
function onPlayerReady(event) {
    const playButton = document.getElementById('playButton');
    playButton.addEventListener('click', () => {
        if (player) {
            player.playVideo(); // Start playing the video
        }
    });
}
