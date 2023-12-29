import { 
  defineConfig, 
  presetAttributify, 
  presetIcons, 
  presetTypography, 
  presetUno, 
  presetWebFonts, 
  transformerDirectives 
} from 'unocss'

export default defineConfig({
  shortcuts: {
    'border-base': 'border-gray-200 dark:border-gray-800',
    'text-faded': 'text-gray6:100 dark:text-gray:100',
  },
  theme: {
    // Extend theme here
    colors: {
      primary: {
        DEFAULT: '#00DC82',
      },
    },
  },
  presets: [
    presetUno(),
    presetIcons(),
    presetAttributify(),
    presetWebFonts({
      provider: 'bunny',
      fonts: {
        sans: 'DM Sans',
        mono: 'DM Mono',
      },
    }),
    presetTypography(),
  ],
  transformers: [
    transformerDirectives()
  ]
})
