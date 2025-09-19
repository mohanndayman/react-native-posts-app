## Features

- **Infinite Scrolling**: Load posts progressively as you scroll
- **Pull-to-Refresh**: Refresh the posts list by pulling down
- **Error Handling**: Graceful error states with retry functionality
- **Modern UI**: Clean, contemporary design with smooth animations
- **Performance Optimized**: Uses React.memo, useCallback, and FlatList optimizations
- **Responsive Design**: Works seamlessly on both iOS and Android

- **React Native** - Cross-platform mobile development
- **Expo** - Development platform and tools

## Project Structure

```
src/
├── api/
│   ├── client.js          # API client with error handling
│   └── posts.js           # Posts API service
├── components/
│   ├── PostCard.js        # Reusable post card component
│   ├── Loader.js          # Loading component
│   └── ErrorMessage.js    # Error handling component
├── hooks/
│   └── usePosts.js        # Custom hook for posts with pagination
├── screens/
│   └── PostsScreen.js     # Main posts screen
└── theme/
    ├── colors.js          # Color palette
    └── spacing.js         # Spacing, border radius,
```
<img width="410" height="844" alt="image" src="https://github.com/user-attachments/assets/d3082bac-5c7a-43db-9588-875bfbe6eee4" />
<img width="349" height="660" alt="image" src="https://github.com/user-attachments/assets/c3381043-5a11-4c07-a204-30bea2b3b986" />

