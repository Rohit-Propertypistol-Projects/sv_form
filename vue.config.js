module.exports = {
  productionSourceMap: false,
  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'public/service-worker.js',
      exclude: ['service-worker.js']
    },
    manifestOptions: {
      description: 'crm',
      lang: 'en-IN',
      orientation: 'portrait-primary',
      background_color: "#fff",
      name: 'crm',
      short_name: 'crm',
      display: 'standalone',
      start_url: '.',
      theme_color: '#F07B00',
      icons: [
        {
          'src': './img/icons/android-chrome-192x192.png',
          'sizes': '192x192',
          'type': 'image/png'
        },
        {
          'src': './img/icons/android-chrome-512x512.png',
          'sizes': '512x512',
          'type': 'image/png'
        },
        {
          'src': './img/icons/android-chrome-maskable-192x192.png',
          'sizes': '192x192',
          'type': 'image/png',
          'purpose': 'maskable'
        },
        {
          'src': './img/icons/android-chrome-maskable-512x512.png',
          'sizes': '512x512',
          'type': 'image/png',
          'purpose': 'maskable'
        }
      ],
    },
    appleMobileWebAppCapable: 'yes',
    msTileColor: '#fff',
    iconPaths: {
      msTileImage: './img/icons/msapplication-icon-144x144.png',
      maskIcon: './img/icons/safari-pinned-tab.svg',
      appleTouchIcon: './img/icons/apple-touch-icon-152x152.png',
      favicon32: './img/icons/favicon-32x32.png',
      favicon16: './img/icons/favicon-16x16.png'
    }
  }
}