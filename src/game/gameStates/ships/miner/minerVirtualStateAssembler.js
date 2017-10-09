
class MinerVirtualStateAssembler {

  toVirtual(reality) {
    return {
      x: reality.sprite.x,
      y: reality.sprite.y,
      type: reality.type,
      resources: {
        iron: reality.resources.iron
      },
      massCapacity: reality.massCapacity
    };
  }

  toVirtuals(realities) {
    return realities.map(this.toVirtual);
  }

}

module.exports = new MinerVirtualStateAssembler();
module.exports.MinerVirtualStateAssembler = MinerVirtualStateAssembler;
