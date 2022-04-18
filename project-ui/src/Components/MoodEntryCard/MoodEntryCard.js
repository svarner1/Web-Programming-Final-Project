import * as React from 'react';
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
    backgroundColor: '#87CEFA'
  }
});


export default function MoodEntryCard({ listItem, user}) {
  const classes = useStyles();
  return (
    <div className="moodEntry">
      <Box className={classes.cards}>
      <Card sx={{ width: 450, marginBottom: '20px' }}>
            <CardContent className={classes.cardContent}>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Created At {listItem.createdAt}
                </Typography>
                <Typography variant="h5" component="div">
                Today is... 
                {(listItem.mood == "Stressed")?(
                    <>
                      <span role="img" aria-label="stressed emoji">😓</span>
                    </>
                  ):(listItem.mood == "Nervous")?(
                    <>
                      <span role="img" aria-label="nervous emoji">😬</span>
                    </>
                  ): (listItem.mood == "Unsettled")?(
                    <>
                      <span role="img" aria-label="unsettled emoji">😖</span>
                    </>
                  ): (listItem.mood == "Active")?(
                    <>
                      <span role="img" aria-label="active emoji">⚽️</span>
                    </>
                  ):(listItem.mood == "Relaxed")?(
                    <>
                      <span role="img" aria-label="relaxed emoji">😎</span>
                    </>
                  ):(listItem.mood == "Lovable")?(
                    <>
                      <span role="img" aria-label="lovable emoji">🥰</span>
                    </>
                  ):(listItem.mood == "Romantic")?(
                    <>
                      <span role="img" aria-label="romantic emoji">😍</span>
                    </>
                  ):(listItem.mood == "Happy")?(
                    <>
                      <span role="img" aria-label="happy emoji">😁</span>
                    </>
                  ):(listItem.mood == "Tired")?(
                    <>
                      <span role="img" aria-label="tired emoji">😴</span>
                    </>
                  ):(
                    <>
                      <span role="img" aria-label="calm emoji">😌</span>
                    </>
                  )}
                </Typography>
                <Typography sx={{ mb: 1.5 }} variant="body2">
                    {listItem.text}
                </Typography>
                <Typography color="text.secondary">
                Mood: {listItem.mood} 
                </Typography>
            </CardContent>
        </Card>
      </Box>
    </div>
  );
}