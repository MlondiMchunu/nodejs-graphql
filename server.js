console.log({ starting: true });

const express = require('express');
const app = express();

app.use('/graphql', (req, res) => {
    res.send({ data: true })
});

app.listen(5000, () => {
    console.log(`Server running on port 5000`)
});