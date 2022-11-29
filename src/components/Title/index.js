import React from "react";

import { Title as PageTitle } from "./styles";

// eslint-disable-next-line react/prop-types
function Title({ children }) {

    return <PageTitle>{children}</PageTitle>
}

export default Title