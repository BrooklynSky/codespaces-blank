  function checkAnswers() {
        let score = 0;

        // MCQ 1
        const q1 = document.querySelector('input[name="q1"]:checked');
        if (q1 && q1.value === "Soul") score++;

        // MCQ 2
        const q2 = document.querySelector('input[name="q2"]:checked');
        if (q2 && q2.value === "Symmetry") score++;

        // True/False 1
        const q3 = document.querySelector('input[name="q3"]:checked');
        if (q3 && q3.value === "true") score++;

        // True/False 2
        const q4 = document.querySelector('input[name="q4"]:checked');
        if (q4 && q4.value === "false") score++; // Blair is actually a cat

        // Math question
        const q5 = document.querySelector('#q5').value;
        if (parseInt(q5) === 100) score++;

        // String question
        const q6 = document.querySelector('#q6').value.trim().toLowerCase();
        if (q6 === "cat") score++;
        // else if (q6 === "Cat") score++;

        // Color picker 
        const q7 = document.querySelector('#q7').value.toLowerCase();
        if (q7 === "#bb1515ff") score++;

        document.querySelector('#result').textContent = 
            "You scored " + score + " out of 7!";
    }

    // Submit button handler
    document.querySelector('#submitBtn').addEventListener('click', checkAnswers);
