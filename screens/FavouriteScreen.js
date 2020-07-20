import React from 'react';
import { useSelector } from 'react-redux';
import MealList from '../components/MealList';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { View, StyleSheet } from 'react-native';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';

const FavouriteScreen = props => {
    const favouriteMeals = useSelector(state => state.meals.favouriteMeals);
    if (favouriteMeals.length === 0 || !favouriteMeals) {
        return (
            <View style={styles.screen}>
                <DefaultText>No Favourite meals found, start adding some!</DefaultText>
            </View>
        );
    }
    return (
        <MealList listData={favouriteMeals} navigation={props.navigation} />
    );
};

FavouriteScreen.navigationOptions = navData => {

    return {
        headerTitle: 'Your Favourites',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title='Menu' iconName='ios-menu' onPress={() => {
                    navData.navigation.toggleDrawer();
                }} />
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FavouriteScreen;