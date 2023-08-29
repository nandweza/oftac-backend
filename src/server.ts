import app from './index';

const port: number = 5000;
const hostname: string = 'http://127.0.0.1';

app.listen(port, () => {
    console.log(`Server running on ${hostname}:${port}`);
});
