 document.getElemantById("message1").innerHTML = "Hello World";
 
 let a = 5;
  var b = "hello";
  const x = 10;

  console.log(b);

  add(5,10);

  // function
  function add(aa, bb) {
    let cc = aa + bb;
    console.log(cc);
    return cc;
  }

  //array
  let result = add(5,10);
  const car = [];
  car[0] = "Toyota";
  car[1] = "Honda";
  const fruit = new Array("Apple","Banana","Cherry");

  console.log(car[1]);

  let colors = [[1,2,3], "green", "blue"];
  console.log(colors[0][2]);

  //array method
  fruit.push("Orange");
  console.log(fruit);

  arr.map((item)=> {
    console.log(item);
  });

  //object
  let person = {
    firtName:"John",
    lastname:"Doe",
    aeg: 50,
    child: ("Ann", "Billy"),
    fullname : function(){
        return this.firstName + " " + this.lastName;
    }
  };

  person.address = {
    street: "123 Main St",
    city: "New York",
  };
  console.log(person.fullname());

  // spread operator
  const arrCombine = [...car, ...fruit];
  const arrCombine2 = [car, fruit];
  console.log(arrCombine);
  console.log(arrCombine2);

  let add2 = function (aa, bb) {
    let cc = aa + bb;
    console.log(cc);
  };
  let add3 = (aa, bb) => {
    let cc = aa + bb;
    console.log(cc);
  };
