import { useState } from "react";
import { View, Image, Text, Pressable, StyleSheet, TextInput, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from '@expo/vector-icons/Feather';
import { Link, router } from "expo-router";
import { selectedGroupAtom } from "../../../atoms";
import { useAtom } from "jotai";

export default function Create() {

    const [title, setTitle] = useState<string>("")
    const [body, setBodyText] = useState<string>("")
    const [group, setGroup] = useAtom(selectedGroupAtom)

    const goBack = () => {
        setTitle("")
        setBodyText("")
        setGroup(null)
        router.back()
    }

    return(
        <SafeAreaView style={{ backgroundColor: "white", flex: 1, paddingHorizontal: 10}}>
            <View style={{ flexDirection: "row", alignItems: "center"}}>
            <Feather name="x" size={24} color="black" onPress={() => goBack()}/>
            <Pressable onPress={() => console.error("Pressed")} style={{ marginLeft: "auto"}}>
            <Text style={styles.postText}>
                    Post</Text>
            </Pressable>
            </View>

            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} 
            style={{ flex: 1}}>
                <ScrollView showsVerticalScrollIndicator={false} style={{ paddingVertical: 10}}>

            <Link href={'groupSelector'} asChild>
            <Pressable style= {styles.communityContainer}>
                {group ? (
                    <>
                    <Image source={{ uri: group.image}} style={{ width: 20, height: 20, borderRadius: 10}}/>
                    <Text style={{ fontWeight: '600'}}>{group.name}</Text>
                    </>
                ) : (
                    <>
                    <Text style={styles.rStyles}>/r</Text>
                    <Text style={{ fontWeight: '600'}}>Select a community</Text>
                    </>
                )}
            </Pressable>
            </Link>

            <TextInput
            placeholder="Title"
            style={{ fontSize: 20, fontWeight: 'bold', paddingVertical: 20}}
            value={title}
            onChangeText={setTitle}
            multiline
            scrollEnabled={false}
            />


            <TextInput
            placeholder="body text"
            value={body}
            onChangeText={setBodyText}
            multiline
            scrollEnabled={false}
            />
            </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    postText: {
    color: "white", 
    backgroundColor: "#115BCA", 
    fontWeight: "bold", 
    paddingVertical: 2, 
    paddingHorizontal: 7,
    borderRadius: 10
    },
    rStyles: {
    backgroundColor:'black',
    color: 'white',
    paddingVertical: 1,
    paddingHorizontal: 5,
    borderRadius: 10,
    fontWeight: 'bold',
    },
    communityContainer: {
    backgroundColor: '#EDEDED',
    flexDirection: 'row',
    padding: 10,
    borderRadius: 20,
    gap: 5,
    alignSelf: 'flex-start',
    margin: 10,
    }
})