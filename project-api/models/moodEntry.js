const db = require("../db")
const { BadRequestError, NotFoundError } = require("../utils/errors")

class MoodEntry {
    static async listMoodEntriesForUser({userId}) {
        //list all posts in descending order of importance
        const results = await db.query(
            `
              SELECT m.id,
                     m.text,
                     m.user_id AS "userId",
                     m.created_at AS "createdAt"
              FROM mood_entry AS m
              WHERE m.user_id = $1
            `, 
            [userId]
        )
        return results.rows
    }

    static async createMoodEntry({ moodEntry, user }){
        //create a new to do list entry
        const requiredFields = ["text", "mood"]
        requiredFields.forEach(field => {
            if(!moodEntry.hasOwnProperty(field)) {
                throw new BadRequestError(`Required field - ${field} - missing from request body.`)
            }
        })

        const results = await db.query(
            `
               INSERT INTO mood_entry (text, mood, user_id)
               VALUES ($1, $2, (SELECT id FROM users WHERE email = $3))
               RETURNING id,
                         text,
                         mood,
                         user_id AS "userId",
                         created_at AS "createdAt"
            `, [moodEntry.text, moodEntry.mood, user.email]
        )

        return results.rows[0]
    }

    static async fetchMoodEntryById(moodEntryId){
        //fetch a single entry
        const results = await db.query(
            `
            SELECT m.id,
                    m.text,
                    m.mood,
                    m.user_id AS "userId",
                    m.created_at AS "createdAt"
            FROM mood_entry AS m
            WHERE m.id = $1
            `, 
                [moodEntryId]
        )
        return results.rows[0]
    }

    static async editMoodEntry({ moodEntryId, moodEntryUpdate }) {
        //edit a single entry
    }

}

module.exports = MoodEntry