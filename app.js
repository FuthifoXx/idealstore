const express = require('express');
const mongoose = require('mongoose');
const shopRoutes = require('./routes/shopRoute');

const app = express();
const PORT = 2000;
const live_uri = `mongodb+srv://futhifoxmaseko:FuthiFoXx_54140@cluster0.y7f3g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

app.use(express.json());
app.use('/shop', shopRoutes);

mongoose
  .connect(live_uri, {})
  .then(() => console.log('mongoDB Connected'))
  .catch((err) => console.log('Connection Error: ', err));

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});
