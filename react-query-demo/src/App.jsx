import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from './components/PostscComponent';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PostsComponent />
    </QueryClientProvider>
  );
}