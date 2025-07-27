import axios from 'axios'



class EmployeeService{
    getemployees(){
       return axios.get("api")
    }

    addemployee(data){
        return axios.post("api",data)
    }

    deletemp(id){

        return axios.delete("https://cloud7poclabs.live/deleteuser/"+id)

    }

    getempbyid(id){
         return axios.get("https://cloud7poclabs.live/getuserbyid/"+id)
    }

    editemp(data){
        return axios.put("https://cloud7poclabs.live/edituser",data)
    }
}


export default new EmployeeService()
