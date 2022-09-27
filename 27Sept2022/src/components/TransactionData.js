import React from "react";
import {
  Typography,
  styled,
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";

import DeleteIcon from '@mui/icons-material/Delete';

const Detail = styled(ListItem)`
    margin-top: 10px;
`
const TransactionData = ({ transaction ,setTransaction}) => {
    const color = transaction.amount> 0 ? 'Green' : 'Red';
    const deleteTransaction =()=>{
        setTransaction(transaction)
    }
    return (
    <Detail style={{background: `${color}`, color:"#fff"}}>
      <ListItemIcon>
        <DeleteIcon onClick={()=> deleteTransaction()}/>
      </ListItemIcon>
      <ListItemText>{transaction.text}</ListItemText>
      <ListItemText>{transaction.amount}</ListItemText>
  </Detail>
  );
};

export default TransactionData;
