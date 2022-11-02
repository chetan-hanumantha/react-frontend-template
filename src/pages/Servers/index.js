import React from "react";
import { Navigate } from 'react-router-dom';

import { withLayout, ServersComponent } from "../../components";

class ServersPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let servers = [{name: 'Oracle_db_server', id: '123', description:'oracle database'},
            {name: 'Email-server', id: '243', description:'test mail server'},
            {name: 'CI/CD Server', id: '345', description:'build server'}
        ];
        // if(true) {
        //     return <Navigate push={true} to="/"/>;
        // }else {
        //     return <ServersComponent/>;
        // }
        return <ServersComponent servers={servers}/>;
    }
};

export default withLayout(ServersPage);
