# News Reader HARD INF@

This is a web application that allows users to search and view the latest news articles from various sources. The app provides a user-friendly interface where users can click on individual articles to view their content, with additional features such as search functionality and filtering.

## Features

- **Search News**: Users can search for news articles using keywords.
- **View Articles**: Click on any article from the search results to view detailed content.
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices.
- **Source Attribution**: Displays the article's author, publication date, and source.
- **External Links**: Provides a link to the full article on the original source.
- **Modern UI**: Styled with Tailwind CSS for a clean, modern look.

## Technologies Used

- **React**: Frontend JavaScript framework for building the user interface.
- **Tailwind CSS**: Utility-first CSS framework used for responsive and modern styling.
- **Axios**: Library for making HTTP requests to fetch news data.
- **React Router**: For handling navigation and routing within the app.
- **React Icons**: For including scalable vector icons.
- **News API**: External API used to fetch news articles based on the user's search.

## path
rc/
│
├── assets/             # Static assets such as images and icons
├── components/         # React components like SearchDisplay, NewsArticle, etc.
│   ├── InputForm.js    # Component to handle the search input
│   ├── NewsArticle.js  # Component for displaying individual news article
│   └── SearchDisplay.js # Component for displaying searched news articles
│
├── App.js              # Main application component
├── index.js            # Entry point of the application
├── NavigationBar.js    # Component for top navigation
│
└── styles.css          # Tailwind CSS configuration and custom stylesj