console.log("connected!")


function Verifi()
		{
		
			var Username = document.getElementById('user').value;
			var Email = document.getElementById('Email').value;
			var Pass=document.getElementById('Pass').value;
			var conpass=document.getElementById('conpass').value;
			var mobileno=document.getElementById('mobileno').value;

			if(Username.length <= 0)
			{
				document.getElementById('user').innerHTML="**Please fill the Username";
				return false;
			}
			if((Username.lenght<=2)||(Username.lenght>20)){
				document.getElementById('user').innerHTML="**User lenght must be between 2 and 20";
				return false;
			}
			if(!isNaN(Username)){
				document.getElementById('user').innerHTML="**Only Charcters allowed";
				return false;
			}
			if(Email == "")
			{
				document.getElementById('Email').innerHTML="**Please fill the Email";
				return false;
			}
			if (Email.indexOf('@'<=0)) {
				document.getElementById('Email').innerHTML="**@ is at Invalid position";
				return false;

			}
			if(Email.charAt(Email.lenght-4)!='.'&&Email.charAt(Email.lenght-3!='.'))
			{	
				document.getElementById('Email').innerHTML="**Invalid . position";
			}

			if(Pass=="")
			{
				document.getElementById('Pass').innerHTML="**Please fill the Password";
				return false;
			}
			if((Pass.lenght<=6)||(Pass.lenght>20)){
				document.getElementById('Pass').innerHTML="**Password lenght must be between 6 and 20";
				return false;
			}
			if(Pass!=conpass){
				document.getElementById('Pass').innerHTML="**Password are not matching";
				return false;
			}

			if(conpass=="")
			{
				document.getElementById('conpass').innerHTML="**Please fill the Confirm Password";
				return false;
			}

			if(mobileno=="") 
			{
				document.getElementById('mobileno').innerHTML="**Please fill the Mobile Number";
				return false;
			}
			if(isNaN(mobileno)) {
				document.getElementById('mobileno').innerHTML="**use only number not Charcters";
				return false;

			}
			if(mobileno.lenght!=10){
				document.getElementById('mobileno').innerHTML="**User must write 10 digit number";
				return false;

			}
		}


	