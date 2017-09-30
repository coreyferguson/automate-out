
const ioc = require('../ioc');

class ConstructionHud {

  constructor() {
    this.menuActions = {
      forkLift: this.forkLift.bind(this)
    };
  }

  preload() {
    ioc.game.load.spritesheet(
      'icon-build',
      'assets/icons/build.png',
      100,
      100,
      4);
    ioc.game.load.spritesheet(
      'icon-forkLift',
      'assets/icons/forkLift.png',
      100,
      100,
      4);
  }

  create(level) {
    this.menusGroup = ioc.game.add.group();
    this.level = level;
    this.showMainMenus();
  }

  update() {
  }

  showMainMenus() {
    this.menusGroup.removeAll();
    const menus = Object.keys(this.level.allowedConstruction);
    menus.forEach(menu => {
      const click = () => this.showSubMenus(menu);
      const btn = ioc.game.add.button(
        10,
        10,
        `icon-${menu}`,
        click,
        null,
        0, 1, 2, 3,
        this.menusGroup
      );
      btn.scale.setTo(0.5, 0.5);
      btn.fixedToCamera = true;
    })
  }

  showSubMenus(menu) {
    this.menusGroup.forEach(item => item.destroy());
    this.level.allowedConstruction[menu].forEach(item => {
      const action = this.menuActions[item];
      const click = () => { action(this.level); };
      const btn = ioc.game.add.button(
        10,
        10,
        `icon-${item}`,
        click,
        null,
        0, 1, 2, 3,
        this.menusGroup
      );
      btn.scale.setTo(0.5, 0.5);
      btn.fixedToCamera = true;
    });
  }

  forkLift() {
    ioc.forkLift.spawn();
    this.showMainMenus();
  }

}

module.exports = new ConstructionHud();
module.exports.ConstructionHud = ConstructionHud;
