const Koa = require('koa');
const serve = require('koa-static');
const send = require('koa-send');
const path = require('path');

const app = new Koa();

const router = require('koa-router')();

/*
app.use(express.static(path.join('./dist')));

app.get('/*', (req, res) => {
  res.sendFile(path.join('./dist', 'index.html'));
});
*/

app.use(serve('./dist'));

router.get('/*', async (ctx, next) => {
  // ctx.router available
  await send(ctx, './dist/index.html');
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(9000);

console.log('listening on port 9000');
