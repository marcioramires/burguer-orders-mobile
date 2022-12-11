import React from "react";

import Button from "../../components/Button";
import Image from "../../components/Img";
import OrderCard from "../../components/OrderCard";
import Title from "../../components/Title";

import { Wrapped } from "./styles";

import Burger2 from "../../assets/burger2.svg";

const App = () => {

    return (
        <Wrapped>
            <Image src={Burger2} />
            <Title>Pedidos</Title>
            <OrderCard>

            </OrderCard>
            <Button isBack>Voltar</Button>
        </Wrapped>
    )
}

export default App