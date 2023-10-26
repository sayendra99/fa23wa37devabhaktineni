const express = require('express');
const app = express();
const port = 3000; // Set your desired port

app.get('/computation', (req, res) => {

  const id = 7;
  const lastDigit = id % 10;

  const mathFunctions = {
    0: Math.acosh,
    1: Math.log1p,
    2: Math.tan,
    3: Math.sqrt
  };

  const x = req.query.x ? parseFloat(req.query.x) : Math.random() * 10;

  const selectedFunction = mathFunctions[lastDigit];

  if (selectedFunction) {
    const result = selectedFunction(x);
    const response = `${selectedFunction.name} applied to ${x} is ${result.toFixed(2)}`;
    res.json({ result: response });
  } else {
    res.status(400).json({ error: "Invalid last digit, no corresponding math operation." });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
