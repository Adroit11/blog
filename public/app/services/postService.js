(function() {
    'use strict';
    app.factory('PostService', ['$resource', 'API_URL', function($resource, API_URL) {
        return $resource(API_URL + '/posts/:id', {id: "@id"});
    }]);
    
})();