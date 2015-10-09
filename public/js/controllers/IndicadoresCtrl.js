angular.module('IndicadoresCtrl', ["angularGrid"]).controller('IndicadoresController', function($scope,comun) {
    
    //comun.getAll();

    $scope.tareas = comun.tareas;

	$scope.tagline = 'The square root of life is pi!';	
    
    $scope.agregar = function() {
            comun.getAll();

        }

  $scope.oneAtATime = true;

  $scope.groups = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };

  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };





  /* AngularGrid*/
      var columnDefs = [
          {headerName: "Make", field: "make"},
          {headerName: "Model", field: "model"},
          {headerName: "Price", field: "price"}
      ];

      var rowData = [
          {make: "Toyota", model: "Celica", price: 35000},
          {make: "Ford", model: "Mondeo", price: 32000},
          {make: "Porsche", model: "Boxter", price: 72000}
      ];

      $scope.gridOptions = {
          columnDefs: columnDefs,
          rowData: rowData,
          dontUseScrolls: true // because so little data, no need to use scroll bars
      };

  
});