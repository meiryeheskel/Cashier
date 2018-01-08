

let cashier1: cashier = new cashier();
cashier1.SetName("Bob");
cashier1.SetCinemaName("yesPlanet");
cashier1.SetStartShift(22);
cashier1.SetDuration(5);

let cashier2: cashier = new cashier();
cashier2.SetName("Alice");
cashier2.SetCinemaName("CinemaCity");
cashier2.SetStartShift(3);
cashier2.SetDuration(10);


cashier1.PrintInfo();
cashier2.PrintInfo();

cashier1.Cashier_Working_Or_Not(0);
cashier1.Cashier_Working_Or_Not(10);
cashier2.Cashier_Working_Or_Not(13);
cashier2.Cashier_Working_Or_Not(0);
cashier2.Cashier_Working_Or_Not(25);


