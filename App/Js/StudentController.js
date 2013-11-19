'use strict';

myApp.controller('StudentController', function($scope) {

    var studentsArray = []; // empty array

    function student(name, sex, level) { // student class creation
        this.name = name;
        this.sex = sex;
        this.level = level;
    }

    studentsArray.push(new student('Ade Yinka', 'Male', 500));
    studentsArray.push(new student('Bankole Jude', 'Female', 200));
    $scope.students = studentsArray;

    $scope.Save = function() {
        studentsArray.push(new student($scope.newStudent.name, $scope.newStudent.sex, $scope.newStudent.level));
        $scope.newStudent.name = null;
        $scope.newStudent.sex = null;
        $scope.newStudent.level = null;
    };
});