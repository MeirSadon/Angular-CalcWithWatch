module.controller("CalcCtrl", CtorCtrl)

function CtorCtrl($scope) {

  $scope.x = 0
  $scope.oper = "+"
  $scope.y = 0
  $scope.sum = 0

  $scope.CalcResult = function() {
    if($scope.oper == '+')
      $scope.sum = $scope.x + $scope.y
    if($scope.oper == '-')
     $scope.sum = $scope.x - $scope.y
    if($scope.oper == '*')
     $scope.sum = $scope.x * $scope.y
    if($scope.oper == '/')
     $scope.sum = $scope.x / $scope.y
  }

  $scope.$watch('x', $scope.CalcResult)
  $scope.$watch('y', $scope.CalcResult())
  $scope.$watch('oper', $scope.CalcResult())
  
}