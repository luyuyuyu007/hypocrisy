document.addEventListener('click', (e) => {
    const ripple = document.createElement('div');
    ripple.className = 'click-ripple';
    
    // Neon colors palette
    const colors = ['#FF0055', '#00FF55', '#5500FF', '#FFFF00', '#00FFFF', '#FF00FF'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;
    ripple.style.borderColor = randomColor;
    // Add glow effect
    ripple.style.boxShadow = `0 0 15px ${randomColor}, inset 0 0 10px ${randomColor}`;
    
    document.body.appendChild(ripple);
    
    ripple.addEventListener('animationend', () => {
        ripple.remove();
    });
});
