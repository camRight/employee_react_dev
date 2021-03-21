import React, { useState } from 'react';
import "./Jumbotron.css";

const Jumbotron = () => {
    return (
        <>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-3">Employee Directory</h1>
                    <p class="lead">This is an employee directory for a fictional company.</p>
                </div>
            </div>
        </>
    )
}

export default Jumbotron;