export default ({ app: { head, router, context } }, inject) => {
    head.scripts.push({
      src: 'https://www.oztype.com/Font-Sampler/dist/loader.js'
      defer: true
    })
  })
