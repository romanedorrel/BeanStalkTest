import { useState } from "react";

function Calculator(){

    const[num1, updateNum1] = useState('');
    const[num2,updateNum2] = useState('');
    const[operator, chooseOperator] = useState('');
    const[result, updateResults] = useState('');
    let newResult = '';
    const handleSubmit = (e) => {
        e.preventDefault()

        if( operator === '+'){
            newResult = parseInt(num1) + parseInt(num2);
            updateResults(newResult);
        }else if(operator === '-'){
            newResult = parseInt(num1) - parseInt(num2);
            updateResults(newResult);
        }else if(operator === '*'){
            newResult = num1 * num2;
            updateResults(newResult);
        }else if(operator === '/'){
            newResult = parseInt(num1) / parseInt(num2);
            updateResults(newResult);
        }else{
        updateResults('Invalid operator, operator must be "+,-,*, or /"');    
        }
    }

    return (
        <div className="Calculator componentBox">
           <form onSubmit={handleSubmit}>
            <label>Insert First Number:
                <input type="number" name='num1' value={num1} 
                onChange={(e) => updateNum1(e.target.value)}/>
            </label>
            <label>Insert Operator:
                <input type="text" name="operator" value={operator} 
                onChange={(e) => chooseOperator(e.target.value)}/>
            </label>
            <label>Insert Second Number:
                <input type="number" name='num2' value={num2} 
                onChange={(e) => updateNum2(e.target.value)}/>
            </label>
            <button>Calculate</button>
            <p>{result}</p>
           </form> 
        </div>
    )
}

export default Calculator;