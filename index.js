/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const initialVelocity = 10000; // velocity (km/h)
const acceleration = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const intialDistance = 0; // distance (km)
const initialFuel = 5000; // remaining fuel (kg)
const fuelBurnRate = 0.5; // fuel burn rate (kg/s)

// Pick up an error with how the function below is called and make it robust to such errors
const calcNewVel = (acceleration, initialVelocity, time) => {
  // Input validation
  if (
    typeof acceleration !== "number" ||
    typeof initialVelocity !== "number" ||
    typeof time !== "number"
  ) {
    throw new TypeError("All inputs must be a number!");
  }

  // Checking the range of the time
  if (time < 0) {
    throw new RangeError("Time can never be a negative number!");
  }

  const finalVelocity = (initialVelocity * 1000) / 3600 + acceleration * time;
  return (finalVelocity * 3600) / 1000;
};

const newVelocity = calcNewVel(acceleration, initialVelocity, time); //calculates new velocity based on acceleration
const newDistance = intialDistance + (initialVelocity * time) / 3600; //calcultes new distance
const remainingFuel = initialFuel - fuelBurnRate * time; //calculates remaining fuel

console.log(`Corrected New Velocity: ${newVelocity} km/h`);
console.log(`Corrected New Distance: ${newDistance} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);
