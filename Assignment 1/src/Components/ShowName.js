import React from "react";

class ShowName extends React.Component {
    state = {
        stateCondition: false,
        stateCondition2: false
    }


    render() {
        return (
            <>
                <div>
                    <div className="firstDiv">
                        <h1 className="heading">Styling using Functional and Class Component</h1>
                        <button className="button1" onClick={() => this.setState({ stateCondition: !this.state.stateCondition })}>To see styling Functional Component</button>
                        <button className="button2" onClick={() => this.setState({ stateCondition2: !this.state.stateCondition2 })}>"To see styling class Component"</button>
                        {this.state.stateCondition && <FunctionDiv />}
                        {this.state.stateCondition2 && <ClassDiv />}

                    </div>
                </div>
            </>
        )
    }
}




function FunctionDiv() {
    return (
        <>
            <div className="divOne">
                <h1>This is created using function component</h1>
                <p>This is done using external CSS</p>
                <p style={{ color: "red" }}>This is done using Inline CSS</p>
            </div>
        </>
    )
}

class ClassDiv extends React.Component {
    render() {
        return (
            <>
                <div className="divTwo">
                    <h1>This is created using Class component</h1>
                    <p>This is done using external CSS</p>
                    <p style={{ color: "red" }}>This is done using Internal CSS</p>
                </div>
            </>

        )
    }
}



export default ShowName;


















export class classDiv extends React.Component {
    render() {
        return (
            <>
                <div>
                    <h1>This is created using class component</h1>
                    <p>This is done using external CSS</p>
                    <p>This is done using Internal CSS</p>
                </div>
            </>
        )
    }
}
