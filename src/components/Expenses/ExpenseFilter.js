import "./ExpenseFilter.css";
// import React, {useState} from 'react';


const ExpenseFilter = (props) => {

    // const[year,setYear] = useState('2019');
    
    const setYearHandler = (event) =>{
        
        // const currentFilter = event.target.value;
        
        // setYear(currentFilter);
        props.onFilterSelect(event.target.value);
    }
    
    return(
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label for="year"> Filter by year </label>
                <select name="year" id="year" value={props.currentFilter} onChange={setYearHandler}>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                </select>
            </div>
        </div>
    );
}; 

export default ExpenseFilter;