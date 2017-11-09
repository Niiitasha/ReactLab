import React, { Component } from 'react';
// Grab font-awesome stylesheet for our trash can icon. Note, we had to add this
// to our package.json using `npm install --save-dev font-awesome`.


// Define tha ContactCard comonent using ES6 class syntax
class Shopping extends Component {

    render() {
        // Here we added a delete button. When clicked, it directly calls the
        // function that was passed to us via onDelete=....
        return (
            <div className="Shopping">

                <div className="Shopping__name">{this.props.shoppingItems.name}</div>
                <div className="Shopping__email">{this.props.shoppingItems.email || "No Email"}</div>
                <button className="Shopping__delete-button"
                        title={"Delete " + this.props.shoppingItems.name}
                        onClick={this.props.onDelete}>

                </button>
            </div>
        );
    }
}

// We must specify that our ContactCard component is the default export of this file.
// This will be used on line 6 of App.js
export default Shopping;
