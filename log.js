module.exports = options => {
  if (!options.formate) {
    console.log('需要传递 formate 函数')
  }

  return async(ctx, next) => {
    console.log(options.formate(ctx.url))

    await next()
  }
}
