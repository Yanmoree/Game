const canvas = document.querySelector('canvas')

const c = canvas.getContext('2d')

canvas.width = 1024;
canvas.height = 576;
console.log("canvas");

c.fillStyle = "white"
c.fillRect(0, 0, canvas.width, canvas.height)

const image = new Image()
image.src = './img/begin island.png'

const playerImage = new Image() 
playerImage.src = './img/playerDown.png'


class Sprite { // создаем экземпляр класса sprite
    constructor({position, velocity, image}) {
        this.position = position
        this.image = image
    } 
        
    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)      
    }
}
   
const background = new Sprite({
    position: {
        x: 0, //-785,
        y:  0//-650
    }, 
    image: image
})

const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    },
}

function animate() {
    
    window.requestAnimationFrame(animate)
    background.draw()
    
    c.drawImage(image, background.position.x , background.position.y)
    c.drawImage(
        playerImage, 
        0,
        0,
        playerImage.width / 4,
        playerImage.height,

        canvas.width / 2 - playerImage.width / 2,
        canvas.height / 2 - playerImage.height / 2, 
        playerImage.width / 4,
        playerImage.height
    )
       // Само движение игрока
      if(keys.w.pressed) background.position.y += 2  
      else if(keys.s.pressed) background.position.y -= 2
      else if(keys.a.pressed) background.position.x += 2 
      else if(keys.d.pressed) background.position.x -= 2 
      
      
      
}
animate()

window.addEventListener('keydown', (e) => {
    console.log(e.key);
    switch(e.key) {
        case 'w': 
        keys.w.pressed = true;
        break
        case 'a':
        keys.a.pressed = true;
        break
    
        case 's': 
        keys.s.pressed = true;
        break
  
        case 'd': 
        keys.d.pressed = true;
        break
    }
})

window.addEventListener('keyup', (e) => {
    switch(e.key) {
        case 'w': 
        keys.w.pressed = false;
        break
        case 'a':
        keys.a.pressed = false;
        break
        case 's': 
        keys.s.pressed = false;
        break
        case 'd': 
        keys.d.pressed = false;
        break
    
    }
})