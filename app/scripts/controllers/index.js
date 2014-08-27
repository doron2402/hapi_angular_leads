'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp').controller('MainCtrl', function ($scope) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
});

'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp').controller('MenuCtrl', function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
    $scope.getAffiliteLogo = function() {
        console.log($location.host());
    };
});

'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp').controller('LoginCtrl', function ($scope) {
    $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];
});

'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp').controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];
});

'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp').controller('ContactCtrl', function ($scope) {
    $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];
});
