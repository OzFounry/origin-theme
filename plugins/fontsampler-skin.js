export default ({ app: { head, router, context } }, inject) => {
    head.scripts.push({
      src: 'https://www.oztype.com/Font-Sampler/dist/fontsampler-skin.js'
      async: false,
      defer: true
    })
  })