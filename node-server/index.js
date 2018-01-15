const Koa = require('koa');
const serve = require('koa-static');
const send = require('koa-send');
const compress = require('koa-compress');

const app = new Koa();

const router = require('koa-router')();

app.use(compress());

app.use(serve('./dist'));

router.get('/*', async (ctx) => {
  await send(ctx, './dist/index.html');
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(8080);

console.log('listening on port 8080');
