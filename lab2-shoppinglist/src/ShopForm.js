import React, { Component } from 'react';

class ShopForm extends Component {

    constructor(props) {
        super(props);
        // Set up initial state in constructor. These will be the initial values
        // for the form.
        this.state = {
            name: "",
            price: "",

        };
    }

    render() {
        // Each input has its value controlled by the component state. And when
        // a user changes the value we update the state to match. It ends up
        // being a tight two-way binding.
        return (
            <form className="ShopForm" onSubmit={this.handleSubmit.bind(this)}>
                <h2>Add an Item!</h2>

                <p>
                    <label>Name</label>
                    <input value={this.state.name} onChange={this.handleNameChange.bind(this)}/>
                </p>
                <p>
                    <label>Price</label>
                    <input type="price" value={this.state.price} onChange={this.handlePriceChange.bind(this)}/>
                </p>
                <p className="ShopForm__button-bar">
                    <button type="submit">Add</button>
                </p>
            </form>
        );
    }


    handleNameChange(event) {
        this.setState({
            // We get the new input value from the event.
            name: event.target.value
        });
    }

    handlePriceChange(event) {
        this.setState({
            price: event.target.value
        });
    }

    handleSubmit(event) {
        // by default a form submission will refresh the page. preventDefault stops that from happening.
        event.preventDefault();
        // Call the function that App.js passes into the onSubmit attribute.
        // Pass it a new contact object.
        this.props.onSubmit({
            name: this.state.name,
            price: this.state.price,

        });
        // Clear the form by simply updating the state with empty form values.
        this.setState({
            name: "",
            price: "",

        })
    }

}

export default ShopForm;
