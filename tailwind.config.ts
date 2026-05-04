import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'], theme: { extend: { fontFamily: { sans: ['var(--font-inter)', 'Inter', 'sans-serif'] }, colors: { ink: '#050505', muted: '#a3a3a3', line: 'rgba(255,255,255,.14)' } } }, plugins: [] };
export default config;
