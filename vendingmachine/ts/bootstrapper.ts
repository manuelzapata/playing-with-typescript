/// <reference path="vendingMachine.ts" />

var machine = new VendingMachine();
//Because of the type definition, it will be found
ko.applyBindings(machine);