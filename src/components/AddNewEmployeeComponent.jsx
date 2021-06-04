import React from 'react'
import EmployeeService from '../services/EmployeeService'

class AddNewEmployeeComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: ''
        }

    this.handleChange = this.handleChange.bind(this)
    this.addEmp = this.addEmp.bind(this)
    }
    addEmp(){
             let data = this.state
             console.log(JSON.stringify(data))
             EmployeeService.addemployee(data).then(res=>{
                 console.log(res)
                 this.props.history.push('/employees')
             }).catch(err=>{
                 console.log(err)
             })
    }
    handleChange(event){
        if (event.target.name=='name'){
            this.setState({
                name:event.target.value
            })
            
        }
        else if(event.target.name=='email'){
            this.setState({
                email:event.target.value
            })
            
        }

    }

    render() {
        return (
            <div className="container">
                <h2>Add Employee</h2>
          

                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input id="" value={this.state.value} onChange={this.handleChange} className="form-control" type="text" name="name"></input>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input id="my-input" value={this.state.email} onChange={this.handleChange} className="form-control" type="text" name="email"></input>
                    </div>
                    <div className="form-group">
                        
                        <button className="btn btn-primary" type="button" onClick={this.addEmp}>Add</button>
                    </div>
                </form>
            

            </div>
           
        )
    }
}

export default AddNewEmployeeComponent