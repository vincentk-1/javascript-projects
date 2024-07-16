// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test("checks that the value of organization is 'nonprofit'", function() {
    let result = launchcode;
    expect(result.organization).toBe("nonprofit");
  });

  test("checks that the value of executiveDirector is 'Jeff'", function() {
    let result = launchcode;
    expect(result.executiveDirector).toBe("Jeff");
  });

  test("checks that the value of executiveDirector is 100 ", function() {
    let result = launchcode;
    expect(result.percentageCoolEmployees).toBe(100);
  });

  test("checks that the first array value of programsOffered is 'Web Development'", function() {
    let result = launchcode;
    expect(result.programsOffered[0]).toBe("Web Development");
  });

  test("checks that the second array value of programsOffered is 'Data Analysis'", function() {
    let result = launchcode;
    expect(result.programsOffered[1]).toBe("Data Analysis");
  });

  test("checks that the third array value of programsOffered is 'Data Analysis'", function() {
    let result = launchcode;
    expect(result.programsOffered[2]).toBe("Liftoff");
  });

  test("checks that the length of array programsOffered is 3", function() {
    let result = launchcode;
    expect(result.programsOffered.length).toBe(3);
  });

  test("Returns 'Launch!' When passed a number that is ONLY divisible by 2 ", function() {
    let result = launchcode;
    expect(result.launchOutput(2)).toBe('Launch!');
  });

  test("Returns 'Code!' When passed a number that is ONLY divisible by 3 ", function() {
    let result = launchcode;
    expect(result.launchOutput(3)).toBe('Code!');
  });

  test("Returns 'Rocks!' When passed a number that is ONLY divisible by 5 ", function() {
    let result = launchcode;
    expect(result.launchOutput(5)).toBe('Rocks!');
  });

  test("Returns 'LaunchCode Rocks!' When passed a number that is divisible by 2, 3, AND 5 ", function() {
    let result = launchcode;
    expect(result.launchOutput(30)).toBe('LaunchCode Rocks!');
  });

  test("Returns 'LaunchCode!' When passed a number that is divisible by 2 AND 3", function() {
    let result = launchcode;
    expect(result.launchOutput(6)).toBe('LaunchCode!');
  });

  test("Returns 'Code Rocks!' When passed a number that is divisible by 3 AND 5", function() {
    let result = launchcode;
    expect(result.launchOutput(15)).toBe('Code Rocks!');
  });

  test("Returns 'Launch Rocks! (CRASH!!!!)' When passed a number that is divisible by 2 AND 5", function() {
    let result = launchcode;
    expect(result.launchOutput(10)).toBe('Launch Rocks! (CRASH!!!!)');
  });

  test("Returns 'Rutabagas! That doesn't work.' When passed a number that is NOT divisible by 2, 3, or 5", function() {
    let result = launchcode;
    expect(result.launchOutput(7)).toBe("'Rutabagas! That doesn't work.'");
  });

});