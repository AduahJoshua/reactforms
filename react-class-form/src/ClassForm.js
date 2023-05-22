import React, { Component } from 'react';
import myownnewstyle from './OwnStyle.css';

class ClassForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: [{
                name: "Joshua Aduah",
                description: "I love to code",
            },
            {
                name: "Philip Nunoofio",
                description: "I love CSS",
            },
            {
                name: "",
                description: "",
            }
            ]
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state.name);
        console.log(this.state.description);
    };
    handleSubmit = (e) => {
        e.preventDefault();
        const newPerson = {
            name: this.state.name,
            description: this.state.description,

        }
        this.setState({
            person: [...this.state.person, newPerson],
            name: "",
            description: ""

        })
    }




    render() {
        return (
            <section className='body,'>
                <form onSubmit={this.handleSubmit} className='formbox'>
                    <div>
                        <label>Name</label>
                        <br />
                        <input type='text' name="name" value={this.state.name} onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <label>Decription</label>
                        <br />
                        <textarea name="description" value={this.state.description} onChange={this.handleChange}></textarea>
                    </div>
                    <button className='buttonicon'>Submit</button>
                </form>
                {this.state.person.map((item, index)=>{
                    return(
                        <div>
                            <h4>Name: {item.name}</h4>
                            <p>{item.description}</p>
                            <hr/>
                        </div>
                    );
                })}
            </section>
        );
    }
}

export default ClassForm;
