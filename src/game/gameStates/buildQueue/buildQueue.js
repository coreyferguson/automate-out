
const ioc = require('../../../ioc');

class BuildQueue {

  reset() {
    this.buildQueue = ioc.buildQueueUserImpl.slice();
  }

  update() {
    let couldBuild = true;
    while (couldBuild) {
      let buildItem = this.buildQueue[0];
      if (buildItem) {
        couldBuild = ioc.homeService.construct(buildItem);
        if (couldBuild) {
          this.buildQueue.shift();
        }
      } else {
        couldBuild = false;
      }
    }
  }

}

module.exports = new BuildQueue();
module.exports.BuildQueue = BuildQueue;
