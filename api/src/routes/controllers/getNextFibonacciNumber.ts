const getNextFibonacciNumber = async (index: number) => {
  
  function fibonacci(num: number): number {
    if (num <= 1) return 1;
  
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
  return fibonacci(index)
};
module.exports = {
  getNextFibonacciNumber,
};
