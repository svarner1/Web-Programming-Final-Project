import { useState, useEffect } from "react"
import {Route, Link, BrowserRouter, useNavigate } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import MoodEntryCard from "../MoodEntryCard/MoodEntryCard";
import "./MoodEntryPage.css"

const useStyles = makeStyles((theme) => ({
    buttonBox: {
      display: "flex",
      justifyContent: "center",
    },
}));

export default function MoodEntryPage({ user, moodEntries }) {
    const classes = useStyles();

    console.log("moodEntries", moodEntries)
    return(
        <div className="moodEntryPage">
            <h1 className="pageTitle">Mood Tracker Page</h1>
            <Box className={classes.buttonBox} mb={5}>
                <Link className="createButtonLink" to="/createMoodEntry"><Button variant="contained"> Create New Mood Entry </Button></Link>
            </Box>
            <div className="feed">
                {moodEntries?.map((listItem) => (
                    <MoodEntryCard listItem={listItem} key={listItem.id} user={user} />
                ))}
            </div>
        </div>
    )
}