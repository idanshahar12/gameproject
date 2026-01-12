// קובץ: api/game.js

export default async function handler(request, response) {
  // שליפת ה-ID מתוך הפרמטרים של הבקשה (ה-Query String)
  const { id } = request.query;

  // בדיקת תקינות
  if (!id) {
    return response.status(400).json({ error: 'Game ID is required' });
  }

  const externalApiUrl = `https://www.freetogame.com/api/game?id=${id}`;

  try {
    const apiRes = await fetch(externalApiUrl);
    
    // אם המשחק לא נמצא או שיש שגיאה ב-API החיצוני
    if (!apiRes.ok) {
        return response.status(apiRes.status).json({ error: 'Game not found or API error' });
    }

    const data = await apiRes.json();

    response.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
    response.status(200).json(data);
    
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: 'Failed to fetch game data' });
  }
}