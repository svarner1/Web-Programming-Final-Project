import * as React from 'react';
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

export default function ToDoListCard({ listItem, user}) {
  return (
    <div className="toDoListItem">
        <Card sx={{ width: 450 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Created At {listItem.createdAt}
                </Typography>
                <Typography variant="h5" component="div">
                {listItem.text}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Category: {listItem.category}
                </Typography>
                
            </CardContent>
            <CardActions>
                <Button size="small">Delete Entry</Button>
            </CardActions>
        </Card>
    </div>
  );
}