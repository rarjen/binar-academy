CREATE TABLE users(
    id_user BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);
CREATE TABLE channels(
    id_channel BIGSERIAL PRIMARY KEY,
    id_user VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT
);
CREATE TABLE subscribers(
    id_subscriber BIGSERIAL PRIMARY KEY,
    id_channel INT NOT NULL,
    id_user INT NOT NULL
);
CREATE TABLE videos(
    id_videos BIGSERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    id_channel INT NOT NULL
);
CREATE TABLE comments(
    id_comments BIGSERIAL PRIMARY KEY,
    id_videos INT NOT NULL,
    id_user INT NOT NULL,
    comment TEXT NOT NULL
);
CREATE TABLE likes(
    id_likes BIGSERIAL PRIMARY KEY,
    id_videos INT NOT NULL,
    id_user INT NOT NULL
);