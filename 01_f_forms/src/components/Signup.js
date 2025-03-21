import React, { Component } from "react";

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: ""
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted Data:", this.state);
        this.setState({
            name: "",
            email: "",
            password: ""
        });
    };

    render() {
        return (
            <div>
                <h2>Sign Up</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>name : - </label>
                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Email : - </label>
                        <input
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Password : - </label>
                        <input
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <button type="submit">
                        Sign Up
                    </button>
                </form>
            </div>
        );
    }
}

export default Signup;
