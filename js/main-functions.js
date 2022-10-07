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

function resetHTML(elements) {
  elements.forEach(function(element){
    document.getElementById(element).innerHTML = "";
  });
}

function getQuizInfo(input,min,max) {
  var input_number = document.getElementById(input).value;
  if (input_number == undefined || input_number < min) {
    input_number = min;
  } else if (input_number > max) {
    input_number = max;
  }
  return input_number;
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
  if (timer == 0) {
    if (correct) {
      document.getElementById("progress").innerHTML = document.getElementById("progress").innerHTML+ "<div style=\"display: inline-block;background-color: green;width: "+50/quiz_length+"vw;height: 3vh;margin-bottom: 3px;\"></div>"
    } else {
      document.getElementById("progress").innerHTML = document.getElementById("progress").innerHTML+ "<div style=\"display: inline-block;background-color: red;width: "+50/quiz_length+"vw;height: 3vh;margin-bottom: 3px;\"></div>"
    }
  } else if (callFromInterval) {
    document.getElementById("progress").innerHTML = document.getElementById("progress").innerHTML+ "<div style=\"display: inline-block;background-color: green;width: "+50/(timer/1000)+"vw;height: 3vh;margin-bottom: 3px;\"></div>"
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
  var cls;
  var sleeptime = 2000;
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
  $("span#answer-holder").html("<input type=\"text\" id=\"answer\" name=\"answer\" minlength=\"0\" maxlength=\"35\" size=\"35\" value=\""+val+"\" class=\""+cls+"\">");
}

function setUpQuiz() {
  loadOptions();
  resetHTML(["progress","fieldset-mode"]);
  score = 0;
  incorrect_countries = [];
  incorrect_log = [];
  toggleElementsById(["inputs","submit","progress"],false);
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
  quiz_length = getQuizInfo("numberquiz",1,country_data.length);
  countries = randomOrder().slice(0,quiz_length);
  setUpQuiz();
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
