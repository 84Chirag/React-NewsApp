# Hot News App

## Overview

Hot News App is a web application that aggregates and displays news articles based on user-selected categories and regions. It utilizes the Google News API for fetching real-time news data and offers a seamless browsing experience with infinite scrolling.

## Features

- **Category Selection:** Users can choose from various news categories such as General, Business, Entertainment, Health, Science, Sports, and Technology.
  
- **Region Selection:** News articles can be filtered based on the selected country code (e.g., IN for India, US for United States).

- **Dark/Light Mode:** The app supports a dark and light mode toggle for personalized viewing preferences.

- **Infinite Scrolling:** Implemented using the `react-infinite-scroll-component` to dynamically load more news articles as the user scrolls down.

## Functionality

The application fetches news data from the Google News API using asynchronous JavaScript (async/await). It handles API requests, updates state using React's `useState` and `useEffect` hooks, and displays news articles using reusable components.

## Screenshots

![Hot News App Screenshot]('./src/components/hotnews.png')

## Installation

1. Clone the repository:
    git clone https://github.com/your-username/your-repo.git
    cd your-repo

2. Install dependencies

3. Set up environment variables:
- Create a `.env` file in the root directory.
- Add your Google News API key:
  ```
  REACT_APP_GOOGLE_NEWS_API_KEY=your_google_news_api_key
  ```

4. Start the development server


5. Open your browser and navigate to `http://localhost:3000` to view the app.

## Usage

- Select a category and region to fetch news articles.
- Toggle between dark and light modes for different viewing preferences.
- Scroll through the articles to load more dynamically using infinite scrolling.

## Technologies Used

- React
- JavaScript (ES6+)
- HTML5/CSS3
- `react-infinite-scroll-component`
- Google News API

## Credits

- **Loading Spinner:** Implemented using a custom `Loading` component.
- **Newitems Component:** Displays individual news items with titles, descriptions, images, and links.



