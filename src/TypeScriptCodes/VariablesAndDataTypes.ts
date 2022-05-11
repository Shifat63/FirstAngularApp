function printMessageLet()
{
  //Scope of let is in the codeblocks it is used
  for(let i=0; i<5; i++)
  {
    console.log("Value of i="+i);
  }
  //This gives compilation error as i is not accessible outside the loop
  //console.log("Finally value of i="+i);
}

function printMessageVar()
{
  //Scope of var is till the immediate up level. In this case the function
  for(var i=0; i<5; i++)
  {
    console.log("Value of i="+i);
  }
  console.log("Finally value of i="+i);
}

printMessageLet();

let a: number;
let b: boolean;
let c: string;
let d: any;
//Initializing array is optional
let e: number[];
let f: any[] = [1, true, 'any text']

enum colors {Red, Green, Blue};
let backgroud = colors.Red;
