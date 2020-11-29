import React from 'react'


class App extends React.Component{
state ={advice:''};


componentDidMount(){
    
    console.log('Component mounted');

}

    render(){
        return(
<h1>App</h1>
        );
    }
}

export default App
