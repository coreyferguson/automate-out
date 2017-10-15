
class EnergyVirtualStateAssembler {

  toVirtual(reality) {
    const virtual = {};
    virtual.type = reality.type;
    virtual.x = reality.sprite.x;
    virtual.y = reality.sprite.y;
    virtual.type = reality.type;
    virtual.mass = reality.mass;
    return virtual;
  }

  toVirtuals(realities) {
    return realities.map(this.toVirtual);
  }

}

module.exports = new EnergyVirtualStateAssembler();
module.exports.EnergyVirtualStateAssembler = EnergyVirtualStateAssembler;
