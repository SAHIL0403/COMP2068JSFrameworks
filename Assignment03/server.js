const connect = require('connect');
const url = require('url');

const app = connect();


function calculate(req, res) {
    const query = url.parse(req.url, true).query;
    const method = query.method;
    const x = parseFloat(query.x);
    const y = parseFloat(query.y);
    let result;

    switch(method) {
        case 'add':
            result = x + y;
            break;
        case 'subtract':
            result = x - y;
            break;
        case 'multiply':
            result = x * y;
            break;
        case 'divide':
            result = x / y;
            break;
        default:
            res.end("Error: Unsupported method. Use add, subtract, multiply, or divide.");
            return;
    }

    res.end(`Result: ${x} ${methodOperator(method)} ${y} = ${result}`);
}


function methodOperator(method) {
    switch(method) {
        case 'add': return '+';
        case 'subtract': return '-';
        case 'multiply': return '*';
        case 'divide': return '/';
        default: return '?';
    }
}

app.use('/lab2', calculate);

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
