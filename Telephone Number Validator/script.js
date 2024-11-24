const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

checkBtn.addEventListener("click", () => {
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/
  
  if(!input.value) {
    alert("Please provide a phone number");
  } else if (regex.test(input.value)) {
    result.innerText = `Valid US number: ${input.value}`
  } else {
    result.innerText = `Invalid US number: ${input.value}`
  }
});

clearBtn.addEventListener("click", () => result.innerHTML = "")



/*
Regex: 
  Optional one with a space => (1\s?)?
  Three digits w/ optional parentheses => (\(\d{3}\)|\d{3})
  Optional hyphen or space => ([\s-]?)
  Three digits => \d{3}
  Optional hyphen or space => ([\s-]?)
  Four digits => \d{4}
*/
