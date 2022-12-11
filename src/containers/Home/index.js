import React from "react";

import Button from "../../components/Button";
import Image from "../../components/Img";
import Input from "../../components/Input";
import Label from "../../components/Label";
import Title from "../../components/Title";

import { Container, Wrapped } from "./styles";

import Burger1 from "../../assets/burger1.svg";

const App = () => {

    return (
        <Wrapped>
            <Image src={Burger1} />
            <Title>Faça seu pedido!</Title>
            <Container>
                <Label>Pedido</Label>
                <Input placeholder="Coloque seu pedido aqui" />
                <Label>Nome do Cliente</Label>
                <Input placeholder="Como você quer ser chamado?" />
                <Button>Novo Pedido</Button>
            </Container>
        </Wrapped>
    )
}

export default App