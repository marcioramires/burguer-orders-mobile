import React from "react";

import Button from "../../components/Button";
import Image from "../../components/Img";
import Title from "../../components/Title";

import { OrderCard, Wrapped } from "./styles";

import Burger2 from "../../assets/burger2.svg";
import Trash from "../../assets/trash.svg";

const App = () => {

    return (
        <Wrapped>
            <Image src={Burger2} />
            <Title>Pedidos</Title>
            <OrderCard>
                <div>
                    <h2>1 Coca-cola, 1 Xis-salada</h2>
                    <p>Marcio Tambeiro</p>
                </div>
                <button><img alt="lata-de-lixo" src={Trash} /></button>
            </OrderCard>
            <Button isBack>Voltar</Button>
        </Wrapped>
    )
}

export default App