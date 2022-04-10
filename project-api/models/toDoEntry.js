const db = require("../db")

class ToDoEntry {
    static async listToDoEntries() {
        //list all posts in descending order of importance
    }

    static async fetchToDoEntryById(toDoEntryId){
        //fetch a single ntry
    }

    static async createToDoEntryId({ toDoEntry, user }){
        //create a new to do list entry
    }

    static async editToDoListEntry({ toDoEntryId, listEntryUpdate }) {
        //edit a single entry
    }
}

module.exports = ToDoEntry