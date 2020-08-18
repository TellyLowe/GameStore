import React from "react";
import { StatusBar } from "react-native";
import styled from "styled-components";

export default HomeScreen = () => {
    return (
        <Container>
            <StatusBar barStyle="light-content" />

            <Header></Header>

        </Container>
    );
};

const Container = styled.SafeAreaView`
            flex: 1
            background-color: #343434;
`;

const Header = styled.View``;