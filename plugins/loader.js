export default ({ app: { head, router, context } }, inject) => {
    head:{ script: [ { src: 'https://www.oztype.com/Font-Sampler/dist/fontsampler.js', type: 'text/javascript', body: true, defer: true, mode: 'client' }, 
                    { src: 'https://www.oztype.com/Font-Sampler/dist/fontsampler-skin.js', type: 'text/javascript', body: true, defer: true, mode: 'client'}, 
                    { src: 'https://www.oztype.com/Font-Sampler/dist/loader.js', type: 'text/javascript', body: true, defer: true, mode: 'client'} ] },
  })
