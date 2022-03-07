import React, { Component } from 'react'
import EmployeeService from '../apiservices/EmployeeService'

class EditEmployee extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          id: this.props.match.params.id,
          firstname: '',
          lastname: '',
          age:'',
          email:''
      }

      this.firstnameOnChange=this.firstnameOnChange.bind(this)
      this.lastnameOnChange=this.lastnameOnChange.bind(this)
      this.ageOnChange=this.ageOnChange.bind(this)
      this.emailOnChange=this.emailOnChange.bind(this)

      this.editEmployee=this.editEmployee.bind(this)
      this.cancelSave=this.cancelSave.bind(this)
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id)
                       .then( (res) =>{
                            let employee = res.data;
                            this.setState({
                                firstname: employee.firstname,
                                lastname: employee.lastname,
                                age:employee.age,
                                email : employee.email
                            });
                        });
    }

      firstnameOnChange = (event) => {
        this.setState({firstname: event.target.value})
      }
      lastnameOnChange = (event) => {
        this.setState({lastname: event.target.value})
      }
      ageOnChange = (event) => {
        this.setState({age: event.target.value})
      }
      emailOnChange = (event) => {
        this.setState({email: event.target.value})
      }

      editEmployee = (e) =>{
        e.preventDefault();
        let employee = {
          firstname : this.state.firstname,
          lastname : this.state.lastname,
          age : this.state.age,
          email : this.state.email
        }
        EmployeeService.editEmployee(this.state.id, employee)
                       .then(res => {
                         this.props.history.push('/all')
                       })
        
      }

      cancelSave = () =>{
        this.props.history.push('/all');
      }

  render() {
    return (
      <div>
          <h2>Edit Employee</h2>
          <div className='container'>
            <form>
              <label className="form-label">First Name: </label>
              <input type="text" id="firstname" value={this.state.firstname} onChange={this.firstnameOnChange} className="form-control"  placeholder="Enter first name"/>
              <label className="form-label">Last Name: </label>
              <input type="text" id="lastname" value={this.state.lastname} onChange={this.lastnameOnChange} className="form-control"  placeholder="Enter last name"/>
              <label className="form-label">Age: </label>
              <input type="text" id="age" value={this.state.age} onChange={this.ageOnChange} className="form-control" placeholder="Enter age"/>
              <label className="form-label">Email: </label>
              <input type="text" id="email" value={this.state.email} onChange={this.emailOnChange} className="form-control" placeholder="Enter email"/>    
              <button className="btn btn-success" onClick={this.editEmployee}>Save</button>
              <button className="btn btn-danger" onClick={this.cancelSave}>Cancel</button>
            </form>
          </div>
      </div>
    )
  }

}

export default EditEmployee
