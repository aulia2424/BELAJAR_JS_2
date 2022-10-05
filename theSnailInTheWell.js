function main() {
  var depth = parseInt(readLine(), 10);
  //your code goes here
  var x = 0; //milesDone
  var y = 0; //dayCount
  for (i = 0; i < depth; i++) {
    if (x < depth) {
      x += 7;
      if (depth > x) {
        x -= 2;
      }
      y++;
    } else {
      console.log(y);
      break;
    }
  }
}
