import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Photo-gallery/', // 리포지토리 이름을 적어줍니다. 앞뒤에 / 필수!
})