-- Asking user if they'd like to drop the database
\echo 'Delete and recreate final_project db?'
\prompt 'Return for yes or control-C to cancel > ' answer

DROP DATABASE final_project;
CREATE DATABASE final_project;
\connect final_project;

\i final-project-schema.sql

-- \i final-project-data.sql