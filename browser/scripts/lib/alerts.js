!function(n){"use strict";"function"==typeof define&&define.amd?define([],n):(window.lski=window.lski||{},window.lski.alerts=n())}(function(){var n={alert:function(n,i){setTimeout(function(){window.alert(n),"function"==typeof i&&i()},1)},confirm:function(n,i){setTimeout(function(){i(window.confirm(n))},1)}};return n});
//# sourceMappingURL=../../../maps/browser/scripts/lib/alerts.js.map
