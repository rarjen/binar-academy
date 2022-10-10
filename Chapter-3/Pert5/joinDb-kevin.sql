-- Soal no 1
SELECT
 videos.id AS id_video,
 videos.title AS judul_video,
 videos.description AS deskripsi_video,
 channels.name AS nama_channel
FROM videos
JOIN channels ON channels.id = videos.channel_id;

-- Soal no 2
SELECT
 channels.id AS id_channel,
 channels.name AS nama_channel,
 users.name AS pemilik_channel
FROM users
JOIN channels ON channels.id = users.id;

-- Soal no 3
SELECT
videos.id as id_video,
videos.title as judul_video,
COUNT(likes.id) as jumlah_like
FROM videos
JOIN likes ON videos.id = likes.video_id
GROUP BY videos.id
ORDER BY jumlah_like DESC, judul_video ASC;

-- Soal no 4
WITH suka AS (
    SELECT 
        likes.user_id,
        count(*)    
    FROM likes
    GROUP BY likes.user_id
), komentar AS (
    SELECT
        comments.user_id,
        count(*)
    FROM comments
    GROUP BY comments.user_id
), subs AS (
    SELECT
        channel_subscribers.user_id,
        count(*)
    FROM channel_subscribers
    GROUP BY channel_subscribers.user_id
)
SELECT 
users.id AS id_user, 
users.name AS nama_user,
suka.count AS video_yang_disukai,
komentar.count AS video_yang_dikomentari,
subs.count AS channel_yang_diikuti
FROM users
LEFT JOIN suka ON suka.user_id = users.id
LEFT JOIN komentar ON komentar.user_id = users.id
LEFT JOIN subs ON subs.user_id = users.id
ORDER BY users.id ASC;

-- Maaf kak full nyontek, masih belum paham harus belajar lagi mandiri hehe