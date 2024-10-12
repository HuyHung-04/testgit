const app = angular.module("myApp",[]);
function myFunction($scope){
    $scope.data=[];
    $scope.listGender = [
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
    $scope.listSubject=[
        {
            name: "Js cơ bản",
            value: "WEB1013"
        },
        {
            name: "Dự án 1",
            value: "PRO1041"
        },
        {
            name: "AngularJS",
            value: "WEB2071"
        }

    ]
    
    $scope.dataInput ={
        gender: $scope.listGender[2].value,
        hobbies: [
            {
                text: "Đá bóng",
                name: "football",
                value: false
            },
            {
                text: "Bơi",
                name: "swimming",
                value: false
            },
            {
                text: "Chạy",
                name: "runnign",
                value: false
            }
        ],
        subject: $scope.listSubject[0].value
    }
    $scope.onSubmit = function(){
        console.log($scope.dataInput);
        $scope.data.push(angular.copy($scope.dataInput));
        console.log($scope.data);
    }
}
app.controller("myController",myFunction)
