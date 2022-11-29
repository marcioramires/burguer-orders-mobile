import React from "react";

import Button from "../../components/Button";
import Image from "../../components/Img";
import Input from "../../components/Input";
import Label from "../../components/Label";
import Title from "../../components/Title";

import { Container, ContainerOrder } from "./styles";

const App = () => {

    return (
        <Container>
            <Image />
            <Title></Title>
            <ContainerOrder>
                <Label>Pedido</Label>
                <Input placeholder="Coloque seu pedido aqui" />
                <Label>Nome do Cliente</Label>
                <Input placeholder="Como você quer ser chamado?" />
                <Button>Novo Pedido</Button>

            </ContainerOrder>
        </Container>
    )
}

export default App