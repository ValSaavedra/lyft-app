$(document).ready(function() {
	
	document.getElementById("next").addEventListener("click",function(){
	
	function name(){
		var name = $("#input-name").val();

		if(!(/^[a-z][a-z]*/.test(name)) || (name == "")){
  		alert("Please enter a valid Name");
		}
	}
	name();
	function email(){
		var email = $("#input-email").val();
		if(!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email))){
  		alert("Please enter a valid Email");
		}
	}
	email();
	function checkbox(){
		var checkbox = $("#checkbox").val();
		var seleccionado = false;
		for(var i=0; i<checkbox.length; i++) {    
		  if(checkbox[i].checked) {
		    seleccionado = true;
		    break;
		  }
		}
		 
		if(seleccionado) {
		  alert("Please accept our Terms and Conditions");
		}
	}
	checkbox();
	});

	localStorage.nombre = $(".name").val();
	localStorage.email = $(".email").val();
	
		
	$(".botonMenu").click(function(event) {
		$(".nombrePersona").append(localStorage.nombre);
	});
	



});
