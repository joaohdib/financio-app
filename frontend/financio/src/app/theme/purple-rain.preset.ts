// src/theme/purple-rain.preset.ts
import { definePreset } from '@primeng/themes';
import Aura             from '@primeng/themes/aura';

/**
 * Preset baseado no Aura, porém:
 * – Paleta primária = violet
 * – Foco e highlights também em tons de violet
 * – Superfícies levemente arroxeadas no dark‑mode
 */
const PurpleRain = definePreset(Aura, {
  /* 1️⃣  Cor primária completa */
  semantic: {
    primary: {
      50 : '{violet.50}',
      100: '{violet.100}',
      200: '{violet.200}',
      300: '{violet.300}',
      400: '{violet.400}',
      500: '{violet.500}',   // cor principal
      600: '{violet.600}',
      700: '{violet.700}',
      800: '{violet.800}',
      900: '{violet.900}',
      950: '{violet.950}'
    },

    /* 2️⃣  Surfaces (opcional) */
    colorScheme: {
      light: {
        surface: {
          0  : '#ffffff',
          50 : '{gray.50}',
          100: '{gray.100}',
          200: '{gray.200}',
          300: '{gray.300}',
          400: '{gray.400}',
          500: '{gray.500}',
          600: '{gray.600}',
          700: '{gray.700}',
          800: '{gray.800}',
          900: '{gray.900}',
          950: '{gray.950}'
        }
      },
      dark: {
        /* um toque roxo nas superfícies escuras */
        surface: {
          0  : '#0d0d0d',
          50 : '{violet.950}',
          100: '{violet.900}',
          200: '{violet.800}',
          300: '{violet.700}',
          400: '{violet.600}',
          500: '{violet.500}',
          600: '{violet.400}',
          700: '{violet.300}',
          800: '{violet.200}',
          900: '{violet.100}',
          950: '{violet.50}'
        }
      }
    },

    /* 3️⃣  Focus ring global – roxo e mais espesso */
    focusRing: {
      width : '3px',
      style : 'solid',
      color : '{primary.color}',
      offset: '1px'
    }
  },

  /* 4️⃣  Extra: botão “accent” laranja‑contraste */
  components: {
    button: {
      extend: {
        accent: {
          color       : '{purple.500}',   // roxo de contraste
          inverseColor: '#ffffff'
        }
      },
      css: ({ dt }: { dt: (key: string) => string }) => `
        .p-button-accent {
          background: ${dt('button.accent.color')};
          color:      ${dt('button.accent.inverse.color')};
          transition: .2s;
        }
      `
    }
  }
});

export default PurpleRain;
