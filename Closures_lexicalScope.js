//Understanding closures
    function X() {
        var a = 10;
            function Y(){
                console.log(a);
            }
        return Y;
    }

    var z = function Y(){
        console.log(a);
    };
    console.log(z)
    z();


