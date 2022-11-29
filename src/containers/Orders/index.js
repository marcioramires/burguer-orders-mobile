import React from "react";

import Button from "../../components/Button";
import Image from "../../components/Img";
import Label from "../../components/Label";
import Title from "../../components/Title";

import { Container } from "./styles";

const App = () => {

    return (
        <Container>
            <Image />
            <Title></Title>
            <Label>Pedido</Label>
            <Label>Nome do Cliente</Label>
            <Button>Novo Pedido</Button>
        </Container>
    )
}

export default App