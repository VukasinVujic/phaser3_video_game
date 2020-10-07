class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }
  preload() {
    this.load.image("background", "assets/images/background.png");
    // this.load.image("ship1", "assets/images/ship.png");
    // this.load.image("ship2", "assets/images/ship2.png");
    // this.load.image("ship3", "assets/images/ship3.png");

    this.load.spritesheet("ship", "assets/spritesheetes/ship.png", {
      frameWidth: 16,
      frameHeight: 16,
    });

    this.load.spritesheet("ship2", "assets/spritesheetes/ship2.png", {
      frameWidth: 32,
      frameHeight: 16,
    });

    this.load.spritesheet("ship3", "assets/spritesheetes/ship3.png", {
      frameWidth: 32,
      frameHeight: 32,
    });

    this.load.spritesheet("explosion", "assets/spritesheetes/explosion.png", {
      frameWidth: 16,
      frameHeight: 16,
    });
    this.load.spritesheet("power-up", "assets/spritesheetes/power-up.png", {
      frameWidth: 16,
      frameHeight: 16,
    });
  }
  create() {
    this.add.text(20, 20, "Loading game...");
    this.scene.start("playGame");
  }
  update() {}
}
