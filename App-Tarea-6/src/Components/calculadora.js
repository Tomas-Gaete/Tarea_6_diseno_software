import React from "react";

function Calculator(){
  return(
    <table className='Calculadora'>
     <tr>
            <td colspan ="3"><input class="ans" type="text" id="result"/></td>
            <td><input class="calc" type="button" value="c" onclick="clr()" /> </td>
        </tr> 
        <tr> 
            <td><input class="calc" type="button" value="1" onclick="dis('1')"
                onkeydown="myFunction(event)"/> </td>
            <td><input class="calc" type="button" value="2" onclick="dis('2')"
                onkeydown="myFunction(event)"/> </td>
            <td><input class="calc" type="button" value="3" onclick="dis('3')"
                onkeydown="myFunction(event)"/> </td>
            <td><input class="calc" type="button" value="/" onclick="dis('/')"
                onkeydown="myFunction(event)"/> </td>
        </tr>
        <tr>
            <td><input class="calc" type="button" value="4" onclick="dis('4')"
                onkeydown="myFunction(event)"/> </td>
            <td><input class="calc" type="button" value="5" onclick="dis('5')"
                onkeydown="myFunction(event)"/> </td>
            <td><input class="calc" type="button" value="6" onclick="dis('6')"
                onkeydown="myFunction(event)"/> </td>
            <td><input class="calc" type="button" value="*" onclick="dis('*')"
                onkeydown="myFunction(event)"/> </td>
        </tr> 
        <tr> 
            <td><input class="calc" type="button" value="7" onclick="dis('7')"
                  onkeydown="myFunction(event)"/> </td>

            <td><input class="calc" type="button" value="8" onclick="dis('8')"
                 onkeydown="myFunction(event)"/> </td>

            <td><input class="calc" type="button" value="9" onclick="dis('9')"
                 onkeydown="myFunction(event)"/> </td>

            <td><input class="calc" type="button" value="-" onclick="dis('-')"
                onkeydown="myFunction(event)"/> </td>
        </tr> 
        <tr>
            <td><input  class="calc" type="button" value="0" onclick="dis('0')"
                onkeydown="myFunction(event)"/> </td>

            <td><input class="calc" type="button" value="." onclick="dis('.')"
                onkeydown="myFunction(event)"/> </td>

            <td><input class="calc" type="button" value="=" onclick="solve()"/> </td>
  
            <td><input class="calc" type="button" value="+" onclick="dis('+')"
                onkeydown="myFunction(event)"/> </td>
        </tr>
    </table>
    
  )
}

export default Calculator;