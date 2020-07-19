import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet } from 'react-native';
import MealList from '../components/MealList';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton'

const FavouriteScreen = props => {
    const favouriteMeals = useSelector(state => state.meals.favouriteMeals);
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