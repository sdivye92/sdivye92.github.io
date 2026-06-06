// Fetch Medium articles from RSS feed using rss2json service
(async function() {
    try {
        const mediumUsername = 'sdivye92';
        const rssUrl = `https://medium.com/feed/@${mediumUsername}`;
        const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Failed to fetch Medium articles');

        const data = await response.json();
        if (data.status !== 'ok' || !data.items) throw new Error('Invalid response');

        const articles = data.items.slice(0, 10).map(item => {
            // Parse date
            const date = new Date(item.pubDate);
            const dateStr = date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short'
            });

            return {
                title: item.title,
                link: item.link,
                date: dateStr
            };
        });

        // Update the Medium articles list
        const mediumList = document.getElementById('medium-articles');
        if (mediumList && articles.length > 0) {
            // Clear loading message
            mediumList.innerHTML = '';

            // Insert articles (already in latest to oldest order from RSS feed)
            articles.forEach(article => {
                const li = document.createElement('li');
                li.innerHTML = `<a href="${article.link}" target="_blank">${article.title}</a> · ${article.date}`;
                mediumList.appendChild(li);
            });
        }
    } catch (error) {
        console.warn('Could not fetch Medium articles:', error);
        const mediumList = document.getElementById('medium-articles');
        if (mediumList) {
            mediumList.innerHTML = '<li>Unable to load articles. <a href="https://medium.com/@sdivye92" target="_blank">Visit Medium</a></li>';
        }
    }
})();
