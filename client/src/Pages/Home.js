import Button from "../Components/Button/Button";
import DisplayTable from "../Components/DisplayTable/DisplayTable";
import React, { Component } from "react";
import API from "../utils/API";

// es6 notation this is a state
class Home extends Component {
    state = {
        arr: []
    }
    componentDidMount() {
        API.getRandomPeople().then(response => {
            this.setState({
                arr: response.data.results
            })
        })
    }
    // you would write constructor here if there are variables...
    render() {
        return (
            <>
                <Button color="success" text="ABC Desc" />
                <Button color="success" text="ABC Asc" />
                <DisplayTable arr={this.state.arr} />
            </>
        )
    }

}

export default Home;