document.addEventListener('DOMContentLoaded', function () {
    const btn1Shorts = document.getElementById('btn1-shorts');
    const btn4Shorts = document.getElementById('btn4-shorts');
    const scrollToVideoBtn = document.getElementById('scroll-to-video-btn');

    const textParagraph = btn1Shorts.nextElementSibling;

    btn1Shorts.addEventListener('click', function () {

        let currentCount = parseInt(textParagraph.textContent);
        currentCount = (currentCount === 30) ? 31 : 30;
        textParagraph.textContent = currentCount + 'k';
    });

    btn4Shorts.addEventListener('click', function () {
        const videoURL = window.location.href;

        navigator.clipboard.writeText(videoURL).then(function() {
            alert('Video link copied to clipboard!');
        }).catch(function(err) {
            console.error('Unable to copy video link', err);
        });
    });
});































