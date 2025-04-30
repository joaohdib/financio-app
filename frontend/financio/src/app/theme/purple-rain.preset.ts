// src/theme/purple-rain.preset.ts
import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

/**
 * Preset baseado no Aura, porém:
 * – Paleta primária = violet
 * – Foco e highlights também em tons de violet
 * – Superfícies levemente arroxeadas no dark‑mode
 */
const RedStorm = definePreset(Aura, {
  /* 1️⃣  Cor primária completa - agora roxa */
  semantic: {
    primary: {
      50: '{purple.50}',
      100: '{purple.100}',
      200: '{purple.200}',
      300: '{purple.300}',
      400: '{purple.400}',
      500: '{purple.500}',   // cor principal
      600: '{purple.600}',
      700: '{purple.700}',
      800: '{purple.800}',
      900: '{purple.900}',
      950: '{purple.950}'
    },

    /* 2️⃣  Surfaces (opcional) */
    colorScheme: {
      light: {
        surface: {
          0: '#ffffff',
          50: '{gray.50}',
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
          0: '#0d0d0d',
          50: '{purple.950}',
          100: '{purple.900}',
          200: '{purple.800}',
          300: '{purple.700}',
          400: '{purple.600}',
          500: '{purple.500}',
          600: '{purple.400}',
          700: '{purple.300}',
          800: '{purple.200}',
          900: '{purple.100}',
          950: '{purple.50}'
        }
      }
    },

    focusRing: {
      width: '3px',
      style: 'solid',
      color: '{primary.color}',
      offset: '1px'
    }
  },

  components: {
      button: {
        extend: {
          accent: {
            color: '#FFFFFF',  // roxo vibrante (Ex: BlueViolet)
            inverseColor: '#8A2BE2'   // texto da mesma cor
          }
        },
        css: ({ dt }: { dt: (key: string) => string }) => `
          .p-button-accent {
            background: #ffffff;
            color: ${dt('button.accent.inverse.color')};
            border: 2px solid ${dt('button.accent.inverse.color')};
            border-radius: 15px; 
            font-weight: 600;
            padding: 0.5rem 1.25rem;
            transition: 0.2s ease-in-out;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            font-size: 40px;
            font-family: 'Inter', sans-serif;
          }
    
          .p-button-accent:hover {
            background: ${dt('button.accent.inverse.color')};
            color: #ffffff;
          }
        `
      }
  }
});

export default RedStorm;
