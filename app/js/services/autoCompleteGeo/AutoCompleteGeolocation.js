function AutoCompleteGeolocation($http) {
  'ngInject';

  const url = 'http://gd.geobytes.com/AutoCompleteCity';
  const service = {};

  service.suggest = function(queryString) {
    var queryParams = { 
      'q': queryString,
      'callback':'JSON_CALLBACK'
    };

    return new Promise((resolve, reject) => {
      $http({
        method: 'JSONP',
        url: url,
        params: queryParams
      }).success((data) => {
        resolve(data);
      }).error((err, status) => {
        reject(err, status);
      });
    });

  };

  return service;
}

export default {
  name: 'AutoCompleteGeolocation',
  fn: AutoCompleteGeolocation
};