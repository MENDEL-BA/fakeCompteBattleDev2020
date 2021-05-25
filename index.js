var input = [];
var tabOfFakeCompteTwitter = [];
var cpt = 0;

readline_object.on("line", (value) => { //Read input values
	input.push(value);
})
//Call ContestResponse when all inputs are read
readline_object.on("close", ContestResponse); 

function ContestResponse(){
	//implement your code here using input array
	
	 for (var i=0; i < input.length; i++) {
	     if(input[i].length > 5) {
             let rev = input[i].split('').reverse().join('');
             tabOfFakeCompteTwitter.push(rev.substr(0,5));
	     }

	 }
	 
	 for (var j = 0; j < tabOfFakeCompteTwitter.length; j++) {
	   var value = tabOfFakeCompteTwitter[j];
       const digits_only = string => [...string].every(c => '0123456789'.includes(c));
       if(digits_only(value) === true) {
           cpt++;
       }
    
	 }
	console.log(cpt);

}