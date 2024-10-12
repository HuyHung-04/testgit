const app = angular.module("myApp",[]);

function myFunction($scope,$http){
    $scope.type = 'add'
    $scope.listData = []
    $scope.listCategory=[
        {
            id: "1",
            name: "Danh mục sản phẩm 1"
        },
        {
            id: "2",
            name: "Danh mục sản phẩm 2"
        }
    ]
    $scope.onSubmit = function(){
        if($scope.form.$valid){
            if($scope.type =='add'){
                $http.post("http://localhost:3000/users",angular.copy($scope.dataInput))
                .then(
                    function success(res){
                        alert('Them thanh cong')
                    },
                    function error(){
                        alert('Them that bai')
                    }
                )
            }
            else if($scope.type =='edit'){
                $http.put("http://localhost:3000/users/"+$scope.dataInput.id,angular.copy($scope.dataInput))
                .then(
                    function success(){
                        alert("Sửa thành công")
                    },
                    function error(){
                        alert("Sửa thất bại")
                    }
                )
            }
        }
    }
    $scope.getList = function(){
        $http.get("http://localhost:3000/users")
        .then(
            function success(res){
                $scope.listData = res.data
            },
            function error (){
                alert("lỗi")
            }
        )
    }
    $scope.getList();
    $scope.onEdit = function(id){
        $scope.type = 'edit'
        $http.get("http://localhost:3000/users/"+id)
        .then(
            function success(res){
                $scope.dataInput = res.data
            },
            function error(){
                alert('Lỗi')
            }
        )
    }
    $scope.onDelete = function(id){
        if(confirm("Bạn có chắc chắn muốn xoá không?")){
            $http.delete('http://localhost:3000/users/'+id)
            .then(
                function success(res){
                    alert('Xoá thành công')
                },
                function error(){
                    alert('Lỗi')
                }
            )
        }
    }
    $scope.dataInput={}
}
app.controller("myController",myFunction)