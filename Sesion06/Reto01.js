const Vec = function(x, y) {
    // Code goes here..
    this.x = x;
    this.y = y;
    
    Vec.prototype.plus= function(otherVec){
        return new Vec(this.x + otherVec.x, this.y + otherVec.y)
    }
  
  Vec.prototype.minus= function(otherVec){
    return new Vec(this.x - otherVec.x, this.y - otherVec.y)
   }
   Vec.prototype.length= function (){
    return Math.sqrt((this.x*this.x) + (this.y*this.y) )
   }


}
  




  const vec1 = new Vec(1, 2);
  const vec2 = new Vec(2, 3);
  


  console.log(vec1.plus(vec2)); // Vec { x: 3, y: 5 }
  console.log(vec1.minus(vec2)); // Vec { x: -1, y: -1 }
  console.log(vec1.length()); // 2.23606797749979