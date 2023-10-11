import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

function Expenses(props){

	const [filteredYear, setFilterdYear] = useState('2020');
	const filterChangeHandler = selectedYear => {
		setFilterdYear(selectedYear);
	};


	const filteredExpenses = props.items.filter((expense) => {
	    return expense.date.getFullYear().toString() === filteredYear;
	});

	// let expenseContent = "No result found";

	// if(filteredExpenses.length > 0){
	// 	expenseContent = filteredExpenses.map(expenses => <ExpenseItem key={expenses.id} title={expenses.title} amount={expenses.amount} date={expenses.date} />);
	// }

	return(
		<Card className="expenses">
			<ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
			<ExpensesList items={filteredExpenses} />
		    
		</Card>
	);
}
export default Expenses;