import { View, Text, Image, StyleSheet } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { formatDistanceToNowStrict } from "date-fns";
import { Post } from '../types';
import { Link } from "expo-router";

type PostListItemsProps = {
    post: Post
}
export default function PostListItems({ post }: PostListItemsProps) {
    
    return(
        <Link href={`/post/${post.id}`}>
        <View style={{ paddingHorizontal: 15, paddingVertical: 10}}>
            <View style={{ flexDirection: "row", gap: 10}}>
            <Image source={{ uri: post.group.image }} style={{ width: 20, height: 20, borderRadius: 10}} />
            <Text style={{ fontWeight: "bold" }}>{post.group.name}</Text>
            <Text style={{ color: "grey" }}>{formatDistanceToNowStrict(new Date(post.created_at))}</Text>
            <View style={{ marginLeft: "auto"}}>
            <Text style={styles.joinButtonText}>Join</Text>
            </View>
            </View>
            <Text style={{ fontWeight: "bold", fontSize: 17, letterSpacing: 0.5}}>{post.title}</Text>
            {post.image && (
                <Image source={{ uri: post.image}} style={{ width: "100%", aspectRatio: 4/3, borderRadius: 15}} />
            )}
            {!post.image && post.description && (
                <Text numberOfLines={4}>{post.description}</Text>
            )}

            <View style={{ flexDirection: "row"}}>
            <MaterialCommunityIcons name="arrow-up-bold" size={24} color="black" />
            <Text>{post.upvotes}</Text>
            <MaterialCommunityIcons name="arrow-down-bold" size={24} color="black" />
            <MaterialCommunityIcons name="message" size={24} color="black" />
            <Text>{post.nr_of_comments}</Text>
            <View style={{ flexDirection: "row", marginLeft: "auto"}}>
            <MaterialCommunityIcons name="trophy" size={24} color="black" />
            <MaterialCommunityIcons name="share" size={24} color="black" />
            </View>
            </View>
        </View>
        </Link>
    )
}

const styles= StyleSheet.create({

    joinButtonText: {
    
    backgroundColor: "#0d469b",
    color: "white",
    paddingVertical: 2,
    paddingHorizontal: 7,
    borderRadius: 10,
    fontWeight: "bold"

    }

})