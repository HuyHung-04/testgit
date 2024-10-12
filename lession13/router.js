const app = angular.module("myApp",['ngRoute'])
app.config(function($routeProvider){
    $routeProvider
        .when('/home',{
            templateUrl: './views/home.html',
            controller: HomeController
        })
        .when('/book',{
            templateUrl: './views/books/list.html',
            controller: BookController
        })
        .when('/book/add',{
            templateUrl: './views/books/add.html',
            controller: BookController
        })
        .when('/book/edit/:id',{
            templateUrl: './views/books/edit.html',
            controller: BookController
        })
        // .when('/pub',{
        //     templateUrl: './views/books/listpub.html',
        //     controller: BookController
        // })
        // .when('/pub/editpub/:id',{
        //     templateUrl: './views/books/editpub.html',
        //     controller: BookController
        // })
})