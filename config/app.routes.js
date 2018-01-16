angular.module('admin').config(function($routeProvider){
    $routeProvider
    .when("/login", {
      templateUrl: "components/novo-login/login.htm",
      controller: "loginCtrl"
    })
    .when("/", {
      templateUrl: "components/novo-login/login.htm",
      controller: "loginCtrl"
    })
    .when("/admin", {
      templateUrl : "components/admin/admin.htm",
      controller: "adminCtrl"
    })
    .when("/landoj", {
      templateUrl: "components/landoj/landoj.htm",
      controller: "landojCtrl"
    })
    .when("/membrecoj", {
      templateUrl:"components/membrecoj/membrecoj.htm",
      controller: "membrecojCtrl"
    })
    .when("/kotizoj/:id", {
      templateUrl:"components/kotizoj/kotizoj.htm",
      controller: "kotizojCtrl"
    })
    .when("/perantoj", {
      templateUrl:"components/perantoj/perantoj.htm",
      controller: "perantojCtrl"
    })
    .when("/membrecpetoj", {
      templateUrl:"components/membrecpetoj/membrecpetoj.htm",
      controller: "membrecpetojCtrl"
    })
    .when("/membrecpetoj/:id", {
      templateUrl:"components/membrecpetoj/membrecpetojID.htm",
      controller: "membrecpetojCtrl"
    })
    .when("/membroj", {
        templateUrl:"components/dashboard/dash.htm",
        controller: "membrojCtrl"
      })
    .when("/membroj/:id", {
      templateUrl:"components/membroj/membrojID.htm",
      controller: "membrojCtrl"
    })
    .when("/laborgrupoj", {
      templateUrl:"components/laborgrupoj/laborgrupoj.htm",
      controller: "laborgrupojCtrl"
    })
    .when("/uzantoj/:id", {
      templateUrl:"components/uzantoj/uzantoj.htm",
      controller: "uzantojCtrl"
    });
});
