var firstController = function($scope){
    $scope.cart = [{
        id:1000,
        name:'iphone5',
        quantity:3,
        price:3700
    },{
        id:2200,
        name:'iphone4',
        quantity:3,
        price:2300
    },{
        id:323,
        name:'iphone5c',
        quantity:3,
        price:3600
    },{
        id:444,
        name:'iphone5s',
        quantity:3,
        price:5300
    },{
        id:100550,
        name:'ipad',
        quantity:3,
        price:3300
    }];

    $scope.totalPrice = function(){
        var total = 0;
        angular.forEach($scope.cart,function(item){
            total  += item.quantity * item.price;
        });
        return total;
    };

    $scope.totalCount = function(){
        var total = 0;
        angular.forEach($scope.cart,function(item){
            total  += parseInt(item.quantity);
        });
        return total;
    };

    var findIndex = function(id){
        var index = -1;
        angular.forEach($scope.cart, function(item, key){
            if(item.id == id){
                index = key;
            }
        });
        return index;
    };

    $scope.remove = function(id){
       var index = findIndex(id);
       if(index != -1){
            $scope.cart.splice(index, 1);
        }
    };

    $scope.add = function(id){
        var index = findIndex(id);
        if(index != -1){
            ++$scope.cart[index].quantity;
        }
    };

    $scope.reduce = function(id){
        var index = findIndex(id);
        if(index != -1 ){
            if($scope.cart[index].quantity > 1){
                --$scope.cart[index].quantity;
            }else{
                if(confirm("是否从购物车内移除该商品？")){
                    $scope.remove(id);
                }
            }
        }
    };

    $scope.$watch('cart', function(newValue, oldValue){
        angular.forEach(newValue,function(item, key){
            if(item.quantity<1){
                if(confirm("是否从购物车内移除该商品？")){
                    $scope.remove(item.id);
                }else{
                    item.quantity = oldValue[key].quantity;
                }
            }
        })
    },true);

};