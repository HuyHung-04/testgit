const app = angular.module("myApp",[]);
    function myFunction($scope){
        // var hello = "helloword";
        $scope.showMessage = function(){
            $scope.mess = $scope.txtName;
        }

        $scope.tong = function(){
            $scope.tong1 = $scope.txtA + $scope.txtB;
        }

        $scope.tich = function(){
            $scope.tich1 = $scope.txtA * $scope.txtB;
        }
        $scope.xepLoai = function(){
            if($scope.txtXeploai>=9){
                $scope.show = "Giỏi"
            }
            else if($scope.txtXeploai>=7){
                $scope.show = "Khá"
            }
            else if($scope.txtXeploai>=5){
                $scope.show = "TB"
            }
            else{
                $scope.show = "Yếu"
            }
        }
        $scope.count = 0;
        $scope.helloword = "helloword";
        $scope.num = 20;
        $scope.info = {
            name: "Hùng",
            age: "20"
        }
        $scope.arr = ["Hoàng","Huy","Hùng"];
        $scope.data = [
                {
                    stt: "1",
                    name: "Trần Văn A",
                    age: "20",
                    khoa: "Ứng dụng phần mềm"
                },
                {
                    stt: "2",
                    name: "Nguyễn Văn B",
                    age: "21",
                    khoa: "Phát triển phần mềm"
                },
                {
                    stt: "3",
                    name: "Đặng Văn C",
                    age: "22",
                    khoa: "Lập trình web"
                }

            ];
    }
    app.controller("myController",myFunction);