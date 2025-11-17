import { defineConfig } from '@pandacss/dev';

export default defineConfig({
	presets: ['@pandacss/preset-panda'],

	preflight: true,

	include: ['./src/**/*.{js,ts,svelte}'],

	exclude: [],

	conditions: {
		dark: '.dark &'
	},

	theme: {
		extend: {
			semanticTokens: {
				colors: {
					// Surface colors
					surface: {
						value: { base: '{colors.white}', _dark: '{colors.gray.900}' }
					},
					'surface.muted': {
						value: { base: '{colors.gray.50}', _dark: '{colors.gray.800}' }
					},
					'surface.subtle': {
						value: { base: '{colors.gray.100}', _dark: '{colors.gray.700}' }
					},

					// Text colors
					text: {
						value: { base: '{colors.gray.900}', _dark: '{colors.white}' }
					},
					'text.muted': {
						value: { base: '{colors.gray.600}', _dark: '{colors.gray.400}' }
					},
					'text.subtle': {
						value: { base: '{colors.gray.500}', _dark: '{colors.gray.500}' }
					},

					// Border colors
					border: {
						value: { base: '{colors.gray.200}', _dark: '{colors.gray.700}' }
					},
					'border.muted': {
						value: { base: '{colors.gray.100}', _dark: '{colors.gray.800}' }
					},

					// Accent/Primary colors
					primary: {
						value: { base: '{colors.blue.600}', _dark: '{colors.blue.400}' }
					},
					'primary.hover': {
						value: { base: '{colors.blue.700}', _dark: '{colors.blue.300}' }
					},

					// Background
					bg: {
						value: { base: '{colors.white}', _dark: '{colors.gray.950}' }
					},
					'bg.muted': {
						value: { base: '{colors.gray.50}', _dark: '{colors.gray.900}' }
					}
				}
			}
		}
	},

	outdir: 'styled-system'
});
