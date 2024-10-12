const app = angular.module("myApp",['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/student',{
            templateUrl: './views/student/list.html',
            controller: StudentController
        })
        .when('/student/add',{
            templateUrl: './views/student/add.html',
            controller: StudentController
        })
        .when('/student/edit/:id',{
            templateUrl: './views/student/edit.html',
            controller: StudentController
        })
        .otherwise('/student')
})