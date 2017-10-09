
class HomeVirtualStateAssembler {

  toVirtual(reality) {
    return {
      x: reality.sprite.x,
      y: reality.sprite.y,
      resources: {
        iron: reality.resources.iron
      }
    };
  }

}

module.exports = new HomeVirtualStateAssembler();
module.exports.HomeVirtualStateAssembler = HomeVirtualStateAssembler;
