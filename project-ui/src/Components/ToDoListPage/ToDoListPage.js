import { useState, useEffect } from "react"
import {Route, Link, BrowserRouter, useNavigate } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import ToDoListCard from "../ToDoListCard/ToDoListCard"
import "./ToDoListPage.css"

const useStyles = makeStyles((theme) => ({
    buttonBox: {
      display: "flex",
      justifyContent: "center",
    },
}));

export default function ToDoListPage({ user, toDoEntries }) {
    const classes = useStyles();

    console.log("toDoEntries", toDoEntries)
    return(
        <div className="ToDoListPage">
            <h1 className="pageTitle">To-Do List Page</h1>
            <Box className={classes.buttonBox} mb={5}>
                <Link to="/"><Button variant="contained"> Create New List Item </Button></Link>
            </Box>
            <div className="feed">
                {toDoEntries?.map((listItem) => (
                    <ToDoListCard listItem={listItem} key={listItem.id} user={user} />
                ))}
            </div>
        </div>
    )
}