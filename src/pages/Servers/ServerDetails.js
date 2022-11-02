import React from "react";
import { Navigate } from 'react-router-dom';

import { withLayout, ServerDetails } from "../../components";

class ServerDetailsPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <ServerDetails/>;
    }
};

export default withLayout(ServerDetailsPage);
