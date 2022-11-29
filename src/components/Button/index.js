import React from "react";

import { Button as PageButton } from "./styles";

// eslint-disable-next-line react/prop-types
function Button({ children, ...props }) {

    return <PageButton {...props}>{children}</PageButton>
}

export default Button
