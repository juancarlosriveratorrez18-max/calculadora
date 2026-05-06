const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

const operadores = ["+", "-", "*", "/"];

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.id === "=") {
            try {
                // Remove trailing operators if any exist before calculating
                let expression = display.value;
                if (operadores.includes(expression.slice(-1))) {
                    expression = expression.slice(0, -1);
                }
                display.value = eval(expression);
            } catch {
                display.value = "Error";
            }
        } else if (btn.id === "ac") {
            display.value = "";
        } else if (btn.id === "dc") {
            display.value = display.value.slice(0, -1);
        } else {
            const ultimoCaracter = display.value[display.value.length - 1];
            const esOperador = operadores.includes(btn.id);
            const ultimoEsOperador = operadores.includes(ultimoCaracter);

            // Prevent two consecutive operators
            if (esOperador && ultimoEsOperador) {
                console.log("❌ No se pueden ingresar dos operadores seguidos.");
                return;
            }

            // Append the button ID to the display
            display.value += btn.id;
        }
    });
});