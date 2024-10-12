const app = angular.module("myApp",["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
    .when('/product',{
        templateUrl: './views/product/list.html',
        controller: ProductController
    })
    .when('/product/add',{
        templateUrl: './views/product/add.html',
        controller: ProductController
    })
    .when('/product/edit/:id',{
        templateUrl: './views/product/edit.html',
        controller: ProductController
    })
    .otherwise('/product')
})