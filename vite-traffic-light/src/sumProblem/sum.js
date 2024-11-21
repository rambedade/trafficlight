function sum(num) {
    let total = num;
  
    function inner(next) {
      if (next !== undefined) {
        total += next;
        return inner;
      } else {
        return total;
      }
    }
  
    return inner;
  }
  
  console.log(sum(1)(2)(3)(4)(5)()); // 15
  console.log(sum(3)(7)()); // 10
  