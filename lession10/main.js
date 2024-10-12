const app = angular.module("myApp",[]);

function myFunction($scope,$http){
    $scope.type = 'add'
    $scope.listData=[];
    $scope.listHome=[
        {
            name: "Hà Nội",
            value: "hn"
        },
        {
            name: "Hà Nam",
            value: "hna"
        },
        {
            name: "Thái nguyên",
            value: "tn"
        },
        {
            name: "Hải phòng",
            value: "hp"
        }
    ];

    $scope.listGender=[
        {
            name: "Nam",
            value: "men"
        },
        {
            name: "Nữ",
            value: "women"
        },
        {
            name: "Khác",
            value: "other"
        }
    ]

    $scope.dataInput={}

    $scope.onSubmit= function(){
        
        console.log($scope.frm.$valid);
        if($scope.frm.$valid){
            if($scope.type == 'add'){
                // console.log($scope.dataInput);
            $http.post("http://localhost:3000/users",angular.copy($scope.dataInput))
                .then(
                    function success(){
                        alert("Thêm thành công")
                    },
                    function error(){
                        alert("Thêm thất bại")
                    }
                )
            }
            else if($scope.type='edit'){
                $http.put(`http://localhost:3000/users/${$scope.dataInput.id}`,angular.copy($scope.dataInput))
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
       
        // else{
        //     alert("kiểm tra lại thông tin")
        // }
    }
     // khai báo
     $scope.getList = function(){
        $http.get('http://localhost:3000/users')
            .then(
                function success(response){
                    // console.log(response);
                    $scope.listData = response.data;
                },
                function error(response){
                    // console.log(response);
                    alert("lỗi")
                }
            )
    }

    // gọi
    $scope.getList();
    $scope.onEdit = function(id){
        $scope.type = 'edit'
        $http.get('http://localhost:3000/users/'+id)
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
}

app.controller("myController",myFunction)