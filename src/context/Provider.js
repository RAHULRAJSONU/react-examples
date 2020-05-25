import React, {Component} from 'react';

const MyContext = React.createContext();

export class Provider extends Component {
    state = {
        viewer: null
    };

    logIn = viewer => this.setState({viewer: viewer});

    logOut = () => this.setState({viewer: null});
    
    render(){
        return(
        <MyContext.Provider value={{
            state: this.state,
            action: {
                logIn: this.logIn,
                logOut: this.logOut
            }
        }}>
            {this.props.children}
        </MyContext.Provider>)
    }
}

export const Consumer = MyContext.Consumer;