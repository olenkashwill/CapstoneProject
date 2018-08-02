  $(document).ready(function() {
	  
	  
	  $("#buttons").click(function() {
		var dog_score = 0;
		var cat_score = 0;
		var minihorse_score = 0;
		var ferret_score = 0;
		var parrot_score = 0;
		var boa_score = 0;
		var pig_score = 0;
		var monkey_score = 0;
		
		
		var hearing_value=$('input[id="hearing"]').is(':checked');
		var visual_value=$('input[id="value"]').is(':checked');
		var anxiety_value=$('input[id="anxiety"]').is(':checked');
		var depression_value=$('input[id="depression"]').is(':checked');
		var ptsd_value=$('input[id="ptsd"]').is(':checked');
		var legs_value=$('input[id="legs"]').is(':checked');
		var arms_value=$('input[id="arms"]').is(':checked');
		var seizures_value=$('input[id="seizures"]').is(':checked');	
		var forgetful_value=$('input[id="forgetful"]').is(':checked');
		var bipolar_value=$('input[id="bipolar"]').is(':checked');
		var ocd_value=$('input[id="ocd"]').is(':checked');
		var skills_value=$('input[id="skills"]').is(':checked');
		  
		if (hearing_value==1) {
			dog_score+=1;
			pig_score+=1;
		}
		
		if (visual_value==1) {
			dog_score+=1;
			pig_score+=1;
		}		
		
		if (anxiety_value==1) {
			dog_score+=1;
			cat_score+=1;
			ferret_score=1;
			parrot_score=1;
		}
		
		if (depression_value==1) {
			dog_score+=1;
			cat_score+=1;
			ferret_score+=1;
		}
				
		if (ptsd_value==1) {
			dog_score+=1;
			cat_score+=1;
		}		
		
		if (legs_value==1) {
			minihorse_score+=1;
			monkey_score+=1;
		}		
		
		if (arms_value==1) {
			monkey_score+=2;
		}
				
		if (seizures_value==1) {
			ferret_score+=1;
			boa_score+=1;
		}
		
		if (forgetful_value==1) {
			ferret_score+=1;
			boa_score+=1;
			parrot_score+=1;
		}
		
		if (bipolar_value==1) {
			boa_score+=1;
		}
		
		if (ocd_value==1) {
			boa_score+=1;
		}
		
		if (skills_value==1) {
			monkey_score+=1;
		}
		
		var score_arr = [dog_score, cat_score, minihorse_score, ferret_score, parrot_score, boa_score, pig_score, monkey_score];
		var a=Math.max(dog_score, cat_score, minihorse_score, ferret_score, parrot_score, boa_score, pig_score, monkey_score); 
		
		console.log(a);
		var animal = [];
		for (var i=0; i<score_arr.length; i++) {
			if (score_arr[i] == a) {
				
				if (i == 0) {
					animal.push("Dog");
				}
				else if (i == 1) {
					animal.push("Cat");
				}
				else if (i ==2) {
					animal.push("Miniature Horse");
				}
				else if (i ==3) {
					animal.push("Ferret");
				}
				else if (i ==4) {
					animal.push("Parrot");
				}
				else if (i ==5) {
					animal.push("Boa Constrictor");
				}
				else if (i ==6) {
					animal.push("Potbelly Pig");
				}
				else if (i ==7) {
					animal.push("Capuchin Monkey");
				}				
			}
		}		
		
		
		var result = ""; // our animal response that is displayed
		result = "Your buddy is a ";
		for (var j=0; j<animal.length - 1; j++) {
			result += animal[j];
			result += ", ";
		}
		if (animal.length== 1){
			result += animal[animal.length - 1];
		}
		else {
			result += "or ";
			result += animal[animal.length - 1];
		}
		
		
		
		var url = "https://api.petfinder.com/pet.find?format=xml&key=b1773aef3c7bb7e15eb73e500fb5919c&animal=bird&location=60657";
		
		  $.ajax({
                url: url,
                method: 'GET',
				dataType: "jsonp",
                headers: {
                    'Access-Control-Allow-Origin': '*'
                },
                success: function(response) {
                    console.log(response);
                }
            });
		
		
		
		
				
		console.log(result)
		//$("#animal").html("Your buddy is a " + animal + ".");
		$("#animal").html(result);

	  });
	  
	 /*
	 makeCorsRequest(url);
	  
	// Create the XHR object.
	function createCORSRequest(method, url) {
	  var xhr = new XMLHttpRequest();
	  if ("withCredentials" in xhr) {
		// XHR for Chrome/Firefox/Opera/Safari.
		xhr.open(method, url, true);
	  } else if (typeof XDomainRequest != "undefined") {
		// XDomainRequest for IE.
		xhr = new XDomainRequest();
		xhr.open(method, url);
	  } else {
		// CORS not supported.
		xhr = null;
	  }
	  return xhr;
	}

	// Make the actual CORS request.
	function makeCorsRequest(url) {
	  // This is a sample server that supports CORS.

	  var xhr = createCORSRequest('GET', url);
	  if (!xhr) {
		alert('CORS not supported');
		return;
	  }

	  // Response handlers.
	  xhr.onload = function() {
		var text = xhr.responseText;
		//var title = getTitle(text);
		alert('Response from CORS request to ' + url);
	  };

	  xhr.onerror = function() {
		alert('Woops, there was an error making the request.');
	  };

	  xhr.send();
	}
	*/
	  
  });