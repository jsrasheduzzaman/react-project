import './App.css';
import Expenses from './components/Expenses/Expenses';
import ExpenseForm from './components/ExpenseForm/NewExpense'; 
import React, {useState} from 'react';
import Concept from './components/concepts/Concept';

import componentsImage from './assets/images/components.png';
import stateImage from './assets/images/state.png';
import eventsImage from './assets/images/events.png';

  const DUMMY_EXPENSES = [
    {
      id:'e1',
      title:'Toilet Paper',
      amount:94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id:'e2',
      title:'New TV',
      amount:294.12,
      date: new Date(2021, 2, 28),
    },
    {
      id:'e3',
      title:'Car Insurance',
      amount:294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id:'e4',
      title:'New Dwsk (Wooden)',
      amount:450,
      date: new Date(2021, 5, 12),
    },
  ];



function App() {

  const concepts = [
  {
    title: 'Components',
    image: componentsImage,
    description:
      'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.',
  },
  {
    title: 'State',
    image: stateImage,
    description:
      'State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.',
  },
  {
    title: 'Events',
    image: eventsImage,
    description:
      'Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.',
  },
];



const [expenses, setExpense] = useState(DUMMY_EXPENSES);

const AddExpenseHandler = expense => {
  setExpense(dummyExpense => {
    return [expense, ...dummyExpense];
  });
}


  return (
   <div>
      <h2>Section-6 Tutorial 88 Done</h2>
      <ExpenseForm onAddExpense={AddExpenseHandler} />
      <Expenses items={expenses} />
      <Concept concepts={concepts} />
   </div>
  );
}

export default App;
