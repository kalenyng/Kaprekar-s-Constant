function kaprekarRoutine() {
    let num = document.getElementById("inputNumber").value;
    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";  // Clear previous results

    if (num.length !== 4 || /^(.)\1{3}$/.test(num)) {
        typeText(resultDiv, "Please enter a valid 4-digit number with at least two different digits.");
        return;
    }

    let steps = [];
    while (num != 6174) {    
        let desc = num.toString().split('').sort((a, b) => b - a).join('');
        let asc = num.toString().split('').sort((a, b) => a - b).join('');
        desc = desc.padEnd(4, '0');
        asc = asc.padStart(4, '0');
        num = desc - asc;
        steps.push(`${desc} - ${asc} = ${num}`);

        if (num == 6174) break;
    }

    steps.push("Reached Kaprekar's Constant: 6174!");
    typeText(resultDiv, steps.join("\n"));
}

// Function to create a typing effect
function typeText(element, text) {
    element.innerHTML = "";  // Clear the element
    let index = 0;

    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index) === "\n" ? "<br>" : text.charAt(index);
            index++;
            setTimeout(type, 50);  // Adjust typing speed by changing the delay (in milliseconds)
        }
    }

    type();
}
