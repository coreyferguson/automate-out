
const ioc = require('../../../ioc');

const { minerService } = ioc;

class Home {

  constructor(options) {
    options = options || {};
    this.sprite = options.sprite;
    this.resources = Object.assign({
      iron: 5
    }, options.resources);
  }

}

module.exports = Home;
