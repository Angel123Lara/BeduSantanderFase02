const Triangle = function(a, b, c) {
    this.a = a;
    this.b=b;
    this.c=c;
  }

  Triangle.prototype.getPerimeter =function(){ 
    return this.a + this.b + this.c;
  }
  
  const triangle = new Triangle(1, 2, 3);
  
  console.log(triangle); // Triangle { a: 1, b: 2, c: 3 }
  console.log(triangle.getPerimeter()); // 6