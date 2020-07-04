


 function calcNumbers(result){
	 if(result == 'sqr'){
		form.displayResult.value= form.displayResult.value * form.displayResult.value ;
	 }else{
        form.displayResult.value=form.displayResult.value+result;
	 }
        
    }
 function cleardata(){
	location.reload();
			
	}



$(document).ready(function(){   
$('#validate').click(function(e){
  e.preventDefault();
  var name=document.getElementById("Name").value;
		   var email=document.getElementById("mailId").value;
		   var phone=document.getElementById("Phonenumber").value;
		    var phoneno = /^\d{10}$/;
		   
		   if(!name){
			   
			   window.alert('Name Can not be empty');
			   //event.preventDefault();
		   }else if(/^\d+$/.test(name[0])){   
			   window.alert('Name should not start with numeric value');
		   }else if(!email){
			     window.alert('Email can not be empty');
		   
		   }else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)))
			{
				window.alert('Inavlid email Id');
			}else if(!phone){
				window.alert('phone number can not be empty.');
			}else if(!phone.match(phoneno)){
				window.alert('Invalid phone number');
			}else{
				window.alert('Thank you, we have saved your information.');
				window.reload();
			}
		   
});
});
		   
function polindromecheck()
         {
            var str = document.getElementById("polindrome").value;
            var strre = /[\W_]/g;
            var lowRegstr =	str.toLowerCase().replace(strre,'');
			strnglen = lowRegstr.length;
			var result,count=0;
			for (var i = 0; i < strnglen/2; i++){
			   if (lowRegstr[i] !== lowRegstr[strnglen-1-i]){
			   count+=1;
			}
			}
			if(count > 0){
				window.alert("False");
			}else{
				window.alert("True");
			}
		 }
		 
		 
		 

		function anagramcheck()
         {
			  var string1 = document.getElementById("string1").value;
			   var string2 = document.getElementById("string2").value;
            var strre = /[\W_]/g;
            var lowstring1 =string1.toLowerCase().replace(strre,'');
			var lowstring2 =string2.toLowerCase().replace(strre,'');
			lowstring1=lowstring1.split('').sort().join('');
			lowstring2=lowstring2.split('').sort().join('');
			
			   if (lowstring1  === lowstring2){
				window.alert("anagram");
			}else{
				window.alert("not anagram");
			}
		 } 
		 
		 function survivalcheck(){
			var inp1 =  Number(document.getElementById("input1").value);
			var inp2 =  Number(document.getElementById("input2").value);
			var person = {'0':"Human", '1':"Cacroach", '2':'NuclearBomb'};
			var inptmod1=inp1%3;
			var inptmod2=inp2%3;
			if(inptmod1 === inptmod2){
				window.alert('Tie');
			}else if(person[inptmod1] == 'Human'){
				if(person[inptmod2]== 'Cacroach'){
					window.alert('Human survives');
				}else{
					window.alert('Human dies');
				}
			}else if(person[inptmod1] == 'Cacroach'){
				if(person[inptmod2]== 'Human'){
					window.alert('Human survives');
				}else{
					window.alert('Cacroach survives');
				}
			}else if(person[inptmod1] == 'NuclearBomb'){
				if(person[inptmod2]== 'Human'){
					window.alert('Human dies');
				}
				else{
					window.alert('Cacroach survives');
				}
			}
			location.reload();
			}
		 
		 
