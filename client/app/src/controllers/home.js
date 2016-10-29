angular.module('home.controllers', ['ui.router', 'myApp.services'])
.controller('homeController', function($scope, $http, Goals) {
//5813e667ac5ac74563b28bbf

  $scope.goals = Goals.getGoalsArray();
  console.log($scope.goals);
  //  [
  //  {
  //          "id": 12,
  //          "title": "Graduate from HR!!!",
  //          "completed": false,
  //          "children": [
  //            {
  //              "id": 34,
  //              "title": "Finish Greenfield Project",
  //              "completed": false,
  //              "children": [
  //                {
  //                  "id": 56,
  //                  "title": "Finish front-end",
  //                  "completed": false,
  //                  "children": []
  //                },
  //                {
  //                  "id": 78,
  //                  "title": "Finish back-end",
  //                  "completed": false,
  //                  "children": []
  //                }
  //              ]
  //            },
  //            {
  //              "id": 910,
  //              "title": "Finish Legacy Project",
  //              "completed": false,
  //              "children": []
  //            }
  //          ]
  //        },
  //        {
  //                "id": 3300,
  //                "title": "Sth different",
  //                "completed": false,
  //                "children": [
  //                  {
  //                    "id": 34,
  //                    "title": "Finish Greenfield Project",
  //                    "completed": false,
  //                    "children": [
  //                      {
  //                        "id": 56,
  //                        "title": "Finish front-end",
  //                        "completed": false,
  //                        "children": []
  //                      },
  //                      {
  //                        "id": 78,
  //                        "title": "Finish back-end",
  //                        "completed": false,
  //                        "children": []
  //                      }
  //                    ]
  //                  },
  //                  {
  //                    "id": 910,
  //                    "title": "Finish Legacy Project",
  //                    "completed": false,
  //                    "children": []
  //                  }
  //                ]
  //              }
  // ];
});
