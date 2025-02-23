import { View, FlatList } from "react-native";
import posts from '../../../../assets/data/posts.json';
import PostListItems from '../../../components/postListItems';

export default function HomeScreen() {
    
    return(
        <View>
       <FlatList data={posts}
        renderItem={({ item }) => <PostListItems post={item}/>}
        />
        </View>
    )
}

