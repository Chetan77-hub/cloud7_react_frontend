import React from 'react'
import EmployeeService from '../services/EmployeeService'

class EditEmployeeComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            id:this.props.match.params.id,
            name:'',
            email:'',
        }
     this.handleChange = this.handleChange.bind(this)   
     this.editEmp = this.editEmp.bind(this)
    }


editEmp(){
   let data = this.state
    console.log(data)
    EmployeeService.editemp(data).then(res=>{
        console.log(res)
        this.props.history.push("/employees")
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


componentDidMount(){
    EmployeeService.getempbyid(this.state.id).then(res=>{
        this.setState({
            name:res.data.name,
            email:res.data.email
        })
    })
}
render(){
    return(
        <div className="container">
        <h2>Edit Employee</h2>
  

        <form>
            <div className="form-group">
                <label>Name</label>
                <input id="" value={this.state.name} onChange={this.handleChange} className="form-control" type="text" name="name"></input>
            </div>
            <div className="form-group">
                <label>Email</label>
                <input id="my-input" value={this.state.email} onChange={this.handleChange} className="form-control" type="text" name="email"></input>
            </div>
            <div className="form-group">
                
                <button className="btn btn-primary" type="button" onClick={this.editEmp}>Save</button>
            </div>
        </form>
    

    </div>
   
    )
}
}
export default EditEmployeeComponent