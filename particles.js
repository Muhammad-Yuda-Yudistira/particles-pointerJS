
document.addEventListener('mousemove', function(e) {
    const particle = document.createElement('span')
    particle.classList.add('particle')
    document.body.appendChild(particle)

    const x = e.offsetX;
    const y = e.offsetY;
    particle.style.top = y + 'px';
    particle.style.left = x + 'px';

    const size = Math.random() * 8
    particle.style.width = 2 + size + 'px';
    particle.style.height = 2 + size + 'px';

    const rotasi = Math.random() * 360;
    particle.style.transform = 'rotate(' + rotasi + 'deg)'

    setInterval(function() {
        particle.remove()
    }, 2000)
})