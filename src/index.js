import app from './app';
import './database';

const port = process.env.PORT || 8000

app.listen(port || app.get('port'), () => {
    console.log(`Server on port ${port}`)
})