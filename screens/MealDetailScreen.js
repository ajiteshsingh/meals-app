import React from 'react';
import { useSelector } from 'react-redux';
import { View, ScrollView, Image, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import DefaulText from '../components/DefaultText';

const MealDetailScreen = props => {
    const availableMeals = useSelector(state => state.meals.meals);
    const mealId = props.navigation.getParam('mealId');

    const selectedMeal = availableMeals.find(meal => meal.id === mealId);
    console.log(selectedMeal);
    return (
        <ScrollView>
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
            <View style={styles.detail}>
                <DefaulText>{selectedMeal.duration}m</DefaulText>
                <DefaulText>{selectedMeal.complexity.toUpperCase()}</DefaulText>
                <DefaulText>{selectedMeal.affordability.toUpperCase()}</DefaulText>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {selectedMeal.ingredients.map(ingredient => {
                return <Text style={styles.listItem} key={ingredient}>{ingredient}</Text>
            })}
            <Text style={styles.title}>Steps</Text>
            {selectedMeal.steps.map(step => {
                return <Text style={styles.listItem} key={step}>{step}</Text>
            })}
        </ScrollView>
    );
};

MealDetailScreen.navigationOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParam('mealId');

    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    return {
        headerTitle: selectedMeal.title,
        headerRight: <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title='Favourite' iconName='ios-star'
                onPress={() => {
                    console.log('favourite');
                }}
            />
        </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    detail: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'center'
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
    }
});

export default MealDetailScreen;