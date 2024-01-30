document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('canvas');

    // Promena boje pozadine svakih nekoliko sekundi
    setInterval(changeBackgroundColor, 2000); 

    function changeBackgroundColor() {
        const randomColor = getRandomColor();
        canvas.style.animation = 'changeColorFast 1s ease-out'; // Brža animacija
        canvas.style.backgroundColor = randomColor;
        setTimeout(() => {
            canvas.style.animation = 'none';
        }, 1000); 
    }

    // Generisanje nasumične boje 
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    const svgMacka = document.getElementById('svg-macka');

    document.addEventListener('mousemove', function(event) {
        // Pomeranje očiju prati poziciju miša
        const mouseX = event.clientX / window.innerWidth - 0.5;
        const mouseY = event.clientY / window.innerHeight - 0.5;

        const maxEyeTranslation = 20; // Vrednost za veće pomeranje očiju

      
        const eyeTranslationX = mouseX * maxEyeTranslation;
        const eyeTranslationY = mouseY * maxEyeTranslation;

        // Pomeranje očiju u SVG-u
        const okoLevo = document.getElementById('oko-levo');
        const okoDesno = document.getElementById('oko-desno');

        okoLevo.setAttribute('transform', `translate(${eyeTranslationX}, ${eyeTranslationY})`);
        okoDesno.setAttribute('transform', `translate(${eyeTranslationX}, ${eyeTranslationY})`);
    });
});
