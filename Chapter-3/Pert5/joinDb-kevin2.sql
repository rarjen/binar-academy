SELECT
 channels.id AS id_channel,
 channels.name AS nama_channel,
 users.name AS pemilik_channel
FROM users
JOIN channels ON channels.id = users.id;