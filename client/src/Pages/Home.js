// import Button from "../Components/Button/Button";
// style with bootstrap react instead below

import Button from "react-bootstrap/Button";
import DisplayTable from "../Components/DisplayTable/DisplayTable";
import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../Components/Jumbotron/Jumbotron";


// es6 notation this is a state
// passing to child
// from parent to children components.
class Home extends Component {
    state = {
        search: "",
        results: [],
        filteredResults: [],
        error: ""
    }
    // calling setState
    componentDidMount() {
        API.getRandomPeople().then(response => {
            this.setState({
                results: response.data.results,
                filteredResults: response.data.results
            })
        })
        .catch(err => console.log(err))
    };

    // update input state
    handleInputChange = event => {
        this.setState({})
    }


    // you would write constructor here if there are variables...
    render() {
        return (
            <>
                <br></br>

                <Jumbotron />
                {/* <Button variant="success" size="large">
                    ZYX Desc
                </Button> */}
                
                <DisplayTable results={this.state.results} />
            </>
        )
    }

}

export default Home;