import axios from 'axios'



class EmployeeService{
    getemployees(){
       return axios.get("http://localhost:5000/getemployees")
    }

    addemployee(data){
        return axios.post("http://localhost:5000/adduser",data)
    }

    deletemp(id){

        return axios.delete("http://localhost:5000/deleteuser/"+id)

    }

    getempbyid(id){
         return axios.get("http://localhost:5000/getuserbyid/"+id)
    }

    editemp(data){
        return axios.put("http://localhost:5000/edituser",data)
    }
}


export default new EmployeeService()