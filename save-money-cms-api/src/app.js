import express from 'express'


import userRoute from './routes/user'
import config from './config'
var app = express();


app.use('/users', userRoute);

app.listen(config.port, () => {
    console.log('App listening !! Start Save Money APIs', config.port);
});
  