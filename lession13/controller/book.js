window.BookController = function($scope,$http,$routeParams,$location){
    $scope.listBook = [];
    $scope.listStatus= [];
    $scope.listPublisher= [];
    $scope.dataInput={}
// update book
    $scope.getBookById = function(id){
        $http.get("http://localhost:3000/books/"+id)
        .then(
            function success(res){
                // console.log(res);
                $scope.dataInput = res.data
                // console.log($scope.dataInput);
            },
            function error(){
                alert('lỗi')
            }
        )
    }

    if($routeParams.id){
        const id = $routeParams.id
        // console.log(id)
        $scope.getBookById(id)
    }

    $scope.onUpdate = function(id){
        if($scope.frm.$valid){
            $http.put('http://localhost:3000/books/'+$scope.dataInput.id,angular.copy($scope.dataInput))
            .then(
                function success(res){
                    alert('Sửa thành công')
                    $location.url('/book')
                },
                function error(){
                    alert('Lỗi')
                }
            )
        }
    }
// update pub
//     $scope.getPubById = function(id){
//         $http.get("http://localhost:3000/publishers/"+id)
//         .then(
//             function success(res){
//                 // console.log(res);
//                 $scope.dataInput = res.data
//                 // console.log($scope.dataInput);
//             },
//             function error(){
//                 alert('lỗi')
//             }
//         )
//     }

//     if($routeParams.id){
//         const id = $routeParams.id
//         // console.log(id)
//         $scope.getPubById(id)
//     }

//     $scope.onUpdatePub = function(id){
//         if($scope.frmpub.$valid){
//             $http.put('http://localhost:3000/publishers/'+$scope.dataInput.id,angular.copy($scope.dataInput))
//             .then(
//                 function success(res){
//                     alert('Sửa thành công')
//                 },
//                 function error(){
//                     alert('Lỗi')
//                 }
//             )
//         }
//     }
// //delete pub
//     $scope.onDeletePub = function(id){
//         if(confirm("Bạn chắc chắn muốn xoá?")){
//             $http.delete('http://localhost:3000/publishers/'+id)
//             .then(
//                 function success(res){
//                     alert("Xoá thành công")
//                 },
//                 function error(){
//                     alert("Lỗi")
//                 }
//             )
//         }
//     }

// delete book
    $scope.onDelete = function(id){
        if(confirm("Bạn chắc chắn muốn xoá?")){
            $http.delete('http://localhost:3000/books/'+id)
            .then(
                function success(res){
                    alert("Xoá thành công")
                },
                function error(){
                    alert("Lỗi")
                }
            )
        }
    }

// add book
    $scope.onAdd = function(){
        if($scope.frm.$valid){
            $http.post('http://localhost:3000/books',angular.copy($scope.dataInput))
            .then(
                function success(res){
                    // console.log(res)
                    alert('Thêm thành công')
                    $location.url('/book')
                },
                function error(){
                    alert('Thêm thất bại')
                }
            )
        }
    }
    $scope.getListPublisher = function(){
        $http.get('http://localhost:3000/publishers')
            .then(
                function success(res){
                    // console.log(res);
                    $scope.listPublisher = res.data;
                    // console.log($scope.listPublisher);
                    if($location.url() == '/book/add'){
                        $scope.dataInput.publisher = $scope.listPublisher[$scope.listPublisher.length-1].id
                    }
                },
                function error(){
                    alert("lỗi")
                }
            )
    }

    $scope.getListStatus = function(){
        $http.get('http://localhost:3000/status')
            .then(
                function success(res){
                    // console.log(res);
                    $scope.listStatus = res.data;
                    // console.log($scope.listStatus);
                    if($location.url() == '/book/add'){
                        $scope.dataInput.status = $scope.listStatus[0].value
                    }
                    
                },
                function error(){
                    alert("lỗi")
                }
            )
    }

    $scope.getListBook = function(){
        $http.get('http://localhost:3000/books')
            .then(
                function success(res){
                    // console.log(res);
                    $scope.listBook= res.data;
                    // console.log($scope.listBook);
                },
                function error(){
                    alert("lỗi")
                }
            )
    }

    $scope.getListBook();
    $scope.getListStatus();
    $scope.getListPublisher();
}