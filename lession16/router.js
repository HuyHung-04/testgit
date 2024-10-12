const app = angular.module("myApp",["ngRoute"])

app.config(function($routeProvider){
    $routeProvider
    .when('/course',{
        templateUrl: './views/course/list.html',
        controller: CourseController
    })
    .when('/course/add',{
        templateUrl: './views/course/add.html',
        controller: CourseController
    })
    .when('/course/edit/:id',{
        templateUrl: './views/course/edit.html',
        controller: CourseController
    })
    .otherwise('/course')
})