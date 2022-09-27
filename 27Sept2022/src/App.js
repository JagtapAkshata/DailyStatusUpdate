import logo from './logo.svg';
import './App.css';
import { Typography, styled, Box } from '@mui/material';
import { margin } from '@mui/system';
import Balance from './components/Balance';
import ExpenceCard from './components/ExpenceCard';
import NewTransaction from './components/NewTransaction';
import Transaction from './components/Transaction';
import { useState } from 'react';

const Header = styled(Typography)`
font-size : 36px;
color : blue;
text-transform : uppercase
`
const Component = styled(Box)`
  display : flex;
  background : #fff;
  width : 800px;
  padding : 10px;
  border-radius : 20px;
  margin : auto;
  & > div {
  height : 70vh;
  width : 50%;
  padding : 10px;
 }
`

function App() {
  const [transaction, setTransaction] = useState([
    {id:1, text:"Shopping",amount:-200},
    {id:2, text:"Salary",amount:4000},
    {id:3, text:"Book",amount:-100},
    {id:4, text:"Bonus",amount:1000}
  ]);
  return (
    <Box className="App">
     <Header>Expense Tracker</Header>
      <Component>
        <Box>
          <Balance transaction={transaction}/>
          <ExpenceCard transaction={transaction}/>
          <NewTransaction setTransaction ={setTransaction}/>
        </Box>
        <Box>
          <Transaction transaction={transaction} setTransaction ={setTransaction}/>
        </Box>
      </Component>
    </Box>
  );
}

export default App;
