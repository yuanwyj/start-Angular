(function() {
  'use strict';

  angular
    .module('boss')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
