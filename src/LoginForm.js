import React, { Component } from 'react';
import {Consumer} from './context/Provider';

class LoginForm extends Component {

    render() {
        return (<Consumer>
            {value=> {
                const {action} = value;
                const {viewer} = value.state;
                console.dir(action)
                return viewer ? (
                    <React.Fragment>
                        <h3>Logged in As: {viewer}</h3>
                        <button onClick={action.logOut}>
                            Log out
                      </button>
                    </React.Fragment>
                ) : (
                        <React.Fragment>
                            <input placeholder="Log in please"
                                ref={r => this.inputRef = r} />
                            <button type="submit" onClick={() => {
                                action.logIn(this.inputRef.value);
                            }}>Log in</button>
                        </React.Fragment>
                    );
        
            }}
        </Consumer>)
    }
}

export default LoginForm;