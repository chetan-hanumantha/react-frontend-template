import React from 'react';
import { Link } from 'react-router-dom'

class Servers extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { servers } = this.props;
        return (<div>
            <h2>Servers page</h2>
            <div>
                { servers.map((server, i)=>{
                    return (<li key={server.id}><Link to={server.id}>{server.name}</Link></li>);
                }) }
            </div>
        </div>);
    }
}

export default Servers;