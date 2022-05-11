interface Point {
  x: number,
  y: number
}

let printPoint = (point: Point) =>{
  console.log("x="+point.x+" y="+point.y);
}

printPoint({x:5,y:6});
