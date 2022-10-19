const previousOperationText = document.querySelector("#previos-op");
const currentOperationText = document.querySelector("#current-op");

const buttons = document.querySelectorAll("#buttons-container button");

class Calculator{
    constructor(previousOperationText, currentOperationText){
        this.previousOperationText = previousOperationText;
        this.currentOperationText = currentOperationText;
        this.currentOperation = ""
    }

    // add digitos na tela
    addDigit(digit){
        if(digit === "." && this.currentOperationText.innerText.includes(".")){
            return
        }
        this.currentOperation = digit;
        this.updateScreen();  
    }

    //chanve values 
    updateScreen(
        operationValue = null, 
        operation = null, 
        current = null, 
        previous = null
        ){
            if(operationValue === null){
                this.currentOperationText.innerText += this.currentOperation; 
            }else{
                //check if value is 0
                if(previous === 0){
                    operationValue = current
                }
                //add current value
                this.previousOperationText.innerText = `${operationValue} ${operation}`
                this.currentOperationText.innerText = "";
            }
    }

    //process all calculator
    processOperation(operation){
        //check if current is empty
        if(this.currentOperationText.innerText === "" && operation !== "C"){
            //change operation
            if(this.previousOperationText.innerText !== ""){
                this.changeOperation(operation);
            }
            return;
        }
        let operationValue
        const previous = +this.previousOperationText.innerText.split(" ")[0]
        const current = +this.currentOperationText.innerText



        switch(operation){
            case "+":
                operationValue = previous + current
                this.updateScreen(operationValue, operation, current, previous)
                break;
            case "-":
                operationValue = previous - current
                this.updateScreen(operationValue, operation, current, previous)
                break;
            case "*":
                operationValue = previous * current
                this.updateScreen(operationValue, operation, current, previous)
                break;
            case "/":
                operationValue = previous / current
                this.updateScreen(operationValue, operation, current, previous)
                break;    
            case "DEL":
                this.processDelOperation();
                break;    
            case "CE":
                this.processClearOperation();
                break;
            case "C":
            this.processAllOperation();
            break;
            case "=":
            this.processEqualOperation();
            break; 
            default: 
                return;
        }
    }

    //change math
    changeOperation(operation){
        const mathOperation = ["*", "/", "+", "-"]
        if(!mathOperation.includes(operation)){
            return
        }
        this.previousOperationText.innerText = this.previousOperationText.innerText.slice(0, -1) + operation
    }

    //delete the last digit
    processDelOperation(){
        this.currentOperationText.innerText = this.currentOperationText.innerText.slice(0, -1)
    }

    //clear current operation
    processClearOperation(){
        this.currentOperationText.innerText= ""
    }

    //clear all operations
    processAllOperation(){
        this.currentOperationText.innerText= ""
        this.previousOperationText.innerText= ""
    }

    //process operation
    processEqualOperation(){
        const operation = previousOperationText.innerText.split(" ")[1]

        this.processOperation(operation)
    }
}

const calc = new Calculator(previousOperationText, currentOperationText);

buttons.forEach((btn)=>{
    btn.addEventListener("click", (e) =>{
        const value = e.target.innerText

        if(+value >=0 || value === "."){
            calc.addDigit(value)
        }else{
            calc.processOperation(value)
        }
    })
})


document.addEventListener('keydown', function(e) {
    switch(e.key){
        case "0":
            document.getElementById("btn-0").click();
            break;
        case "1":
            document.getElementById("btn-1").click();
            break;
        case "2":
            document.getElementById("btn-2").click();
            break;
        case "3":
            document.getElementById("btn-3").click();
            break;
        case "4":
            document.getElementById("btn-4").click();
            break;
        case "5":
            document.getElementById("btn-5").click();
            break;
        case "6":
            document.getElementById("btn-6").click();
            break;
        case "7":
            document.getElementById("btn-7").click();
            break;
        case "8":
            document.getElementById("btn-8").click();
            break;
        case "9":
            document.getElementById("btn-9").click();
            break;
        case ".":
            document.getElementById("btn-dot").click();
            break; 
        case ",":
            document.getElementById("btn-dot").click();
            break;
        case "=":
            document.getElementById("equal-btn").click();
            break;
        case "Enter":
            document.getElementById("equal-btn").click();
            break;
        case "*":
            document.getElementById("btn-mult").click();
            break;
        case "-":
            document.getElementById("btn-sub").click();
            break;
        case "/":
            document.getElementById("btn-share").click();
            break;
        case "+":
            document.getElementById("btn-add").click();
            break;
        case "Backspace":
            document.getElementById("btn-DEL").click();
            break;
        case "Delete":
            document.getElementById("btn-C").click();
            break;
        case "C":
            document.getElementById("btn-CE").click();
            break;          

        default: 
            return;
    }
});