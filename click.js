document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
    // Get the answers from the form
    const answer1 = document.getElementById("q1").value.trim().toLowerCase();
    const answer2 = document.getElementById("q2").value.trim().toLowerCase();
    const answer3 = document.getElementById("q3").value.trim().toLowerCase();
  
    if (answer1 === "5" && answer2 === "ah" && answer3 === "good") {
      document.getElementById("successMessage").style.display = "block";
    } else {
      alert("Oops, one or more answers are incorrect. Try again!");
    }
  });
  
  document.getElementById("toPhotosBtn").addEventListener("click", function() {
    window.location.href = "iloveher.html"; // Redirect to index.html
  });
  