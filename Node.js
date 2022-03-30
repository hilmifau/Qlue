function getshape(num) {

  if (num % 3 == 0 && num % 2 === 0) {
    console.log("STAR CIRCLE");
  } else if( num % 2 === 0) {
    console.log("STAR");
  } else if (num % 3 === 0) {
    console.log("CIRCLE");
  } else {
    console.log(null);
  }

}

getshape(5)
getshape(6)
getshape(4)
getshape(9)