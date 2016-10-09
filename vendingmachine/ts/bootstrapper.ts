/// <reference path="vendingMachine.ts" />

var machine = new VendingMachine();
machine.size = VendingMachineSize.medium;
//Because of the type definition, ko will be found
ko.applyBindings(machine);