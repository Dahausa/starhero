import 'phaser';
import Player from './player/player';

export default class Demo extends Phaser.Scene
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
        super('demo');
    }

    preload ()
    {
        this.load.image('logo', 'assets/GalaxyOutpostLogo.png');
        this.load.glsl('stars', 'assets/starfields.glsl.js');
        this.load.image('player','assets/player/player.png')
    }

    create ()
    {
        this.screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        this.screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;

        this.add.shader('RGB Shift Field', 0, 0, 800, 600).setOrigin(0);
        const logo = this.add.image(this.screenCenterX, this.screenCenterY, 'logo');

        this.tweens.add({
            targets: logo,
            y: 150,
            duration: 1500,
            ease: 'Sine.inOut',
            yoyo: true,
            repeat: -1
        })

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

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#125555',
    width: 800,
    height: 600,
    scene: Demo
};

const game = new Phaser.Game(config);
