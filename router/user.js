import Router from 'koa-router'

const user = new Router()

user.get('/',async(ctx)=>{
    ctx.body = '用户管理'
})
user.get('/id/:id',ctx=>{
    ctx.body = ctx.params
})
user.get('/query',ctx=>{
    ctx.body = ctx.query
})
user.post('/',ctx=>{
    ctx.body = {
        body:ctx.request.body,
        file:ctx.request.files
    }
})

export default user