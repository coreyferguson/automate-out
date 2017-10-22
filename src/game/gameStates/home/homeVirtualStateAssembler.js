
class HomeVirtualStateAssembler {

  toVirtual(reality) {
    if (reality) return {
      x: reality.sprite.x,
      y: reality.sprite.y,
      resources: {
        iron: reality.resources.iron,
        energy: reality.resources.energy
      }
    };
  }

}

module.exports = new HomeVirtualStateAssembler();
module.exports.HomeVirtualStateAssembler = HomeVirtualStateAssembler;
