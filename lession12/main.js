const app = angular.module("myApp",[])
function myFunction($scope,$http){
    $scope.type='add'
    $scope.listBooks=[]
    $scope.listStatus=[]
    $scope.listPublishers=[]
    $scope.dataInput={}
    $scope.onSubmit = function(){
        if($scope.form.$valid){
            if($scope.type =='add'){
                $http.post("http://localhost:3000/books",angular.copy($scope.dataInput))
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
                $http.put("http://localhost:3000/books/"+$scope.dataInput.id,angular.copy($scope.dataInput))
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
         // khai báo
 $scope.getListbooks = function(){
    $http.get('http://localhost:3000/books')
        .then(
        function success(res){
        // console.log(res);
            $scope.listBooks = res.data;
            },
            function error(res){
            // console.log(response);
                alert("lỗi")
            }
     )
}
         $scope.getListbooks();
 $scope.onEdit = function(id){
    $scope.type = 'edit'
        $http.get("http://localhost:3000/books/"+id)
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
            $http.delete('http://localhost:3000/books/'+id)
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
         // khai báo
         $scope.getListStatus = function(){
            $http.get('http://localhost:3000/status')
                .then(
                    function success(res){
                        console.log(res);
                        $scope.listStatus = res.data;
                        $scope.dataInput.status = $scope.listStatus[0].value;
                    },
                    function error(res){
                        // console.log(response);
                        alert("lỗi")
                    }
                )
        }
        $scope.getListStatus();
       // khai báo
              $scope.getListPublishers = function(){
                  $http.get('http://localhost:3000/publishers')
                     .then(
                        function success(res){
                                console.log(res);
                                $scope.listPublishers = res.data;
                                $scope.dataInput.publisher = $scope.listPublishers[$scope.listPublishers.length - 1].id;
                             },
                             function error(res){
                              // console.log(response);
                              alert("lỗi")
                          }
                        )
                   }
   $scope.getListPublishers();
}
app.controller("myController",myFunction)
/**
 * Yêu cầu:
 * - Xây dựng chức năng CRUD
 * 
 * Yêu cầu chức năng thêm mới và chỉnh sửa có validate:
 * - title : không được để trống, có ít nhất 2 kí tự
 * - yearOfPublish: không được để trống, tối thiểu từ năm 2000 trở đi
 * - status: Mặc định lựa chọn giá trị thứ nhất (radio)
 * - publisher: Mặc định lựa chọn giá trị cuối cùng (select option)
 * 
 * Hiển thị danh sách dưới dạng bảng
 * 
 * Chức năng xóa có confirm của người dùng
 * 
 */