import React, {useState} from "react";

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 

import { numbers } from '../../../data';
import NumberButton from './NumberButton';

//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       numberState.map((num, index) => {
         return <NumberButton num={num} key={index}/>         
       })}
    </div>
  );
};

export default Numbers;