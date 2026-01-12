import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // הגדרה עבור כל בקשה שמתחילה ב-/api
      '/api': {
        // הכתובת של שרת ה-API שלך
        target: 'https://www.freetogame.com/api',
        // שינוי המקור (origin) של הבקשה לכתובת היעד
        changeOrigin: true,
        // אופציונלי: מחיקת ה-/api מתחילת ה-URL לפני שליחתו לשרת
        // לדוגמה, /api/users יהפוך ל- /users
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});