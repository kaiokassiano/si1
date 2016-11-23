var app = angular.module("lab2", ['ngMaterial']);

app.controller("lab2controller", function($scope) {
	$scope.app = "Lab 2";
	$scope.tarefas = [
		{ descricao: 'asdasdasd', concluido: false},
    { descricao: 'ijnkhnhnhnnhk', concluido: false },
    { descricao: 'asdasdyh', concluido: false }
	];

	$scope.adicionarTarefa = function (tarefa) {
		if (tarefa !== undefined) {
			$scope.tarefas.push(angular.copy(tarefa));
			delete $scope.tarefa;
		}
	};
});