angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {


    
	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/nerds', {
			templateUrl: 'views/nerd.html',
			controller: 'NerdController'
		})

        .when('/geeks', {
            templateUrl: 'views/geek.html',
            controller: 'GeekController'    
        })

        .when('/indicadores', {
            templateUrl: 'views/indicadores.html',
            controller: 'IndicadoresController'    
        });

	$locationProvider.html5Mode(true);

}])
.factory('comun', function($http) {
        var comun = {};

        comun.tareas = [];

        comun.tarea = {};

        /***Sección de métodos remotos***/
        comun.getAll = function(){
            return $http.get('/pruebas')
            .success(function(data){
                angular.copy(data, comun.tareas)
                 console.log('fuck');
                return comun.tareas
            })
        }

        comun.grids = [];

        comun.grid = {};

        /***Sección de métodos remotos***/
        comun.getGrids = function(){
            return $http.get('/cuadro-angular-grid')
            .success(function(data){
                angular.copy(data, comun.grids)
                 console.log('fuck grids');
                return comun.grids
            })
        }

        return comun;
    })
