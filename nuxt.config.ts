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
        { property: 'og:image', content: '/social_share.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: '%pageTitle %separator %siteName' },
        { name: 'twitter:description', content: 'Webdak - moderna web resenja.' },
        { name: 'twitter:image', content: '/social_share.jpg' },
        { name: 'msapplication-TileColor', content: '#081107' },
        { name: 'theme-color', content: '#081107' },
      ],
      link: [
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#acbc90' },
      ],
      templateParams: {
        separator: '-'
      }
    },
  },
  site: {
    url: 'https://webdak.rs',
    name: 'Webdak',
    description: 'Webdak - moderna web resenja',
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
      logo: 'https://webdak.rs/webdak_logo.png'
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
  googleFonts: {
    families: {
      SUSE: [100, 200, 300, 400, 500, 600, 700, 800],
      Inter: [100, 200, 300, 400, 500, 600, 700, 800],
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
            'brand-black': '#081107',
            'brand-grey-1': '#4A4A4A',
            'brand-grey-2': '#D3D3D3',
            'brand-green': '#acbc90',
            'brand-yellow': '#FFF8DC'
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