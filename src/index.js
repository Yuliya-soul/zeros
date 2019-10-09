module.exports = function zeros(expression) {
  // your solution
  function zeros(n) {
    var counter = 0;
    for (var i = 5; n/i >= 1; i *= 5)
      counter += Math.floor(n/i);
    return counter;
  }
 
 var str=expression;
  var inp=str.split('*');
  var count=0;var count1=0;  var summ=0;var count2=0;
  var summ1=0;var a=1;var b=1;
  for (var i = 0; i < inp.length; i++) {
    var cur = inp[i];
     num = cur.replace(/\!/g, '');
     num=parseInt(num);
     
      if ( cur.indexOf('!!') == -1 ){
      count+=zeros(num);
     
       }
      else {
       
       if(num%2==0){
    
         count1+=Math.floor(zeros(num)/2);
    
        
       
        }
     else{
      
      var c=(num-1)/2;
     var a=Math.floor(zeros(num));
     
     var b= Math.floor(zeros(c));
   
      a=parseInt(a);
     
      b=parseInt(b);
     
      count2+=a-b;
   
      }
   
     
    
  
    }
  
  }
  
  var summ=count+count1+count2;
  console.log (summ);
  



  return summ;
}

