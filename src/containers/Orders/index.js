import React, { useEffect, useState } from "react";

import axios from "axios";

import Button from "../../components/Button";
import Image from "../../components/Img";
import Title from "../../components/Title";

import { OrderCard, Wrapped } from "./styles";

import { useHistory } from "react-router-dom";
import Burger2 from "../../assets/burger2.svg";
import Trash from "../../assets/trash.svg";

const Orders = () => {

    const [orders, setOrders] = useState([])
    const history = useHistory()

    useEffect(() => {
        async function fetchOrders() {
            const { data: newOrders } = await axios.get("http://localhost:3001/order")

            setOrders(newOrders)
        }

        fetchOrders()

    }, [])

    async function deleteOrder(orderId) {
        await axios.delete(`http://localhost:3001/order/${orderId}`)
        const newOrders = orders.filter((order) => order.id !== orderId)

        setOrders(newOrders)
    }

    function goBackPage() {
        history.push("/")
    }
    return (
        <Wrapped>
            <Image src={Burger2} />
            <Title>Pedidos</Title>
            {orders.map((order) => (
                <OrderCard key={order.id}>
                    <>
                        <div >
                            <h2>{order.order}</h2>
                            <p>{order.clientName}</p>
                        </div>
                        <button onClick={() => deleteOrder(order.id)}><img alt="lata-de-lixo" src={Trash} /></button>
                    </>
                </OrderCard>
            ))}
            <Button isBack={true} onClick={() => goBackPage()}>Voltar</Button>
        </Wrapped>
    )
}

export default Orders