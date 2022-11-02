import React from "react";

import { withLayout, AboutComponent, ServersComponent } from "../../components";
import { Navigate } from "react-router-dom";

const AboutPage = ({changeRoute}) => {
    if(changeRoute) {
        return <Navigate push={true} to="/settings"/>;
    }else {
        return <AboutComponent/>;
    }
    //return <AboutComponent/>;
};

export default withLayout(AboutPage);
