
const textureNameOfPlayerInRegistry: string = 'player'

export default class Player extends Phaser.GameObjects.Image {

    private speed: number = 10


    constructor(scene: Phaser.Scene, x: number, y: number) {
        //Register this in TextureManager
        super(scene, x, y, textureNameOfPlayerInRegistry)
        this.scene = scene
        this.x = x
        this.y = y

        //Add this to canvas
        this.scene.add.existing(this)
    }

    moveLeft(){
        this.x = this.x - this.speed
    }

    moveRight() {
        this.x = this.x + this.speed
    }

    moveUp() {
        this.y = this.y - this.speed
    }

    moveDown() {
        this.y = this.y + this.speed
    }

}