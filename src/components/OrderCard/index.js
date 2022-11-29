import React from "react";

import { OrderCard as PageCard } from "./styles";

// eslint-disable-next-line react/prop-types
function OrderCard({ children }) {

    return <PageCard>{children}</PageCard>
}

export default OrderCard