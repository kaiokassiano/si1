var app = angular.module("lab2", []);

app.controller("lab2controller", function($scope) {
	$scope.app = "Lab 2";
	$scope.tarefas = [
	];

	$scope.adicionarTarefa = function (tarefa) {
		if (tarefa !== undefined) {
			$scope.tarefas.push(angular.copy(tarefa));
			delete $scope.tarefa;
		}
	};
});