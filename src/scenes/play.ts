import 'phaser';
import Player from '../player/player';

export default class Play extends Phaser.Scene
{
    leftKey: Phaser.Input.Keyboard.Key
    rightKey: Phaser.Input.Keyboard.Key
    upKey: Phaser.Input.Keyboard.Key;
    downKey: Phaser.Input.Keyboard.Key;
    
    player: Player

    screenCenterX: number
    screenCenterY: number

    constructor ()
    {
        super('play');
    }

    preload ()
    {
        this.load.image('player','assets/player/player.png')
    }

    create ()
    {
        this.screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        this.screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;

        this.leftKey = this.input.keyboard.addKey('A')
        this.rightKey = this.input.keyboard.addKey('D')
        this.upKey = this.input.keyboard.addKey('W')
        this.downKey = this.input.keyboard.addKey('S')
        
        this.player = new Player(this,this.screenCenterX,this.screenCenterY)
        
    }

    update() {
        if (this.leftKey.isDown) {
            this.player.moveLeft()
        }
        if(this.rightKey.isDown) {
            this.player.moveRight()
        }
        if(this.upKey.isDown){
            this.player.moveUp()
        }
        if(this.downKey.isDown){
            this.player.moveDown()
        }
    }
}
