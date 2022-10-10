-- memakai left join krn ga semua orang subs dan 
-- kita mau dapat semua datanya
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

