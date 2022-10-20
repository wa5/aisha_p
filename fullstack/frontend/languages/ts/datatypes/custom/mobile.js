var Mobile = /** @class */ (function () {
    function Mobile() {
        this.cam = 2;
        this.speekr = 3;
        this.screen = 2;
        this.button = true;
    }
    Mobile.prototype.camselfi = function (a) {
        return 'took selfi';
    };
    Mobile.prototype.camselfi1 = function () {
        return 'took selfi';
    };
    return Mobile;
}());
var sumsung = new Mobile();
console.log(sumsung);
