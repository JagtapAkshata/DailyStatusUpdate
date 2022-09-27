import React from 'react'
import { Typography, styled, Box } from '@mui/material';

const BalanceText = styled(Typography)`
    font-size: 25px;
    margin-bottom: 20px;
`
const Balance = ({transaction}) => {
    const amount = transaction.map((transaction)=>transaction.amount);
    const total = amount.reduce((amount, item)=>(amount += item), 0).toFixed(2);
  return (
    <Box><BalanceText>Balance : ₹ {total}</BalanceText></Box>
  )
}
 
export default Balance;