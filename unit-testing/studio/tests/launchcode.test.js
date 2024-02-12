// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){
  test("value of organization should be nonprofit", function() {
    expect(launchcode.organization).toBe("nonprofit");
 });
  test("value of executiveDirector should be Jeff", function() {
    expect(launchcode.executiveDirector).toBe("Jeff");
 });
  test("value of percentageCoolEmployees should be 100", function() {
    expect(launchcode.percentageCoolEmployees).toBe(100);
 });
  test("value of percentageCoolEmployees should be 100", function() {
    expect(launchcode.programsOffered[0]).toBe("Web Development");
    expect(launchcode.programsOffered[1]).toBe("Data Analysis");
    expect(launchcode.programsOffered[2]).toBe("Liftoff");
    expect(launchcode.programsOffered.length).toBe(3);
 });
 test("value of percentageCoolEmployees should be 100", function() {
  expect(launchcode.launchOutput(1)).toBe("Rutabagas! That doesn't work.");
});
  
});