// Netlify serverless function to fetch Instagram feed
exports.handler = async (event, context) => {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  const userId = process.env.INSTAGRAM_USER_ID || 'self';
  
  if (!accessToken) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Instagram access token not configured' })
    };
  }

  try {
    const response = await fetch(
      `https://graph.instagram.com/${userId}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${accessToken}&limit=12`
    );
    
    const data = await response.json();
    
    if (data.error) {
      console.error('Instagram API error:', data.error);
      return {
        statusCode: 400,
        body: JSON.stringify({ error: data.error.message })
      };
    }
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600' // Cache for 1 hour
      },
      body: JSON.stringify(data)
    };
  } catch (error) {
    console.error('Error fetching Instagram feed:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch Instagram feed' })
    };
  }
};
