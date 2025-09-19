import { StatusBar } from "expo-status-bar";
import PostsScreen from "./src/screens/PostsScreen";

export default function App() {
  return (
    <>
      <PostsScreen />
      <StatusBar style="dark" />
    </>
  );
}
