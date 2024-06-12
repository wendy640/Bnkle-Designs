# Project Setup
Prerequisites
- Node.js (version 14.x or higher)
- npm (version 6.x or higher)

## Installation
1. Clone the repository
  <> git clone https://github.com/your-username/bnkle-frontend-test.git
  cd bnkle-frontend-test </>

2. Install dependencies:
  npm install

3. Run the project:
  npm start

## Project Structure
1. src/components: Contains React components used throughout the application.
2. src/redux: Contains Redux setup including actions, reducers, and store       configuration.
3. src/pages: Contains page components such as Home and Analytics.
4. src/App.tsx: Main application component where routing is set up.
5. src/index.tsx: Entry point of the application.

## Features
- Fetch and display data from an API.
- Responsive design.
- Hover state and modal for card details.
- State management with Redux Toolkit.
- Analytics page to track card clicks using React Router v6.
- Custom CSS for styling without using component libraries.

## State Management
1. Implemented using Redux Toolkit:
2. Actions and reducers are defined in src/components/redux/reducers/cardAnalyticsSlice.ts.
3. Store is configured in src/component/redux/store.ts.

## Routing
- React Router v6 is used for navigation:
1. Home page: /
2. Analytics page: /analytics

## Development Notes
- Used Lato font from Google Fonts.
- Container width is set to 1200px.
- No third-party component libraries or CSS frameworks were used.





