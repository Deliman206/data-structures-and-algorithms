export default function leftJoinHM(hm1, hm2) {  
  hm1.forEach((value, key) => {
    const currValue = hm2.get(key);
    if (currValue) {
      for (let i = 0; i < currValue.length; i++) {
        value.push(currValue[i]);
      }
    } else {
      value.push(null);
    }
  });
  return hm1;
}

