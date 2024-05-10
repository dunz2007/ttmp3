const express = require('express');
const axios = require('axios');

const app = express();

app.get('/tiktok', async (req, res, next) => {
    const link = req.query.link;
    if (!link) return res.json({ error: 'Thiếu dữ liệu để khởi chạy chương trình' });

    try {
        const response = await axios.post('https://www.tikwm.com/api/?url=' + link + '?hd=1', {
            url: link
        });
        const data = response.data;
        console.log(data);
        return res.json(data);
    } catch (error) {
        return res.json({ error: error.message });
    }
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
