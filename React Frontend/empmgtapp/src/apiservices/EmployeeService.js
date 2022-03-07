import axios from 'axios'

const baseUrl="http://localhost:8080/api/all"

class EmployeeService{

    getAllEmployees(){
        return axios.get(baseUrl)
    }

    addNewEmployee(employee){
        return axios.post(baseUrl,employee)

    }

    getEmployeeById(id){
        return axios.get(baseUrl + '/' + id);
    }

    editEmployee(id,employee){
        return axios.put(baseUrl + '/'+ id, employee);
    }

    deleteEmployee(id){
        return axios.delete(baseUrl + '/' + id);
    }

}
//not exporting the class itself, 
//but the object of the class so we can directly use object inside the component
export default new EmployeeService()