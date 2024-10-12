window.CourseController = function($scope,$http,$routeParams,$location){
    $scope.listcousres = []
    $scope.listcategories = []
    $scope.dataInput = {
        views:0
    }

    // add

    $scope.onAdd = function(){
        if($scope.frm.$valid){
            $http.post('http://localhost:3000/cousres',$scope.dataInput)
            .then(
                function success(res){
                    // console.log(res);
                    alert('Them thanh cong')
                    $location.url('/course')
                },
                function error(){
                    alert('Them that bai')
                }
            )
        }
    }

    // update

    $scope.getlistcousresById = function(id){
        $http.get('http://localhost:3000/cousres/'+id)
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
        // console.log(id);
        $scope.getlistcousresById(id);
    }

    $scope.onEdit = function(){
        if($scope.frm.$valid){
            $http.put('http://localhost:3000/cousres/'+$scope.dataInput.id,$scope.dataInput)
            .then(
                function success(res){
                    // console.log(res);
                    alert('Sua thanh cong')
                    $location.url('/course')
                },
                function error(){
                    alert('Sua that bai')
                }
            )
        }
    }

    // delete 

    $scope.onDelete = function(id){
        if(confirm("Ban chac chan muon xoa?")){
            $http.delete('http://localhost:3000/cousres/'+id)
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

    $scope.getlistcousres = function(){
        $http.get('http://localhost:3000/cousres')
        .then(
            function success(res){
                // console.log(res);
                $scope.listcousres = res.data
            },
            function error(){
                alert('Loi')
            }
        )
    }

    $scope.getlistcategories = function(){
        $http.get('http://localhost:3000/categories')
        .then(
            function success(res){
                // console.log(res);
                $scope.listcategories = res.data
                if($location.url() == '/course/add'){
                    $scope.dataInput.category = $scope.listcategories[0].id
                }
            },
            function error(){
                alert('Loi')
            }
        )
    }

    $scope.getlistcousres();
    $scope.getlistcategories();
}