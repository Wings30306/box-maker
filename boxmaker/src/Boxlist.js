import React, { Component } from "react";
import Box from "./Box";
import BoxForm from "./BoxForm"


class BoxList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            boxes: []
        }
    }

    render(){
        return(
            <div>
                <BoxForm />
                <Box />
            </div>
        )
    }
}

export default BoxList