import React from 'react';
import randomColor from 'randomcolor';

class ButtonCounter extends React.Component {

    constructor() {
        super();
        this.state = {
            count: 0,
            adder: 1,
            color: randomColor()
        };
    }

    couterClick = () => {

        this.setState({ count: this.state.count + this.state.adder });
    }

    adderClick = () => {
        this.setState({ adder: this.state.adder + 1 })
    }

    colorClick = () => {

        this.setState({ color: randomColor() })
    }

    render() {
        const styles = {
            color: this.state.color
        }

        
        return (

            <div className="container">
                <table>
                    <tr >
                        <th><button onClick={this.couterClick} className="btn btn-primary">Add</button></th>

                        <th><button onClick={this.adderClick} className="btn btn-warning">Add by</button></th>
                    </tr>
                    <tr>
                        <td className="well" style={styles}><h1> {this.state.count}</h1></td>
                        <td className="well"><h1> {this.state.adder} hello</h1></td>
                    </tr>
                </table>

                <br />
                <button className='col-md-2 col-md-offset-5 well' onClick={this.colorClick} className="btn btn-danger">Counter Color</button>
            </div>
        );
    }
}

export default ButtonCounter;

