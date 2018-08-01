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
		
		// dog = 0, cat = 1, horse = 2
		var score_arr = [dog_score, cat_score, minihorse_score, ferret_score, parrot_score, boa_score, pig_score, monkey_score];
		var a=Math.max(dog_score, cat_score, minihorse_score, ferret_score, parrot_score, boa_score, pig_score, monkey_score); 
		
		console.log(a);
		
		for (var i=0; i<score_arr.length; i++) {
			if (score_arr[i] == a) {
				// this is your animal!!!
				if (i == 0) {
					// you animal is a dog
				}
				else if (i == 1) {
					// animal is a cat
				}
				else if (i ==2) {
					// animal is a minihorse
				}
				else if (i ==3) {
					// animal is a ferret
				}
				else if (i ==4) {
					// animal is a boa constrictor
				}
				else if (i ==5) {
					// animal is a parrot
				}
				else if (i ==6) {
					// animal is a potbelly pig
				}
				else if (i ==7) {
					// animal is a capuchin monkey
				}				
			}
		}

		
	  });
	  
  });