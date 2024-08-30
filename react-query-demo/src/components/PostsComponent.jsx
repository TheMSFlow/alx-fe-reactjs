import { useQuery } from 'react-query';

// Define a fetch function that can be used to fetch data from an API
const fetchPosts = async () => {
    const res = await fetch(' https://jsonplaceholder.typicode.com/posts');
    return res.json();
};

const PostsComponent = () => {
    // Use the useQuery hook to handle data fetching and caching
    const { data, isError, isLoading } = useQuery('fetchPosts', fetchPosts);

    // Log the data to the console to inspect it
    console.log(data);
    
    // Handle loading state
    if (isLoading) return <div>Loading...</div>;
    // Handle error state
    if (isError) return <div>Error loading data</div>;

    // Render the fetched data
    return (
        <div style = {{
            paddingLeft: "2rem"
        }}>
            {data.map(item => (
                <div key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
            </div>
            ))}
        </div>
    );
};

export default PostsComponent;