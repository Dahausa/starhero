import 'phaser';
import Player from './player/player';
import Play from './scenes/play';

export default class Menu extends Phaser.Scene
{
    startKey: Phaser.Input.Keyboard.Key

    screenCenterX: number
    screenCenterY: number

    playScene: Phaser.Scene;

    constructor ()
    {
        super('menu');
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

        this.playScene = this.game.scene.add('play', new Play(),false)

        this.startKey = this.input.keyboard.addKey('Space')
        
    }

    update() {
        if (this.startKey.isDown) {
            this.game.scene.start('play')
            this.game.scene.stop('menu')
        }
    }
}

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#125555',
    width: 800,
    height: 600,
    scene: Menu
};

const game = new Phaser.Game(config);
