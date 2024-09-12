const words = [
    // Palabras en español
    'Mi Flaquita','Querida', 'Adorada', 'Amada', 'Preciosa', 'Encantadora',
    'Querida mía', 'Increíble', 'Maravillosa', 'Irreemplazable', 'Eterna',
    'Única', 'Deslumbrante', 'Radiante', 'Divina', 'Sublime',
    'Dulce', 'Hermosa', 'Fascinante', 'Luminosa', 'Ángel',
    'Mi sol', 'Tesoro', 'Cielo', 'Mi vida', 'Mi todo',
    'Amor eterno', 'Mi reina', 'Mi musa', 'Mi joya', 'Mi felicidad',
    'Mi paz', 'Mi inspiración', 'Mi sueño', 'Mi amor',
    'Querida mía', 'Mi estrella', 'Mi fortuna', 'Mi amorcito', 'Mi cariño',
    'Amor de mi vida', 'Mi amada', 'Mi adorada', 'Mi sol de cada día', 'Mi refugio',
    'Mi corazón', 'Mi destino', 'Mi alegría', 'Mi amor verdadero', 'Mi enamorada',
    'Mi apoyo', 'Mi luz', 'Mi dulce amor', 'Mi deleite', 'Mi anhelo',
    'Mi deseo', 'Mi belleza', 'Mi adoración', 'Mi placer', 'Mi vida entera'
];


const dom = {
    love: document.querySelector('.love')
}

dom.love.style.setProperty('--particles', words.length)

words.forEach((word, i) => {
    let span = document.createElement('span')
    span.style.setProperty('--n', i + 1)
    span.innerText = word
    dom.love.appendChild(span)
})