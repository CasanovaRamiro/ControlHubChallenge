import { Router } from "express";
const router = Router();
const { getNextFibonacciNumber } = require("./controllers/getNextFibonacciNumber");

router.get("/:index", async (req, res) => {
  const {index} = req.params
  try {
    const nextFibonacci = await getNextFibonacciNumber(index)
    console.log(nextFibonacci)
    res.send( {FibonacciNumber:nextFibonacci});
  } catch (error) {
    res.sendStatus(404).send(`Error ${res.statusCode} ${error}`);
  }
});

module.exports = router;
