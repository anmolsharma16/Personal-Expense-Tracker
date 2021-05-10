import { useState } from 'react';
import { Typography, Box, makeStyles } from '@material-ui/core';
import './App.css';
import Balance from './Components/Balance';
import ExpenseCard from './Components/ExpenseCard';
import Transactions from './Components/Transactions';
import NewTransaction from './Components/NewTransaction';
import { useEffect } from 'react';

const useStyle = makeStyles({
  header:{
    color: 'orangered',
    fontSize: 35,
    margin: "10px 0",
    textTransform: 'uppercase'

  },
  component: {  
    background: '#FFF',
    padding: 10,
    borderRadius: 20,
    width: 800,
    display: 'flex',
    '& > *': {
      width:'50%' ,
      padding: 10 ,
      height: '70vh'
    }
  }
})

function App() {
  const classes = useStyle();

  const [transactions, setTransactions] = useState([
    { id: 1, text: 'Savings', amount: 2500},
    { id: 2, text: 'Salary', amount: 3000},
    { id: 3, text: 'Stipend', amount: 1000},
    { id: 4, text: 'Fees', amount: -1500 },
  ]); 

  const deleteTransaction = (id) => {
  
    setTransactions(transactions.filter(transaction => transaction.id !== id));
 
  }

  const addTransaction = (transaction) => {
    console.log(transaction);
    setTransactions(transactions => [transaction, ...transactions]);
   
  }


  return (
    <div className="App">
      <Typography className={classes.header}>Personal Expense Tracker</Typography>
      <Box className={classes.component}>
        <Box>
        <Balance transactions={transactions} />
        <ExpenseCard transactions={transactions} />
        <NewTransaction addTransaction={addTransaction}/>
      </Box>
      <Box>
      <Transactions transactions={transactions} deleteTransaction={deleteTransaction}/>
      </Box>
      </Box>
    </div>
  );
}

export default App;