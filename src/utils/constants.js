export const YOUTUBE_API_URL = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key='+ process.env.REACT_APP_YOUTUBE_API_KEY;

export const YOUTUBE_SUGGESTIONS_API_URL = "https://thingproxy.freeboard.io/fetch/http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_API_URL = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key='+process.env.REACT_APP_YOUTUBE_API_KEY+'&q=';

export const FILTERS_LIST = ['All', 'React', 'Redux', 'Javascript', 'HTML', 'CSS', 'Bootstrap', 'TailwindCSS', 'MaterialUI', 'Git', 'DOM', 'Responsive Web', 'Github', 'LinkedIn', 'Frontend', 'React Hooks', 'Debouncing', 'Postman', 'Vercel', 'VSCode'];

export const TRANSLATE = 200;