const path = require('path');
const cg = require('changelog-generator');
const pkg = require(path.join(__dirname, '../../package.json')).homepage;

function changelog() {
  cg(pkg, function(err) {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    process.exit(0);
  });
}

module.exports = changelog();
