// Higher Order Component renders other components.
// Reuse Code
// Render hijacking
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWaring = (WrappedComponent) => { //takes component
    return (props) => ( //this is HOC
        <div>
            { props.isAdmin && <p>This is private info. Please don't share!</p>}
            <WrappedComponent {...props}/> 
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuthenticated ? (
                <WrappedComponent {...props}/>
            ) : (
                <p>Please log in</p>
            )}
            
        </div>
    );
}

const AdminInfo = withAdminWaring(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details"/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="There are the details"/>, document.getElementById('app'));