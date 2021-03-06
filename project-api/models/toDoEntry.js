const db = require("../db")
const { BadRequestError, NotFoundError } = require("../utils/errors")

class ToDoEntry {
    static async listToDoEntriesForUser({userId}) {
        //list all posts in descending order of importance
        const results = await db.query(
            `
              SELECT t.id,
                     t.text,
                     t.priority,
                     t.category,
                     t.user_id AS "userId",
                     t.created_at AS "createdAt",
                     t.updated_at AS "updatedAt"
              FROM to_do_list AS t
              WHERE t.user_id = $1
              ORDER BY t.priority DESC
            `, 
            [userId]
        )
        return results.rows
    }

    static async createToDoEntry({toDoEntry, user}){
        //create a new to do list entry
        const requiredFields = ["text", "priority", "category"]
        requiredFields.forEach(field => {
            if(!toDoEntry.hasOwnProperty(field)) {
                throw new BadRequestError(`Requird field - ${field} - missing from request body.`)
            }
        })

        if(toDoEntry.text.length > 140){
            throw new BadRequestError(`To-do-list entry must be 140 characters or less.`)
        }

        const results = await db.query(
            `
              INSERT INTO to_do_list (text, priority, category, user_id)
              VALUES ($1, $2, $3, (SELECT id FROM users WHERE email = $4))
              RETURNING id,
                        text,
                        priority,
                        category,
                        user_id AS "userId",
                        created_at AS "createdAt",
                        updated_at AS "updatedAt"
            `, [toDoEntry.text, toDoEntry.priority, toDoEntry.category, user.email]
        )

        return results.rows[0]
    }

    static async fetchToDoEntryById(toDoEntryId){
        const results = await db.query(
            `
            SELECT t.id,
                t.text,
                t.priority,
                t.category,
                t.user_id AS "userId",
                t.created_at AS "createdAt",
                t.updated_at AS "updatedAt"
            FROM to_do_list AS t
            WHERE t.id = $1
            `,
                [toDoEntryId]
        )

        return results.rows[0]
    }


    static async deleteToDoListEntry(toDoEntryId) {
        const results = await db.query(
            `
            DELETE FROM to_do_list
            WHERE id = $1
            RETURNING *
            `,
                [toDoEntryId]
        )

        return results.rows[0]
    }
}

module.exports = ToDoEntry