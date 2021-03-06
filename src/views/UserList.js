import React from 'react'
import { View, Text, FlatList, Button } from 'react-native'
import { ListItem } from 'react-native-elements'
import users from '../data/users'

export default props => {
    function getActions(user) {
        return (
            <>
            <Button 
            onPress={() => props.navigation.navigate('UserForm', user)}
            />
            </>
        )
    }

    function getUserItem({ item: user }) {
    return(
        <ListItem
        leftAvatar={{source: {uri: user.avatarUrl}}}
        key={user.id}
        title={user.name}
        subtitle={user.email}
        bottomDivider
        rightElement={getActions(user)}
        onPress={() => props.navigation.navigate('UserForm')}
        />
    )
    }
    return (
        <View>
            <FlatList
            keyExtractor={ users => users.id.toString()}
            data={users}
            renderItem={getUserItem}
            />
        </View>
    )
}