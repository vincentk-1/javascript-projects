const input = require('readline-sync');
let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";
let cabinetInquiry;
//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let foodArr = food.split(',').sort();  
let equipmentArr = equipment.split(',').sort();
let petsArr = pets.split(',').sort();
let sleepAidsArr = sleepAids.split(',').sort();
//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [foodArr, equipmentArr, petsArr, sleepAidsArr];
console.log(cargoHold);
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
cabinetInquiry = input.question("Select a cabinet (0 - 3) in the cargoHold :");
//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if (cabinetInquiry>=0 && cabinetInquiry<=3){
    console.log(`\nCabinet ${cabinetInquiry} Contains: ${cargoHold[cabinetInquiry]}`);
}
else{
    console.log(`There is no Cabinet ${cabinetInquiry}`)
}
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
cabinetInquiry = input.question("\nItem Lookup\nSelect a cabinet (0 - 3) in the cargoHold :");
if (cabinetInquiry>=0 && cabinetInquiry<=3){
    let item = input.question("\nEnter an item to lookup :");
    if (cargoHold[cabinetInquiry].includes(item) ){                            // Check for Item
         console.log(`\nCabinet ${cabinetInquiry} DOES contain ${item}.`)
        }
    else{
        console.log(`\nCabinet ${cabinetInquiry} DOES not contain ${item}.`)
        } 
}
else{
    console.log(`\nThere is no Cabinet ${cabinetInquiry}`)              // Error print for unavailable cabinet
}