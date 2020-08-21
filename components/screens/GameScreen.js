import React from "react";
import { StatusBar } from "react-native";
import styled from 'styled-components';
import { Ionicons } from "@expo/vector-icons";

import Text from "../Text";

export default GameScreen = ({ route, navigation }) => {
    const { game } = route.params;
    return (
        <GameContainer>
            <StatusBar barStyle="light-content" />

            <GameArtContainer>
                <GameArt source={game.cover} />
                <BackButton onPress={() => navigation.goBack()}>
                    <Ionicons name="ios-close" size={48} color="#ffffff" />
                </BackButton>
            </GameArtContainer>
            <Text>Game Screen</Text>
        </GameContainer>
    );
};

const GameContainer = styled.View`
    background-color: #343434;
    flex: 1;
`;

const GameArtContainer = styled.View`
    position: relative;
`;

const GameArt = styled.Image`
    height: 350px;
    width: 100%;
    border-bottom-right-radius: 32px;
    border-bottom-left-radius: 32px;
`;

const BackButton = styled.TouchableOpacity`
    position: absolute;
    top: 40px;
    left: 10px;
`;