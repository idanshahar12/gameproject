export default async function handler(request, response) {
  // כתובת ה-API החיצוני
  const externalApiUrl = 'https://www.freetogame.com/api/games';

  try {
    // 1. ביצוע הבקשה לשרת החיצוני
    const apiRes = await fetch(externalApiUrl);
    
    // 2. קבלת התוצאה כ-JSON
    const data = await apiRes.json();

    // 3. הגדרת כותרות (Headers) כדי למנוע בעיות Cache ו-CORS
    response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');
    response.status(200).json(data);
    
  } catch (error) {
    // טיפול בשגיאות
    console.error(error);
    response.status(500).json({ error: 'Failed to fetch data' });
  }
}