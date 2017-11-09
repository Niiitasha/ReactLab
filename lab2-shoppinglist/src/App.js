import React, { Component } from 'react';

import Shopping from './Shopping';
import ShopForm from './ShopForm';
import './index.css';

class App extends Component {

constructor(props) {
   super(props);

   this.state= {
     shoppingItems: [
       {
       name: "oranges" ,
       price: "5"
     },

       {
         name: "oatmeal",
         price: "6"
     },

       {
         name: "bananas",
         price: "3"
     }

     ]
   };

}


  render(){

    const shoppingItems = this.state.shoppingItems.map((shoppingItem, index) => (<ShopForm
      key= {shoppingItem.name} shoppingItems = {shoppingItem} onDelete= {() => this.removeItem(index)} />
    ));

  var total = 0;

  this.state.shoppingItems.map((item) => total += parseInt(item.price));



    return (
      <div className="App">
        <h2> Shopping </h2>
        <div className = "shopTotal">
          {"$" + total}
        </div>
        <div className="App_shopping">
          {shoppingItems}
          <ShopForm onSubmit={this.addItem.bind(this)}/>
        </div>
      </div>
    );
  }

  addShopping(shoppingItem) {
      this.setState(prevState => {
          // Important: Copy contacts array before modifying. We should not modify
          // the original. React it very clear that arrays and objects in your
          // state must be immutable. So we need to create a NEW array and set
          // that as the new contacts state. React has found this prevents
          // unexpected bugs.
          const newshoppingItems = prevState.shoppingItems.slice(0);
          newshoppingItems.push(shoppingItem);

          // update the contacts in state
          return { shoppingItems: newshoppingItems };
      });
  }

  removeShopping(index) {
      this.setState(prevState => {
          // Copy contacts array before modifying. We should not modify the original.
          const newshoppingItems = prevState.shoppingItems.slice();
          newshoppingItems.splice(index, 1); // Remove the item at this index.

          // update the contacts in state
          return { shoppingItems: newshoppingItems };
      })
  }

  }

export default App;
