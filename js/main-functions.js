let sleeptime = 2000;


$( function() {
    var handle = $( "#numberquiz" );
    $( "#slider1" ).slider({
      value:10,
      min:1,
      max:198,
      animate:true,
      range:"min",
      create: function() {
        handle.text( $( this ).slider( "value" ) );
      },
      slide: function( event, ui ) {
        // console.log(document.getElementById("slider1").getBoundingClientRect());
        handle.text( ui.value );
        // console.log(ui);
  
    }
  });
});


$( function() {
    var handle = $( "#minutesquiz" );
    $( "#slider2" ).slider({
      value:10,
      min:0,
      max:60,
      animate:true,
      range:"min",
      create: function() {
        handle.text( $( this ).slider( "value" ) );
      },
      slide: function( event, ui ) {
        // console.log(document.getElementById("slider1").getBoundingClientRect());
        handle.text( ui.value );
        if (ui.value <1) {
          handle.text("X")
        }
        // handle.text( ui.value );
        // console.log(ui);
  
    }
  });
});


function maybeShake() {
  const cntnr = document.getElementById("quizz-holder");
  if (document.querySelector('input[name="mode"]:checked').value == "flags" & document.getElementById("blink") != undefined & document.getElementById("blink").checked & document.getElementById("small").checked) {
    cntnr.style.color = "red";
    cntnr.style.animationName = "shake";
    cntnr.style.animationDuration = "0.2s";
    cntnr.style.animationIterationCount = "3";
    // document.getElementById("quizz-holder").classList.add("shaked");
  } else {
    document.getElementById("quizz-holder").style.color = "black";
    cntnr.style.animationIterationCount = "0";
    cntnr.style.animationName = "";

  } 

  if (document.querySelector('input[name="mode"]:checked').value != "flags") {
    document.getElementById("blink").checked = false;
    document.getElementById("small").checked = false;
  }
  
  
}


function randomOrder() {
  var num_tab = [];
  for (var i = 0; i < country_data.length; i++) {
    num_tab.push(i);
    // num_tab.push(5); // saint john's

  }
  for (var i = num_tab.length-1 ; i > 0 ; i--) {
    const rdm = Math.floor(Math.random() * (i + 1));
    const tmp = num_tab[i];
    num_tab[i] = num_tab[rdm];
    num_tab[rdm] = tmp;
  }
  return num_tab;
}

// distance de Levenshtein ?
function levenshtein(a,b,res=0) {
  if (res > 2) {
    return res;
  }
  if (Math.min(a.length,b.length) == 0) {
    return Math.max(a.length,b.length);
  } else if (a.charAt(0) == b.charAt(0)) {
    return levenshtein(a.slice(1),b.slice(1),res);
  } else {
    return 1 + Math.min(levenshtein(a.slice(1),b,res+1),levenshtein(a,b.slice(1),res+1),levenshtein(a.slice(1),b.slice(1),res+1));
  }
}

function removeParentheses(str) {
  return str.replace("(","").replace(")","");
}

function removeBetweenParentheses(str) {
  return str.replace(/\(.+[^)]\)/,"");
}


function elapsedTimeMinutes(tm) {
  tm = tm/1000;
  const min = Math.floor(tm/60);
  const sec = Math.round(tm%60);
  return min+" min "+sec+" s";
}

function toggleElementsById(elements,hidden) {
  elements.forEach(function(element){
    document.getElementById(element).hidden = hidden;
  });
}

function toggleElementsByIdDisplay(elements,display) {
  elements.forEach(function(element){
    document.getElementById(element).style.display = display;
  });
}

function resetHTML(elements) {
  elements.forEach(function(element){
    document.getElementById(element).innerHTML = "";
  });
}

function getQuizInfo(input,min,max) {
  var input_number = $(`#${input}`).slider("value");
  if (input_number < 1) {
    return min;
  }
  return input_number;
  // // var input_number = document.getElementById(input).slider("option", "value");
  // if (input_number == undefined || input_number < min) {
  //   input_number = min;
  // } else if (input_number > max) {
  //   input_number = max;
  // }
  // return input_number;
}


function checkAnswer(answer,correction,threshold) {
  return (levenshtein(normalizeStr(answer),normalizeStr(correction)) <= threshold);
  // const res = levenshtein(answer.toLowerCase(),correction.toLowerCase());
  // if (res > threshold) {
  //   return false;
  // }
  // return true;
}

function isCorrect(correction,threshold) {
  // console.log(correction);
  if (correction.includes("(")) {
    const correction2 = removeBetweenParentheses(correction);
    correction = removeParentheses(correction)
    return (checkAnswer($("#answer").val(),correction,threshold) || checkAnswer($("#answer").val(),correction2,threshold));
  } else {
    return checkAnswer($("#answer").val(),correction,threshold);
  }
}

function normalizeStr(str) {
  str = str.normalize("NFC");
  str = str.toLowerCase();
  str = str.replaceAll(/[àäâã]/g,"a");
  str = str.replaceAll(/[éèëê]/g,"e");
  str = str.replaceAll(/[ïî]/g,"i");
  str = str.replaceAll(/[öôõ]/g,"o");
  str = str.replaceAll(/[ùüû]/g,"u");
  str = str.replaceAll(/ÿ/g,"y");
  str = str.replaceAll(/[\-']/g," ");
  // console.log(str);
  return str;
}

function setProgress(correct,callFromInterval) {
  const width = document.getElementById("progress").getBoundingClientRect().width-1.5;
  const height = document.getElementById("progress").getBoundingClientRect().height-1;
  if (timer == 0) {
    if (correct) {
      document.getElementById("progress").innerHTML = document.getElementById("progress").innerHTML+ "<div style=\"display: inline-block;background-color: green;width: "+width/quiz_length+`px;height: ${height}px;margin-bottom: 3px";></div>`;
    } else {
      document.getElementById("progress").innerHTML = document.getElementById("progress").innerHTML+ "<div style=\"display: inline-block;background-color: red;width: "+width/quiz_length+`px;height: ${height}px;margin-bottom: 3px";></div>`;
    }
  } else if (callFromInterval) {
    document.getElementById("progress").innerHTML = document.getElementById("progress").innerHTML+ "<div style=\"display: inline-block;background-color: green;width: "+width/(timer/1000)+`px;height: ${height}px;margin-bottom: 3px";></div>`;
  }
}

function makeFlagBlink(num) {
  $("div#quizz-holder").html("<img class=\"blink\" id=\"flag-img\" src=\""+country_data[num].imgurl+"\" alt=\""+country_data[num].filename+"\">");
}

function changeCountry(num) {
  $("div#quizz-holder").html("<span id=\"country-name\">"+country_data[num].name+"</span>");
}

function changeCapital(num) {
  $("div#quizz-holder").html("<span id=\"capital-name\">"+country_data[num].capital+"</span>");
}

function changeFlag(num) {
  $("div#quizz-holder").html("<img id=\"flag-img\" src=\""+country_data[num].imgurl+"\" alt=\""+country_data[num].filename+"\">");
  if (small) {
    document.getElementById("flag-img").classList.add("small");
  }
  if (blink) {
    $("div#quizz-holder").html("<img class=\"blink\" id=\"flag-img\" src=\""+country_data[num].imgurl+"\" alt=\""+country_data[num].filename+"\">");
    if (small) {
    document.getElementById("flag-img").classList.add("small");
    } 
    setTimeout(function(){
      document.getElementById("flag-img").classList.remove("blink");
    },300);
    setTimeout(function(){
      document.getElementById("flag-img").classList.add("blink");
    },400);
  }
}

function changeCountryFlag(num) {
  $("div#quizz-holder").html("<span id=\"country-name\">"+country_data[num].name+"<img class=\"small\" id=\"flag-img\" src=\""+country_data[num].imgurl+"\" alt=\""+country_data[num].filename+"\"></span>");
}

function changeCapitalFlag(num) {
  $("div#quizz-holder").html("<span id=\"capital-name\">"+country_data[num].capital+"<img class=\"small\" id=\"flag-img\" src=\""+country_data[num].imgurl+"\" alt=\""+country_data[num].filename+"\"></span>");
}

function changeISO(num) {
  $("div#quizz-holder").html("<span id=\"country-ISO\">"+country_data[num].ISO+"</span>");
}

function correctInput(resp,correction,country) {
  let cls;
  // let sleeptime = 2000;
  if (resp) {
    score +=1;
    cls = "correct";
    sleeptime=500;
    setProgress(resp,false);
  } else {
    cls = "incorrect";
    setProgress(resp,false);
    incorrect_log.push($("#answer").val());
    incorrect_countries.push(country);
  }
  setAnswerField(correction,cls);
  setTimeout(function(){
    if (countries.length != 0) {
      next();
      setAnswerField("","regularanswer");
      $("#answer").focus();
    } else {
      endGame();
    }
    document.getElementById("submit").disabled = false;
  },sleeptime);
}

function setAnswerField(val,cls) {
  $("div#answer-holder").html("<input type=\"text\" id=\"answer\" name=\"answer\" minlength=\"0\" maxlength=\"35\" size=\"35\" value=\""+val+"\" class=\""+cls+"\" autocomplete=\"off\">");
}


function setUpQuiz() {
  loadOptions();
  resetHTML(["progress","fieldset-mode","start-button"]);
  score = 0;
  incorrect_countries = [];
  incorrect_log = [];
  // toggleElementsById(["start-button"],true);
  toggleElementsById(["inputs","submit","progress"],false);
  toggleElementsByIdDisplay(["inputs"],"inline-flex");
  setAnswerField("","regularanswer");
  next();
  $("#answer").focus();
  elapsed_time = Date.now();
}

function startQuizTimer() {
  timer = getQuizInfo("minutesquiz",1,60)*1000*60;
  countries = randomOrder();
  setUpQuiz();
  timerFunc = setInterval(function(){
    setProgress(0,true);
    if (Date.now() - elapsed_time > timer) {
      endGame();
    }
  },1000);
}

function startQuiz() {
  quiz_length = getQuizInfo("slider1",0,country_data.length);
  timer = getQuizInfo("slider2",0,60)*1000*60;
  countries = randomOrder().slice(0,quiz_length);
  setUpQuiz();
  if (timer > 0) {
    timerFunc = setInterval(function(){
      setProgress(0,true);
      if (Date.now() - elapsed_time > timer) {
        endGame();
      }
    },1000);
  }
}

function endGame() {
  clearInterval(timerFunc);
  if (timer == 0) {
    $("#quizz-holder").html("<div>Score : "+score+"/"+quiz_length+" en "+elapsedTimeMinutes(Date.now()-elapsed_time)+"</div><div><input id=\"numberquiz\" type=\"number\" value=\""+quiz_length+"\"><button onclick=\"startQuiz()\">Recommencer</button></div>");
  } else {
    $("#quizz-holder").html("<div>Score : "+score+"/"+(score+incorrect_log.length)+" en "+elapsedTimeMinutes(Math.min(timer,Date.now()-elapsed_time))+"</div><div><input id=\"minutesquiz\" type=\"number\" value=\""+timer/60000+"\"> min <button onclick=\"startQuizTimer()\">Recommencer</button></div>");
  }
  showCorrection();
  toggleElementsById(["submit"],true);
}

function changeGuess(len) {
  var str = "";
  for (var i = len - 1; i >= 0; i--) {
    str += "_ ";
  }
  console.log(str);
  $("div#quizz-holder").html("<span id=\"quizz-guess\">"+str+"</span>");
}

function newGuess(correction) {
  var sleep = 2500;
  tries++;
  const answer = $("#answer").val();
  updateGuess(normalizeStr(correction),normalizeStr(answer));
  const correct = checkAnswer(answer,correction,0);
  if (correct || tries >= 3) {
    tries = 0;
    countries.pop();
    updateGuess(correction,correction);
    if (correct) {
      sleep = 500;
      document.getElementById("answer").classList.add("correct");
    } else {
      document.getElementById("answer").classList.add("incorrect");
    }
    setProgress(correct,false);
    setTimeout(function(){
      if (countries.length != 0) {
      next();  
      } else {
        endGame();
      }
    },sleep);
  }
  setAnswerField("","regularanswer");
  $("#answer").focus();
}

function updateGuess(rep,guess) {
  console.log(document.getElementById("quizz-guess").innerHTML);
  guess += normalizeStr(document.getElementById("quizz-guess").innerHTML);
  var res = "";
  for (var i = 0; i < rep.length; i++) {
    if (guess.includes(rep[i])) {
      res += rep[i].toUpperCase();
    } else {
      res += "_";
    }
    res += " ";
  }
  document.getElementById("quizz-guess").innerHTML = res;
}
