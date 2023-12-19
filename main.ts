import inquirer from "inquirer";

let runAgain = 1

for(let i = 0;i<runAgain;i++){
    
    
let calculator :{
    firstNumber:number,
    secondNumber:number,
    operation:string

} = await inquirer.prompt([


    {
        type:"number",
        message:"write your first number",
        name:"firstNumber",


    },

    {
        type:"number",
        message:"write your second number",
        name:"secondNumber"

    },

    {
        type:"list",
        message:"What u want to do?",
        name:"operation",
        choices:[
            "Addition",
            "Subtraction",
            "Multiplication",
            "Division"
        ]
    }
])


// console.log(calculator);

const {firstNumber,secondNumber,operation}=calculator

if(firstNumber && secondNumber && operation){
    let result:number=0;

    if(operation === "Addition"){
        result=firstNumber + secondNumber
        // console.log(calculator.firstNumber + calculator.secondNumber);
        

    } 
    else if(operation === "Subtraction"){
        // console.log(calculator.firstNumber + calculator.secondNumber);
        result=firstNumber - secondNumber


    } else if(operation === "Multiplication"){
        // console.log(calculator.firstNumber + calculator.secondNumber);
        result=firstNumber * secondNumber


    } else if(operation === "Division"){
        // console.log(calculator.firstNumber + calculator.secondNumber);
        result=firstNumber / secondNumber


    } 
console.log("your answer",result);


}
else{console.log("Enter valid input");
}

    let runAgainmsg = await inquirer.prompt({
        type:"input",
        message:"do u want to run again calculation? (yes/no)",
        name:"runAgain"
    })
    

    if(runAgainmsg.runAgain === "yes"){

        
        // console.log("u r running again");
        runAgain +=1
    
        
    }else{console.log(" u r exiting calculator");
    }
    // console.log(runAgainmsg);
}

