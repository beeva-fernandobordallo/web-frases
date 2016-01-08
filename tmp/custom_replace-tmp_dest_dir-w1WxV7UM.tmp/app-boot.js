/* jshint ignore:start */

define('flamestack/config/environment', ['ember'], function(Ember) {
  var prefix = 'flamestack';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("flamestack/tests/test-helper");
} else {
  require("flamestack/app")["default"].create({"name":"flamestack","version":"0.0.0+71e40513"});
}

/* jshint ignore:end */
