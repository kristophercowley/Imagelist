app.controller('MainController', function ($scope) {
    $scope.test = 'Test,1,2,3';
    $scope.remove = function (i) {
        $scope.scales.splice(i, 1);
    }
    $scope.addItem = function () {
        $scope.scales.push({ title: $scope.nItem, rate: $scope.nRate, photo: $scope.nPhoto })
    }
    $scope.scales = [
        {
            title: "The Best",
            rate: "5",
            photo: "assets/images/best.jpg"
        },
        {
            title: "The Good",
            rate: "4",
            photo: "assets/images/good.jpg"
        },
        {
            title: "The Ok",
            rate: "3",
            photo: "assets/images/ok.jpg"
        },
        {
            title: "The Poor",
            rate: "2",
            photo: "assets/images/poor.jpg"
        },
        {
            title: "The Bad",
            rate: "1",
            photo: "assets/images/bad.jpg"
        },
    ]
})