const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

const stripe = require('stripe')('sk_test_EfDSpJBzcAhBRL8b8deMGcUL00gPAtiGof');

(async () => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1099,
    currency: 'cad',
    payment_method_types: ['card'],
  });
})();

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});