
class ScoutVirtualStateAssembler {

  toVirtual(reality) {
    const virtual = {};
    virtual.type = reality.type;
    virtual.x = reality.sprite.x;
    virtual.y = reality.sprite.y;
    virtual.type = reality.type;
    virtual.health = reality.health;
    virtual.mode = reality.mode;
    return virtual;
  }

  toVirtuals(realities) {
    return realities.map(this.toVirtual);
  }

}

module.exports = new ScoutVirtualStateAssembler();
module.exports.ScoutVirtualStateAssembler = ScoutVirtualStateAssembler;
