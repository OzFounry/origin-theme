import swell from 'swell-js';
import settings from './config/settings.json';
import { getGoogleFontConfig } from './modules/swell-editor/utils';
import { getLangSettings } from './modules/swell/lang/utils';
import getRoutes from './modules/swell/utils/getRoutes';

const isProduction = process.env.NODE_ENV === 'production';
const editorMode = process.env.SWELL_EDITOR === 'true';
const storeId = process.env.SWELL_STORE_ID || settings.store.id;
const publicKey = process.env.SWELL_PUBLIC_KEY || settings.store.public_key;
const storeUrl = process.env.SWELL_STORE_URL || settings.store.url;

export default async () => { 
  swell.init(storeId, publicKey, {
    useCamelCase: true,
    url: storeUrl,
    previewContent: editorMode || !isProduction,
  });

  await swell.settings.load();

  const currentSettings = await swell.settings.get();
  const loadingColor = await swell.settings.get('colors.accent');
  const gtmId = await swell.settings.get('analytics.gtmId');
  const storeName = await swell.settings.get('store.name');
  const i18n = await getLangSettings(swell);

  return {
    target: editorMode ? 'server' : 'static',
    build: {
      analyze: !isProduction,
    },
    vue: {
      config: {
        devtools: !isProduction,
        productionTip: false,
      },
    },
    
    /*
     ** Make all components in the /components folder available in templates without
     *  needing to import them explicitly or define them on the Vue instance object.
     */
    components: true,
   head:{
    script: [
      { src: 'https://www.oztype.com/Font-Sampler/dist/fontsampler-skin.js', type: 'text/javascript', body: true, defer: true },
      { src: 'https://www.oztype.com/Font-Sampler/dist/fontsampler.js', type: 'text/javascript', body: true, defer: true},
      { src: 'https://www.oztype.com/Font-Sampler/dist/loader.js', type: 'text/javascript', body: true, defer: true}
   ]
   },
script: [
          {
            innerHTML: `window.onload = function() {
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
}`,
            type: 'text/javascript',
            charset: 'utf-8',
          },
        ],
        __dangerouslyDisableSanitizers: ['script', 'innerHTML'],
    /*
     ** Set the progress-bar color
     */
     head:{
    script: [
      { src: 'https://www.oztype.com/Font-Sampler/dist/fontsampler-skin.js', type: 'text/javascript', body: true, defer: true },
      { src: 'https://www.oztype.com/Font-Sampler/dist/fontsampler.js', type: 'text/javascript', body: true, defer: true},
      { src: 'https://www.oztype.com/Font-Sampler/dist/loader.js', type: 'text/javascript', body: true, defer: true}
   ]
   },
    loading: {
      color: loadingColor,
      continuous: true,
    },

    /*
     ** Vue plugins to load before mounting the App
     */
    
    plugins: [
      { src: '~/plugins/global-scripts', mode: 'client' },
      { src: '~/plugins/vue-credit-card-validation', mode: 'client' },
      { src: '~/plugins/directives', mode: 'client' },
      { src: '~/plugins/swell-lang.js' },
      { src: '~/plugins/filters.js' },
    ],
 
    /*
     ** Nuxt.js modules
     */
    modules: [
      ['@nuxtjs/gtm'],

      // [
      //   '@nuxtjs/sentry',
      //   /*
      //    ** Logs app errors with Sentry's browser and node SDKs.
      //    *
      //    *  You can use environment variables or the object below to set config options.
      //    *  See https://github.com/nuxt-community/sentry-module for all available
      //    *  options, defaults, and environment variables.
      //    */
      //   {
      //     // dsn: '', // or SENTRY_DSN in .env
      //     // config: {}
      //   },
      // ],

      /*
       ** Generates a sitemap.xml
       *
       *  Automatically generate or serve dynamic sitemap.xml for Nuxt projects!
       *  See https://github.com/nuxt-community/sentry-module for all available
       *  options, defaults, and environment variables.
       */
      '@nuxtjs/sitemap',
    ],

    buildModules: [
      // https://go.nuxtjs.dev/eslint
      '@nuxtjs/eslint-module',
      // https://go.nuxtjs.dev/stylelint
      '@nuxtjs/stylelint-module',
      [
        /*
         ** Generate dynamic routes for @nuxtjs/sitemap
         *
         */
        '~/modules/swell/utils/generateDynamicRoutes',
      ],

      [
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
        /*
         ** Adds TailwindCSS (including PurgeCSS)
         *
         *  See https://tailwindcss.nuxtjs.org/ for config options.
         */
        {
          // Put your config overrides here
        },
      ],

      [
        '@nuxtjs/google-fonts',
        /*
         ** Parses Google Font families and loads them via stylesheet.
         *
         *  The config object is generated by the swell-editor module.
         *  See https://github.com/nuxt-community/google-fonts-module if you want
         *  to eject or provide your own config options.
         */
        getGoogleFontConfig(currentSettings),
      ],

      [
        '~/modules/swell-editor',
        /*
         ** Provides communication and utilitiy functions for interfacing
         *  with Swell's storefront editor and fetching settings/content.
         */
        {
          useEditorSettings: editorMode,
          settings: currentSettings,
        },
      ],

      [
        '~/modules/swell',
        /*
         ** Initializes Swell.js SDK and injects it into Nuxt's context.
         */
        {
          storeId,
          publicKey,
          storeUrl,
          previewContent: editorMode || !isProduction,
          settings: currentSettings,
        },
      ],

      ['@nuxtjs/i18n'],

      [
        '@nuxtjs/pwa',
        /*
         ** Provides PWA (Progressive Web App) functionality including app icons,
         *  SEO metadata, manifest.json file, and offline caching.
         *
         *  Use the object below to set config options.
         *  See https://pwa.nuxtjs.org/ for all available options and defaults.
         */
      ],
    ],

    gtm: {
      id: gtmId,
      enabled: !!gtmId && isProduction,
    },

    pwa: {
      manifest: false,
      meta: {
        name: storeName,
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern:
              `${process.env.CDN_HOST}/*` || 'https://cdn.schema.io/*',
          },
        ],
      },
    },

    i18n,

    sitemap: {
      hostname: storeUrl,
      gzip: true,
      i18n: true,
      exclude: ['/account/**', '/*/account/**'],
    },

    generate: {
      exclude: [/^\/?([a-z]{2}-?[A-Z]{2}?)?\/account/],
      fallback: true, // Fallback to the generated 404.html,
      concurrency: 1,
      interval: 25,
      crawler: false,
      routes: () => getRoutes(swell),
    },

    /*
     ** Extend default Nuxt routes to add page aliases
     */
    router: {
      trailingSlash: true,
      extendRoutes(routes, resolve) {
        // Rewrite to use the pages/_slug.vue component for home page, since the
        // content type is the same. If you want to have a unique template,
        // create a pages/index.vue and remove this route definition.
        routes.push({
          name: 'index',
          path: '/',
          component: resolve(__dirname, 'pages/_slug.vue'),
        });
      },
    },

    /*
     ** Extend default Nuxt server options
     */
    server: {
      host: process.env.HOST || 'localhost',
      port: process.env.PORT || 3333,
    },

    env: {
      cdnHost: process.env.CDN_HOST || 'https://cdn.schema.io',
    },
  };
};
