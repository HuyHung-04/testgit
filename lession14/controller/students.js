window.StudentController = function($scope,$http,$routeParams,$location){
    $scope.listStudents = []
    $scope.listGenders = []
    $scope.listClasses = []
    $scope.dataInput = {}

    // add
    $scope.onAdd = function(){
        if($scope.frm.$valid){
            $http.post('http://localhost:3000/students',$scope.dataInput)
            .then(
                function success(res){
                    // console.log(res);
                    alert('Them thanh cong')
                    $location.url('/student')
                },
                function error(){
                    alert('Them that bai')
                }
            )
        }
    }
    // update
    $scope.listgetStudentById = function(id){
        $http.get('http://localhost:3000/students/'+id)
        .then(
            function success(res){
                // console.log(res);
                $scope.dataInput = res.data
            },
            function error(){
                alert('Loi')
            }
        )
    }

    if($routeParams.id){
        const id = $routeParams.id
        console.log(id);
        $scope.listgetStudentById(id);

    }

    $scope.onUpdate = function(id){
        if($scope.frm.$valid){
            $http.put('http://localhost:3000/students/'+$scope.dataInput.id,$scope.dataInput)
            .then(
                function success(res){
                    console.log(res);
                    alert('Sua thanh cong')
                    $location.url('/student')
                },
                function error(){
                    alert('Sua that bai')
                }
            )
        }
    }

    // delete
    $scope.onDelete = function(id){
        if(confirm("Ban chac chan muon xoa ?")){
            $http.delete('http://localhost:3000/students/'+id)
            .then(
                function success(res){
                    alert('Xoa thanh cong')
                },
                function error(){
                    alert('Xoa that bai')
                }
            )
        }
    }

    $scope.getlistStudents = function(){
        $http.get('http://localhost:3000/students')
        .then(
            function success(res){
                // console.log(res)
                $scope.listStudents = res.data
            },
            function error(){
                alert('Loi')
            }
        )
    }
    $scope.getlistGenders = function(){
        $http.get('http://localhost:3000/genders')
        .then(
            function success(res){
                // console.log(res)
                $scope.listGenders = res.data
                if($location.url() == '/student/add'){
                    $scope.dataInput.gender = $scope.listGenders[0].id
                }
            },
            function error(){
                alert('Loi')
            }
        )
    }
    $scope.getlistClasses = function(){
        $http.get('http://localhost:3000/classes')
        .then(
            function success(res){
                // console.log(res)
                $scope.listClasses = res.data
                if($location.url() == '/student/add'){
                    $scope.dataInput.class = $scope.listClasses[$scope.listClasses.length - 1].id
                }
            },
            function error(){
                alert('Loi')
            }
        )
    }
    $scope.getlistStudents();
    $scope.getlistGenders();
    $scope.getlistClasses();
}