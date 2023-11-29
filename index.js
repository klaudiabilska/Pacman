const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

// make canvas full screen
canvas.width = innerWidth
canvas.height = innerHeight

// boundries
class Boundary {
    constructor({position}) {
        this.position = position
        this.width = 40
        this.height = 40
    }

    draw() {
        c.fillStyle = 'blue'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

const boundaries = [
    new Boundary({
        position: {
            x: 0,
            y: 0
        }
    }), 
    new Boundary({
        position: {
            x: 41,
            y: 0
        }
    })
]

boundaries.forEach(boundary => {
    boundary.draw()
})
