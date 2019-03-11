//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    donatePrompt;

//Navigation Vars
var sideBar = document.getElementById("ConsoleDisplay");

//donorVars
var donorAdd = document.getElementById("SideNav");
var donorH = document.createElement ('h3');
var genDonorMsg = document.createTextNode("Thank you for your very generous donation!");
var normDonorMsg = document.createTextNode("Thank you for your donation of $45");



document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
	donation = window.prompt('How much would you like to donate?');
	if (donation < 100){
		donorH.appendChild(normDonorMsg);
		donorAdd.appendChild(donorH);
	}
	else{
		donorH.appendChild(genDonorMsg);
		donorAdd.appendChild(donorH);
	}
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  sideBar.innerHTML =('This speech was written by ' + speechesArray[0].author + ' in ' + speechesArray[0].year + '. ');

  if(speechesArray[0].yearIsBCE === true){
    sideBar.innerHTML += ('This speech took place before the common era.');
  }else{
    sideBar.innerHTML += ('This speech took place during the common era.');
  }

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[0].year === oldest){
    sideBar.innerHTML += ('This is the oldest speech on the page.');
  }
  if(speechesArray[0].year === newest){
    sideBar.innerHTML += ('This is the most recent speech on the page.');
  }
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
    sideBar.innerHTML =('This speech was written by ' + speechesArray[1].author + ' in ' + speechesArray[1].year + '. ');

    if(speechesArray[1].yearIsBCE === true){
      sideBar.innerHTML += ('This speech took place before the common era.');
    }else{
      sideBar.innerHTML += ('This speech took place during the common era.');
    }

    var oldest = speechesArray[1].year,
        newest = speechesArray[1].year;

    for(var i = 0; i < speechesArray.length; i++){
      if(speechesArray[i].year < oldest){
        oldest = speechesArray[i].year;
      }
      if(speechesArray[i].year > newest){
        newest = speechesArray[i].year;
      }
    }

    if(speechesArray[1].year === oldest){
      sideBar.innerHTML += ('This is the oldest speech on the page.');
    }
    if(speechesArray[1].year === newest){
      sideBar.innerHTML += ('This is the most recent speech on the page.');
    }
  });

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
    sideBar.innerHTML =('This speech was written by ' + speechesArray[2].author + ' in ' + speechesArray[2].year + '. ');

    if(speechesArray[2].yearIsBCE === true){
      sideBar.innerHTML += ('This speech took place before the common era.');
    }else{
      sideBar.innerHTML += ('This speech took place during the common era.');
    }

    var oldest = speechesArray[2].year,
        newest = speechesArray[0].year;

    for(var i = 0; i < speechesArray.length; i++){
      if(speechesArray[i].year < oldest){
        oldest = speechesArray[i].year;
      }
      if(speechesArray[i].year > newest){
        newest = speechesArray[i].year;
      }
    }

    if(speechesArray[2].year === oldest){
      sideBar.innerHTML += ('This is the oldest speech on the page.');
    }
    if(speechesArray[2].year === newest){
      sideBar.innerHTML += ('This is the most recent speech on the page.');
    }
  });