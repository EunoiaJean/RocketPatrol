let config = {
    type: Phaser.CANVAS,
    width: 640,
    Height: 480,
    scene: [ Menu, Play ],
};
let game = new Phaser.Game(config);