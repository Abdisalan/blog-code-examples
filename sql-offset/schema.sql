CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE tweet (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    content VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE user_follower (
    user_id INTEGER REFERENCES users(id),
    follower_id INTEGER REFERENCES users(id)
);

