const Group = function() {
    this.lista=[]   
    // Code goes here...
}
    Group.prototype.has=function(newItem){
        return this.lista.includes(newItem) 
    }

    Group.prototype.add = function(item){
        if (!this.has(item)){
            this.lista.push(item)
        }else{
            console.log('Elemento ya existe')
        }
    }

    Group.from= function(list){
        let group =new Group()
        group.lista=list
        return group
    }
  

  
  const group = Group.from([1, 2, 3, 4, 5]);
  console.log(group); // Group { members: [ 1, 2, 3, 4, 5 ] }
  console.log(group.has(5)); // true
  console.log(group.has(10)); // false
  
  group.add(3);
  console.log(group.has(10)); // true