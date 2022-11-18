import React from 'react';
import './Form.css'

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name:'', id:'', org:'', location:'', branch:''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({...this.state,[event.target.name]: event.target.value});
      }
    
      handleSubmit(event) {
        alert(JSON.stringify(this.state));
        event.preventDefault();
      }
    
      render() {
        return (
            <div style={{width:'700px', margin:'10px auto', border:'1px solid '}}>
                <h1>React Form: 20012011057</h1>
                <form onSubmit={this.handleSubmit} style={{width:'400px', margin:'0 auto'}}>
                    <div className='form-control'>

                    <label>
                    Name:
                    </label>
                    <input name='name' type="text" value={this.state.name} onChange={this.handleChange} />
                    </div>
                    <div className='form-control'>

                    <label>
                    Employee Id:
                    </label>
                    <input name='id' type="text" value={this.state.id} onChange={this.handleChange} />
                    </div>
                    <div className='form-control'>

                    <label>
                    Organization:
                    </label>

                    <input name='org'type="text" value={this.state.org} onChange={this.handleChange} />
                    </div>
                    <div className='form-control'>

                    <label>
                    Branch:
                    </label>

                    <input name='branch' type="text" value={this.state.branch} onChange={this.handleChange} />
                    </div>
                    <div className='form-control'>

                    <label>
                    Location:
                    </label>

                    <input name='location'type="text" value={this.state.location} onChange={this.handleChange} />
                    </div>
                    <button type='submit' className='submit'>Submit</button>
                </form>
                <p>On click functionality</p>
                <button className='submit' onClick={this.handleSubmit}>On click</button>
            </div>
        );
      }
};

export default Form;

