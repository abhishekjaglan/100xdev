import { Hono } from 'hono'

const app = new Hono()

async function authMiddleware(c: any, next: any){
  if(c.req.header('Authorization')){
    await next();
  }else{
    return c.json({msg: 'Sorry not allowed'});
  }
}

app.post('/:id/', async (c) => {
  const body = await c.req.json()
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("id"));
  console.log(c.req.param('id'));

  return c.json({mag:'Hello Hono!'})
})

export default app