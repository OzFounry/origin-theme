export default ({ app }) => {
    /*
     ** Only run on client-side and only in production mode
     */
    if (process.env.NODE_ENV !== 'production') {
      return;
    }window.onload = function() {
        var fonts = [
        {
                "name": "Milago Thin", 
                "files": ["https://www.oztype.com/Font-Sampler/fonts/Milago/Milago-Thin.woff"],
                "features": ["case", "ccmp", "liga", "dlig", "frac", "hist", "kern", "liga", "lnum", "locl", "onum", "ordn", "salt", "sinf", "subs", "sups", "ss01", "ss02", "ss03", "ss04"],
                "language": "en-gb"
            }, 
        {
                "name": "Milago Thin Display", 
                "files": ["https://www.oztype.com/Font-Sampler/fonts/Milago/Milago-ThinRound.woff"],
                "features": ["case", "ccmp", "liga", "dlig", "frac", "hist", "kern", "liga", "lnum", "locl", "onum", "ordn", "salt", "sinf", "subs", "sups", "ss01", "ss02", "ss03", "ss04"],
                "language": "en-gb"
            }, 
        {
                "name": "Milago Light", 
                "files": ["https://www.oztype.com/Font-Sampler/fonts/Milago/Milago-Light.woff"],
                "features": ["case", "ccmp", "liga", "dlig", "frac", "hist", "kern", "liga", "lnum", "locl", "onum", "ordn", "salt", "sinf", "subs", "sups", "ss01", "ss02", "ss03", "ss04"],
                "language": "en-gb"
            }, 
            {
                "name": "Milago Light Display", 
                "files": ["https://www.oztype.com/Font-Sampler/fonts/Milago/Milago-LightRound.woff"],
                "features": ["case", "ccmp", "liga", "dlig", "frac", "hist", "kern", "liga", "lnum", "locl", "onum", "ordn", "salt", "sinf", "subs", "sups", "ss01", "ss02", "ss03", "ss04"],
                "language": "en-gb"
            }, 
            {
                "name": "Milago Regular", 
                "files": ["https://www.oztype.com/Font-Sampler/fonts/Milago/Milago-Regular.woff"],
                "features": ["case", "ccmp", "liga", "dlig", "frac", "hist", "kern", "liga", "lnum", "locl", "onum", "ordn", "salt", "sinf", "subs", "sups", "ss01", "ss02", "ss03", "ss04"],
                "language": "en-gb"
            }, 
            {
                "name": "Milago Regular Display", 
                "files": ["https://www.oztype.com/Font-Sampler/fonts/Milago/Milago-Round.woff"],
                "features": ["case", "ccmp", "liga", "dlig", "frac", "hist", "kern", "liga", "lnum", "locl", "onum", "ordn", "salt", "sinf", "subs", "sups", "ss01", "ss02", "ss03", "ss04"],
                "language": "en-gb"
            }, 
            {
                "name": "Milago Medium", 
                "files": ["https://www.oztype.com/Font-Sampler/fonts/Milago/Milago-Medium.woff"],
                "features": ["case", "ccmp", "liga", "dlig", "frac", "hist", "kern", "liga", "lnum", "locl", "onum", "ordn", "salt", "sinf", "subs", "sups", "ss01", "ss02", "ss03", "ss04"],
                "language": "en-gb"
            }, 
            {
                "name": "Milago Medium Display", 
                "files": ["https://www.oztype.com/Font-Sampler/fonts/Milago/Milago-MediumRound.woff"],
                "features": ["case", "ccmp", "liga", "dlig", "frac", "hist", "kern", "liga", "lnum", "locl", "onum", "ordn", "salt", "sinf", "subs", "sups", "ss01", "ss02", "ss03", "ss04"],
                "language": "en-gb"
            }, 
            {
                "name": "Milago Bold", 
                "files": ["https://www.oztype.com/Font-Sampler/fonts/Milago/Milago-Bold.woff"],
                "features": ["case", "ccmp", "liga", "dlig", "frac", "hist", "kern", "liga", "lnum", "locl", "onum", "ordn", "salt", "sinf", "subs", "sups", "ss01", "ss02", "ss03", "ss04"],
                "language": "en-gb"
            }, 
            {
                "name": "Milago Bold Display", 
                "files": ["https://www.oztype.com/Font-Sampler/fonts/Milago/Milago-BoldRound.woff"],
                "features": ["case", "ccmp", "liga", "dlig", "frac", "hist", "kern", "liga", "lnum", "locl", "onum", "ordn", "salt", "sinf", "subs", "sups", "ss01", "ss02", "ss03", "ss04"],
                "language": "en-gb"
            }, 
            {
                "name": "Milago Black", 
                "files": ["https://www.oztype.com/Font-Sampler/fonts/Milago/Milago-Black.woff"],
                "features": ["case", "ccmp", "liga", "dlig", "frac", "hist", "kern", "liga", "lnum", "locl", "onum", "ordn", "salt", "sinf", "subs", "sups", "ss01", "ss02", "ss03", "ss04"],
                "language": "en-gb"
            }, 
            { 
                "name": "Milago Black Display", 
                "files": ["https://www.oztype.com/Font-Sampler/fonts/Milago/Milago-BlackRound.woff"],
                "features": ["case", "ccmp", "liga", "dlig", "frac", "hist", "kern", "liga", "lnum", "locl", "onum", "ordn", "salt", "sinf", "subs", "sups", "ss01", "ss02", "ss03", "ss04"],
                "language": "en-gb"
            }
        ],
        options = {
            order: ["tester", ["fontfamily"], ["fontsize"], "opentype"],
            ui: {
                fontfamily: {
                    // "init": "Work Sans SemiBold"
                    "init": "Milago Regular"
                },
                
                
                opentype: {
                    "choices": ["case", "ccmp", "liga", "dlig", "frac", "hist", "kern", "liga", "lnum", "locl", "onum", "ordn", "salt", "sinf", "subs", "sups", "ss01", "ss02", "ss03", "ss04"]
                },
                
                    
               
            }
        }
                
        var fs = new Fontsampler(document.getElementById("Milago-Sampler"), fonts, options)
        FontsamplerSkin(fs)
        fs.init()
    }}