window.ProductController = function($scope,$http,$routeParams,$location){
    $scope.listproducts = [];
    $scope.listcategories = [];
    $scope.dataInput = {}
    // add
    $scope.onAdd = function(){
        if($scope.frm.$valid){
            $http.post('http://localhost:3000/products',$scope.dataInput)
            .then(
                function success(res){
                    // console.log(res);
                    alert('Them thanh cong')
                    $location.url('/product')
                }
            ),
            function error(){
                alert('Them that bai')
            }
        }
    }

    // update

    $scope.getlistproductsById = function(id){
        $http.get('http://localhost:3000/products/'+id)
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
        $scope.getlistproductsById(id);

    }

    $scope.onEdit = function(){
        if($scope.frm.$valid){
            $http.put('http://localhost:3000/products/'+$scope.dataInput.id,$scope.dataInput)
            .then(
                function success(res){
                    // console.log(res);
                    alert('Sua thanh cong')
                    $location.url('/product')
                }
            ),
            function error(){
                alert('Loi')
            }
        }
    }

    // delete
    $scope.onDelete = function(id){
        if(confirm("Ban chan chan muon xoa?")){
            $http.delete('http://localhost:3000/products/'+id)
            .then(
                function success(res){
                    // console.log(res);
                    alert('Xoa thanh cong')
                }
            ),
            function error(){
                alert('Xoa that bai')
            }
        }
    }

    $scope.getlistproducts = function(){
        $http.get('http://localhost:3000/products')
        .then(
            function success(res){
                // console.log(res);
                $scope.listproducts = res.data
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
                if($location.url() == '/product/add'){
                    $scope.dataInput.category = $scope.listcategories[0].id
                }
            },
            function error(){
                alert('Loi')
            }
        )
    }

    $scope.getlistproducts();
    $scope.getlistcategories();
}