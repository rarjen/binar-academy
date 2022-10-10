SELECT
videos.id as id_video,
videos.title as judul_video,
COUNT(likes.id) as jumlah_like
FROM videos
JOIN likes ON videos.id = likes.video_id
GROUP BY videos.id
ORDER BY jumlah_like DESC, judul_video ASC;

