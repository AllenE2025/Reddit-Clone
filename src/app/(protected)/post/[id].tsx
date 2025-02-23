import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import post from '../../../../assets/data/posts.json';
import PostListItems from "../../../components/postListItems";

export default function DetailedPost() {
    const { id } = useLocalSearchParams()

    const detailedPost = post.find((post) => post.id === id)

    if(!detailedPost) {
        return <Text>Post Not Found</Text>
    }

    return(
        <View>
            <PostListItems post={detailedPost}/>
        </View>
    )
}