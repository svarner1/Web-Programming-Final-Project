const db = require("../db")

class MoodEntry {
    static async listMoodEntries() {
        //list all mood entries in order from newest to oldest
    }

    static async fetchMoodEntryById(moodEntryId){
        //fetch a single entry
    }

    static async createMoodEntryId({ moodEntry, user }){
        //create a new to do list entry
    }

}

module.exports = MoodEntry