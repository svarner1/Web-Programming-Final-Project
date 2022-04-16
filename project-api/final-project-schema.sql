CREATE TABLE users (
    id          SERIAL PRIMARY KEY,
    password    TEXT NOT NULL,
    username    TEXT NOT NULL,
    email       TEXT NOT NULL UNIQUE CHECK (POSITION('@' IN email) > 1),
    is_admin    BOOLEAN NOT NULL DEFAULT FALSE,
    created_at  TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE list_categories (
    category_id     SERIAL PRIMARY KEY,
    category_name   TEXT NOT NULL UNIQUE
);

CREATE TABLE mood_categories (
    category_id     SERIAL PRIMARY KEY,
    category_name   TEXT NOT NULL UNIQUE
);

CREATE TABLE to_do_list (
    id          SERIAL PRIMARY KEY,
    text        VARCHAR(140) NOT NULL,
    priority    INTEGER NOT NULL CHECK (priority > 0 AND priority <= 5),
    category    TEXT NOT NULL,
    user_id     INTEGER NOT NULL,
    created_at  TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at  TIMESTAMP NOT NULL DEFAULT NOW(),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    -- FOREIGN KEY (category) REFERENCES list_categories(category_name) ON DELETE CASCADE
);

CREATE TABLE task_completed (
    user_id         INTEGER NOT NULL,
    list_entry_id   INTEGER NOT NULL,
    FOREIGN KEY     (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY     (list_entry_id) REFERENCES to_do_list(id)
);

CREATE TABLE mood_entry (
    id          SERIAL PRIMARY KEY,
    text        TEXT NOT NULL,
    mood        TEXT NOT NULL,
    user_id     INTEGER NOT NULL,
    created_at  TIMESTAMP NOT NULL DEFAULT NOW(),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    -- FOREIGN KEY (mood) REFERENCES mood_categories(category_name) ON DELETE CASCADE
);