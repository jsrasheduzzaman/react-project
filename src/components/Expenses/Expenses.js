import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props){

	const [filteredYear, setFilterdYear] = useState('2020');
	const filterChangeHandler = selectedYear => {
		setFilterdYear(selectedYear);
	};

	return(
		<Card className="expenses">
			<ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
			<p>Data for years 2019, 2020 & 2022 is hidden.</p>

			{props.items.map(expenses => <ExpenseItem key={expenses.id} title={expenses.title} amount={expenses.amount} date={expenses.date} />)}
		    
		</Card>
	);
}
export default Expenses;