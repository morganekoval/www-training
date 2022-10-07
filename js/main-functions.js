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
