if (!window.sparkleInitialized) {
    window.sparkleInitialized = true;
  
    window.addEventListener('mousemove', function(e) {
      const trailIntensity = 0.25;
      const amount = 1;
  
      for (let i = 0; i < amount; i++) {
        if (Math.random() > trailIntensity) continue;
  
        const star = document.createElement('div');
        const xOffset = Math.random() * 30 - 15;
        const yOffset = Math.random() * 30 - 15;
  
        star.className = 'star';
        star.style.top = `${e.clientY + yOffset}px`;
        star.style.left = `${e.clientX + xOffset}px`;
  
        document.body.appendChild(star);
  
        setTimeout(() => {
          document.body.removeChild(star);
        }, 300);
      }
    });
}