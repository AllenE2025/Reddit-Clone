import { View, Text, SafeAreaView, TextInput, FlatList, Pressable, Image } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import { router } from "expo-router";
import { useState } from "react";
import groups from '../../../assets/data/groups.json';
import { selectedGroupAtom } from "../../atoms";
import { useSetAtom } from "jotai"; 
import { Group } from "../../types";

export default function GroupSelector() {

const [searchValue, setSearchValue] = useState<string>('')
const setGroup = useSetAtom(selectedGroupAtom)

const filteredGroups = groups.filter((group) => group.name.toLowerCase().includes(searchValue.toLowerCase()))
const onGroupSelected = (group : Group) => {
    setGroup(group);
    router.back()
}
    return(
        <SafeAreaView style={{ paddingHorizontal: 10, flex: 1}}>
        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
        <Feather name="x" size={24} color="black" onPress={() => router.back()}/>
        <Text style={{ fontSize: 16,
             fontWeight: 'bold',
              textAlign: 'center',
               flex: 1,
                paddingRight: 30}}>
                    Post to</Text>
        </View>

        <View style={{ flexDirection: 'row',
             backgroundColor: 'lightgrey',
              borderRadius: 5, gap: 3,
               alignItems: 'center',
                paddingHorizontal: 5}}>
        <Feather name="search" size={24} color="black" />

        <TextInput placeholder= 'Search for a community' 
        placeholderTextColor={'grey'} style={{ paddingVertical: 10 ,flex: 1}}
        value={searchValue}
        onChangeText={setSearchValue}/>
        {searchValue && (
            <Feather name="x" size={24} color="black" onPress={() => setSearchValue("")}/>
        )}       

        </View>

        <FlatList 
        data={filteredGroups} 
        renderItem={({item}) => (
            <Pressable
            onPress={() => onGroupSelected(item)}
             style={{ flexDirection: 'row', alignItems: 'center', gap: 5, marginBottom: 20}}>
                <Image source={{ uri: item.image}} style={{ width: 40, aspectRatio: 1, borderRadius: 20}}/>
                <Text style={{ fontWeight: '600'}}>{item.name}</Text>
            </Pressable>
        
        )}
          
        >
            
            
        </FlatList>
        </SafeAreaView>
    )
};