export const nilaiMax = (max) => {
  return Math.max.apply(null, max);
};

export const nilaiMin = (min) => {
  return Math.min.apply(null, min);
};

export const sorting = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 1; j <= i; j++) {
      if (arr[j - 1] > arr[j]) {
        var temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

export const siswaLulus = (arr) => {
  let counter = 0;

  arr.forEach((element) => {
    if (element >= 60) {
      counter++;
    }
  });
  return counter;
};

export const siswaTidakLulus = (arr) => {
  let counter = 0;

  arr.forEach((element) => {
    if (element < 60) {
      counter++;
    }
  });
  return counter;
};

export const cariNilai = (arr) => {
  const nilai = [];
  arr.forEach((element) => {
    if (element === 100) {
      nilai.push(element);
    } else if (element === 90) {
      nilai.push(element);
    }
  });
  return nilai;
};

export const mean = (arr) => {
  let total = 0;
  let len = arr.length;
  for (const elements of arr) {
    total = total + elements;
  }
  return total / len;
};
