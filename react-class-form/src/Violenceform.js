import React, { Component } from 'react';

class Violenceform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: [{
                name: 'Rivers Rogers',
                email: 'Rivers@gmail.com',
                password: '54321',
            },
            {
                name: '',
                email: '',
                password: '',
            }
            ]
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state.name);
        console.log(this.state.email);
        console.log(this.state.password)
    };
    handleSubmit = (e) => {
        e.preventDefault();
        const newPerson = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password

        }
        this.setState({
            person: [...this.state.person, newPerson],
            name: "",
            emai: "",
            password:""

        })
    }
    render() {
        return (
            <section>
                <form>
                    <h1>ViolenceForm</h1>
                    <label>Name</label>
                    <input type='text' name='name' value={this.state.name} onChange={this.handleChange}></input>
                    <br />
                    <label>Email</label>
                    <input type='text' name='email' value={this.state.email} onChange={this.handleChange}></input>
                    <br />
                    <label>Password</label>
                    <input type='password' name='password' value={this.state.password} onChange={this.handleChange}></input>
                    <br />
                    <button>Submit</button>
                </form>
                {/* {this.state.person.map((item, index)=>{
                    return(
                        <div>
                            <h4>Name: {item.name}</h4>
                            <p>{item.email}</p>
                            <p>{item.password}</p>
                            <hr/>
                        </div>
                    );
                })} */}
            </section>
        );
    }
}

export default Violenceform;
