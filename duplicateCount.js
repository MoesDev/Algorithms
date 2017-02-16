function duplicateCount(text){
  var t = text.toLowerCase();
  var dups= [];
  var exist = false;
  for(var i = 0; i < t.length; i++){
    for(var x= i+1; x < t.length; x++){
      if(t[i] == t[x]){
        for(var z=0; z < dups.length; z++){
          if(dups.length<1){
            break;
          }
          if(dups[z] == t[i]){
            exist = true;
            break;
          }
        }
        if(exist == false){
          dups.push(t[i]);
        }
        else{
          exist = false;
        }
      }
    }
  }
  return dups.length;
}