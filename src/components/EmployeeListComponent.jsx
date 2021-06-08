import React from 'react'
import EmployeeService from '../services/EmployeeService'





class EmployeeListComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            employees:[]
        }
        this.handleClick = this.handleClick.bind(this)
        this.deleteemp = this.deleteemp.bind(this)
        this.editemp = this.editemp.bind(this)
    }

handleClick(){
console.log("in new emp")
this.props.history.push("/addemployee")
}

deleteemp(event){
let id = event.target.id
EmployeeService.deletemp(id).then(res=>{
    console.log(res)
    this.componentDidMount()
}).catch(err=>{
    console.log(err)
})}


editemp(event){
this.props.history.push(`/editemployee/${event.target.id}`)
}


componentDidMount(){
EmployeeService.getemployees().then((res)=>{
    this.setState({
        employees:res.data
    })
})
}

render(){
    return(
        <div>
            <h3>Employees List</h3>
            <div className="row">

            <button onClick={this.handleClick} className="btn btn-success px-3" type="button">Add New</button>
               
                        <table className="table table-stripped">
                             <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Action</th>
                             </tr>
                          
                            <tbody>
                                {this.state.employees.map(e=>
                                   <tr key={e.id}>
                                       <td>{e.name}</td>
                                       <td>{e.email}</td>
                                       <td><button id={e.id} onClick={this.editemp} className="btn btn-primary" type="button">Edit</button></td>
                                       <td><button id={e.id} onClick={this.deleteemp} className="btn btn-danger" type="button">Delete</button></td>
                                   </tr> 
                                    )}
                            </tbody>
                        </table>
                </div>
            </div>
       
    )
}

}
export default EmployeeListComponent;

