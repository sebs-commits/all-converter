import React, { useState, useEffect } from "react";

const UnitConverter = () => {
  const [inputValue, setInputValue] = useState("1");
  const [fromUnit, setFromUnit] = useState("meters");
  const [toUnit, setToUnit] = useState("feet");
  const [result, setResult] = useState(0);

  const conversionFactors = {
    meters: {
      feet: 3.28084,
      yards: 1.09361,
      miles: 0.000621371,
      kilometers: 0.001,
      centimeters: 100,
    },
    feet: {
      meters: 0.3048,
      yards: 0.333333,
      miles: 0.000189394,
      kilometers: 0.0003048,
      centimeters: 30.48,
    },
    yards: {
      meters: 0.9144,
      feet: 3,
      miles: 0.000568182,
      kilometers: 0.0009144,
      centimeters: 91.44,
    },
    miles: {
      meters: 1609.34,
      feet: 5280,
      yards: 1760,
      kilometers: 1.60934,
      centimeters: 160934,
    },
    kilometers: {
      meters: 1000,
      feet: 3280.84,
      yards: 1093.61,
      miles: 0.621371,
      centimeters: 100000,
    },
    centimeters: {
      meters: 0.01,
      feet: 0.0328084,
      yards: 0.0109361,
      miles: 0.00000621371,
      kilometers: 0.00001,
    },
  };

  useEffect(() => {
    const inputValueFloat = parseFloat(inputValue);

    if (!isNaN(inputValueFloat)) {
      const convertedValue =
        inputValueFloat * conversionFactors[fromUnit][toUnit];
      setResult(convertedValue);
    } else {
      setResult(0);
    }
  }, [inputValue, fromUnit, toUnit]);

  return (
    <div>
      <h1>Unit Converter</h1>
      <div>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
          <option value="meters">Meters</option>
          <option value="feet">Feet</option>
          <option value="yards">Yards</option>
          <option value="kilometers">Kilometers</option>
          <option value="centimeters">Centimeters</option>
        </select>
        to
        <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
          <option value="meters">Meters</option>
          <option value="feet">Feet</option>
          <option value="yards">Yards</option>
          <option value="kilometers">Kilometers</option>
        </select>
      </div>
      <div>
        Result: {result.toFixed(2)} {toUnit}
      </div>
    </div>
  );
};

export default UnitConverter;
