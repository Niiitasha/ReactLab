import React, {Component} from "react";

class GraphBar extends Component {


render () {
return (
 <div className="GraphBar">
   <div className="label">{this.props.label}</div>
   <div className="value" style = {{width: this.props.value*50}}>{this.props.value}</div>
 </div>

);

}
}

export default GraphBar;
