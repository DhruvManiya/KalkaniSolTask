const pettern = (n) => {
  if (n > 0) {

    let finalAns = [];
    let subAns = [];

    for (let i = 0; i < n; i++) {
      let tempArr = [];
      let ASCII = 65;

      for (let j = 1; j <= 2 * n - 1; j++) {

        if (j < n - i || j > n + i) {
          tempArr.push("   ");
        } else {
          if (j > n - 1 - i && j < n + 1)
            tempArr.push(" " + String(2 * (j + i + 1 - n) - 1) + " ");
          else {
            tempArr.push(" " + String.fromCharCode(ASCII) + " ");
            ASCII++;
          }
        }
      }

      ASCII = 65;
      finalAns.push(tempArr.join(""));
      subAns.push(tempArr.join(""));
    }
    
    subAns.reverse()
    subAns.forEach((el,i) => {
        if(i !== 0) finalAns.push(el)
    })

    return finalAns;

  } else return "Enter valid number";
};

console.log(pettern(7));
console.log(pettern(6));
console.log(pettern(5));
console.log(pettern(4));
console.log(pettern(3));
