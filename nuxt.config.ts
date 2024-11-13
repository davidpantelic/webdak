// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },

  devServer: {
    port: 4000
  },

  css: [
    '~/assets/css/main.css'
  ],
  app: {
    head: {
      charset: 'utf-8',
      htmlAttrs: {
        lang: 'sr',
      },
      meta: [
        { property: 'og:image', content: '/social_share_1.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: '%pageTitle %separator %siteName' },
        { name: 'twitter:description', content: 'Webdak - moderna i pristupačna web rešenja.' },
        { name: 'twitter:image', content: '/social_share_1.jpg' },
        { name: 'msapplication-TileColor', content: '#081107' },
        { name: 'theme-color', content: '#081107' },
      ],
      link: [
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#99cc66' },
      ],
      templateParams: {
        separator: '-'
      }
    },
  },
  site: {
    url: 'https://webdak.rs',
    name: 'Webdak',
    description: 'Webdak - moderna i pristupačna web rešenja',
    defaultLocale: 'sr',
  },
  sitemap: {
    xslColumns: [
      { label: 'URL', width: '50%' },
      { label: 'Last Modified', select: 'sitemap:lastmod', width: '25%' },
      { label: 'Change Frequency', select: 'sitemap:changefreq', width: '25%' },
      // { label: 'Hreflangs', select: 'count(xhtml:link)', width: '12.5%' },
    ]
  },
  schemaOrg: {
    identity: {
      type: 'Company',
      name: 'Webdak',
      url: 'https://webdak.rs',
      logo: 'https://webdak.rs/logo_10.png'
    }
  },
  robots: {
    disallow: ['/secret', '/admin'],
  },
  ogImage: {
    enabled: false
  },
  runtimeConfig: {
    // Private keys (only available on the server side)
    mailgunApiKey: process.env.MAILGUN_API,
    mailgunDomain: process.env.MAILGUN_DOMAIN,
    
    // Public keys (accessible on both server and client if necessary)
    public: {
      googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
      // metapixel: {
      //   default: { id: process.env.FACEBOOK_PIXEL_CODE, pageView: '/' },
      // }
    },
  },
  image: {
    dir: 'assets/images',
  },
  googleFonts: {
    families: {
      Ubuntu: [300, 400, 500, 600, 700],
    },
    display: 'swap',
    prefetch: true,
    preload: true,
    preconnect: true,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    config: {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
            suse: ['SUSE', 'sans-serif']
          },
          colors: {
            'brand-black': '#0F1C0D',
            'brand-green-dark': '#254222',
            'brand-green-light': '#99cc66',
            'brand-cream': '#ece2b1',
            'brand-sky': '#cae4c5'
          },
          transitionDuration: {
            DEFAULT: '500ms'
          },
          screens: {
            'xs': '600px',
          },
        }
      }
    }
  },
  nitro: {
    prerender: {
      routes: ["/"],
    },
  },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    'nuxt-vitalizer',
    '@nuxtjs/google-fonts',
    '@nuxtjs/seo',
    'nuxt-site-config',
    '@nuxt/image',
  ],
})