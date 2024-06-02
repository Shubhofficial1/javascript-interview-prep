// Case 1 :
function test1() {
  let a = "hello";
  {
    let a = "hi";
    console.log(a);
  }
  console.log(a);
}

test1();

// OP : hi
//      hello

// here above a is being shadowed by blocked a

// Case 2 :

function test2() {
  var b = "hello";

  {
    let b = "hi";
    console.log(b);
  }
  console.log(b);
}

test2();

// OP : hi
//      hello

// Case 3 :

function test3() {
  var c = "hello";
  {
    var c = "hi";
    console.log(c);
  }
  console.log(c);
}

test3();

// OP : hi
//      hi

// case 4:  (illegal shadowing)  :

// function test4() {
//   let d = "hello";

//   {
//     var d = "hi";
//     console.log(d);
//   }
//   console.log(d);
// }

// test4();
