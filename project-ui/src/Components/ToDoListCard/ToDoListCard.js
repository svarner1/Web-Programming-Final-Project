import * as React from 'react';
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import apiClient from "../../services/apiClient"
import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const useStyles = makeStyles({
  cards: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  cardContent: {
    backgroundColor: '#90EE90'
  }
});

export default function ToDoListCard({ listItem, user, setToDoEntries}) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState(null)
  const classes = useStyles();

  const handleOnSubmit = async () => {
    setIsProcessing(true)

    const { data, error } = await apiClient.deleteToDoEntry(listItem.id)
    const currentToDoEntries = await apiClient.listUserToDoEntries(user.id)
    if (data) {
        setToDoEntries(currentToDoEntries.data.toDoEntries)
        navigate("/toDoList")
    }
    if (error) {
        setError(error)
    }

    setIsProcessing(false)    
}
  return (
    <div className="toDoListItem">
      <Box className={classes.cards}>
        <Card sx={{ width: 450, marginBottom: '20px' }}>
            <CardContent className={classes.cardContent}>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Created At {listItem.createdAt}
                </Typography>
                <Typography sx={{ mb: 1.5 }} variant="h5" component="div">
                {listItem.text}
                </Typography>
                <Typography color="text.secondary">
                Category: {listItem.category}
                </Typography>
                <Typography color="text.secondary">
                Priority: {listItem.priority}
                </Typography>
                
            </CardContent>
            <CardActions className={classes.cardContent}>
                <Button size="small" onClick={handleOnSubmit}>Delete Entry</Button>
            </CardActions>
        </Card>
      </Box>
    </div>
  );
}