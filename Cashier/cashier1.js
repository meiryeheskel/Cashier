var cashier = /** @class */ (function () {
    function cashier() {
        this._cinemaName = "";
        this._duration = 0;
    }
    cashier.prototype.SetName = function (name) {
        this._name = name;
    };
    cashier.prototype.SetCinemaName = function (name) {
        if (name == "yesPlanet" || name == "CinemaCity")
            this._cinemaName = name;
        else
            document.write("Wrong Cinema name: " + name + "<br/>");
    };
    cashier.prototype.SetStartShift = function (hour) {
        if (hour >= 0 && hour <= 24)
            this._startShift = hour;
        else
            document.write("Wrong hour: " + hour + "<br/>");
    };
    cashier.prototype.SetDuration = function (duration) {
        if (duration >= 5 && duration <= 10)
            this._duration = duration;
    };
    cashier.prototype.PrintInfo = function () {
        document.write("Cashier name: " + this["_name"] + "<br/>");
        document.write("Cinema name: " + this["_cinemaName"] + "<br/>");
        document.write("Cashier start shift: " + this["_startShift"] + "<br/>");
        document.write("Shift duration: " + this["_duration"] + "<br/><br/>");
    };
    cashier.prototype.Cashier_Working_Or_Not = function (hour) {
        if (hour >= 0 && hour <= 24) {
            var endShift = this._startShift + this._duration;
            if ((endShift <= 24 && hour >= this._startShift && hour <= endShift) ||
                (endShift > 24 && (hour > this._startShift || hour <= endShift % 24)))
                document.write("The Cashier is ON shift from " + this._startShift + " to " + endShift % 24 + "<br/>");
            else
                document.write("The cashier is NOT on shift, shift will begin at " + this._startShift + " to " + endShift % 24 + "<br/>");
        }
        else
            document.write("Error: " + hour + " is not in the range of 0-24");
    };
    return cashier;
}());
//# sourceMappingURL=cashier1.js.map