document.addEventListener('DOMContentLoaded', function() {
    var doorContainer = document.getElementById('door-container');
    var videoContainer = document.getElementById('video-container');
    var credits = document.getElementById('credits');
    var audio = document.getElementById('overlay-audio');
    var playMusicBtn = document.getElementById('play-music-btn');

    playMusicBtn.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            playMusicBtn.textContent = "⏸ Pause Music";
        } else {
            audio.pause();
            playMusicBtn.textContent = "🎵 Play Music";
        }
    });
  
    doorContainer.addEventListener('click', function() {
      // Add the 'open' class to trigger the door opening animation.
      audio.pause();
      audio.currentTime = 0; // Reset audio position
      playMusicBtn.style.display = 'none'; // Hide button when overlay disappears
      doorContainer.classList.add('open');
      credits.style.opacity = '0'; 


      // After the transition (1s), hide the door container and show the video container.
      setTimeout(function() {
        doorContainer.style.display = 'none';
        videoContainer.style.display = 'flex';
        document.body.style.overflow = 'auto';
        credits.style.display = 'none';
      }, 1000);
    });
  
    document.addEventListener('mousemove', function(e) {
        // if (!heartEffectEnabled) return; 
    
        if (Math.random() > 0.35) return; // 70% chance to NOT create a heart (adjust this)
    
        var heart = document.createElement('img');
        heart.className = 'heart colored-heart';
        heart.src = 'cursor-heart2.png';
    
        heart.style.left = `${e.pageX}px`;
        heart.style.top = `${e.pageY}px`;
        document.body.appendChild(heart);
    
        setTimeout(() => heart.remove(), 1000);
    });
  });
  