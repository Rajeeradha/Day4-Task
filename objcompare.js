let obj1={name: "person1", age: 5};
let obj2={age: 5, name: "person1"};
function isEqual(obj1, obj2){
    let k = Object.keys(obj1);
    let k1 = Object.keys(obj2);
    if( k.length != k1.length){
        return false;
    }
    for(let r of k){
        if(obj1[r] != obj2[r])
        {
            return false;
        }
    }
    return true;
    }
    console.log(isEqual(obj1,obj2));