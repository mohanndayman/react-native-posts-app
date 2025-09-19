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
