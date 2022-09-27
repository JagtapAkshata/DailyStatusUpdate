import React from 'react'
import { Typography, styled, Box, Divider, List } from '@mui/material';
import TransactionData from './TransactionData';
const Container = styled(Box)`
    display : flex;
    flex-direction : column;

    & > h5, & > div, & > button {
        margin-top : 30px;
    }
`
const Transaction = ({transaction, setTransaction}) => {
  return (
    <Container>
        <Typography variant='h5'>Transaction History</Typography>
        <Divider/>
        <List>
            {
                transaction.map((transaction)=>{
                    return <TransactionData transaction={transaction} setTransaction={setTransaction}/>
                })                
            }
        </List>
    </Container>
  )
}

export default Transaction