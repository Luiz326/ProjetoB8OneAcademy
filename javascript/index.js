
    const minusButton = document.querySelector(".minus")
    const plusButton = document.querySelector(".plus")
    const counterValue = document.querySelector(".display")

   let counterCurrentValue = 01
    function counterButtonHandler(operation) {
        switch (operation) {
            case "+":
                if(counterCurrentValue <= 2){
                    counterCurrentValue++

                    counterValue.innerHTML = Intl.NumberFormat('pt-BR', { style: 'decimal', minimumIntegerDigits: 2 }).format(counterCurrentValue)
                }
                break;
            case "-":
                if (counterCurrentValue > 1) {
                    counterCurrentValue--
                    counterValue.innerHTML = Intl.NumberFormat('pt-BR', { style: 'decimal', minimumIntegerDigits: 2 }).format(counterCurrentValue)
                }
            default:
                break;
        }


    }

    minusButton.addEventListener("click", () => counterButtonHandler("-"))
    plusButton.addEventListener("click", () => counterButtonHandler("+"))
