import axios from "axios";
import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";

import Button from "../../components/Button";
import Image from "../../components/Img";
import Label from "../../components/Label";
import Title from "../../components/Title";

import { Container, Wrapped } from "./styles";

import Burger1 from "../../assets/burger1.svg";

const App = () => {

    const [orders, setOrders] = useState([])
    const inputOrder = useRef()
    const inputName = useRef()
    const history = useHistory()

    async function addNewOrder() {

        const { data: newOrder } = await axios.post("http://localhost:3001/order", {
            order: inputOrder.current.value,
            clientName: inputName.current.value,
        })

        setOrders([...orders, newOrder,])

        history.push("/orders")
    }

    return (
        <Wrapped>
            <Image alt="logo" src={Burger1} />
            <Title>Faça seu pedido!</Title>
            <Container>
                <Label>Pedido</Label>
                <input ref={inputOrder} placeholder="Coloque seu pedido aqui" />
                <Label>Nome do Cliente</Label>
                <input ref={inputName} placeholder="Como você quer ser chamado?" />
                <Button onClick={addNewOrder}>Novo Pedido</Button>
            </Container>
        </Wrapped>
    )
}

export default App