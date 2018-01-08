class cashier {
    private _name: string;
    private _cinemaName: string = "";
    private _startShift: number;
    private _duration: number=0;

    SetName(name:string): void {
        this._name = name;
    }

    SetCinemaName(name:string): void {
        if (name == "yesPlanet" || name == "CinemaCity") this._cinemaName = name;
        else document.write(`Wrong Cinema name: ${name}<br/>`);
    }

    SetStartShift(hour:number): void {
        if (hour >= 0 && hour <= 24) this._startShift = hour;
        else document.write(`Wrong hour: ${hour}<br/>`);
    }

    SetDuration(duration:number): void {
        if (duration >= 5 && duration <= 10) this._duration = duration;

    }
    
    PrintInfo(): void {
            document.write(`Cashier name: ${this["_name"]}<br/>`);
            document.write(`Cinema name: ${this["_cinemaName"]}<br/>`);
            document.write(`Cashier start shift: ${this["_startShift"]}<br/>`);
            document.write(`Shift duration: ${this["_duration"]}<br/><br/>`);

    }

    Cashier_Working_Or_Not(hour: number):void {
        if (hour >= 0 && hour <= 24) {
            let endShift: number = this._startShift + this._duration;
            if ((endShift <= 24 && hour >= this._startShift && hour <= endShift) ||
                (endShift > 24 && (hour > this._startShift || hour <= endShift % 24)))
                document.write(`The Cashier is ON shift from ${this._startShift} to ${endShift % 24}<br/>`);
            else document.write(`The cashier is NOT on shift, shift will begin at ${this._startShift} to ${endShift % 24}<br/>`);
        }
        else document.write(`Error: ${hour} is not in the range of 0-24`);
        
        

               

    }

}