import Router from 'koa-router'
import user from './user.js'

const router = new Router()
router.get('/',ctx=>{
    ctx.body ='hello koa'
})
router.use('/user',user.routes(),user.allowedMethods())

export default router