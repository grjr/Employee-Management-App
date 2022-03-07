import React, { Component } from 'react'
// import { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import EmployeeService from '../apiservices/EmployeeService'

class EmployeeList extends Component {
    constructor(props) {
        super(props)

        this.state = {
                employees: []
    }
    this.addEmployee = this.addEmployee.bind(this);
    this.editEmployee = this.editEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
}

componentDidMount(){
    EmployeeService.getAllEmployees().then(res => {
        this.setState({ employees: res.data});
    });
}

addEmployee(){
    this.props.history.push('/add');
}

deleteEmployee(id){
    EmployeeService.deleteEmployee(id)
                   .then( res => {
                            // this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
                            EmployeeService.getAllEmployees().then(res => {
                                this.setState({ employees: res.data});
                            });
                    });
}

editEmployee(id){
    this.props.history.push(`/edit/${id}`);
}


render() {
  return (
    <div>
        <div>
          <h1 className='text-center'>Employees</h1>
          <div className='row'>
           {/* <Link to = "/add" className = "btn btn-primary mb-2" > Add New Employee </Link> */}
           <button className="btn btn-primary" onClick={this.addEmployee}> Add New Employee</button>
          </div>
          <div className='row'>
              <table className='table'>
                  <thead>
                      <tr>
                          <th>ID</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Age</th>
                          <th>Email</th>
                          <th>Actions</th>
                      </tr>
                  </thead>
                  <tbody>
                      {
                          this.state.employees.map(
                              employee => 
                              <tr key={employee.id}>
                                  <td>{employee.id}</td>
                                  <td>{employee.firstname}</td>
                                  <td>{employee.lastname}</td>
                                  <td>{employee.age}</td>
                                  <td>{employee.email}</td>
                                  <td>
                                  <button onClick={ () => this.editEmployee(employee.id)} class="btn btn-secondary" style={{marginLeft: "5px"}}>Edit </button>
                                  <button onClick={ () => this.deleteEmployee(employee.id)} class="btn btn-secondary" style={{marginLeft: "5px"}}>Delete </button>
                                  </td>
                              </tr>
                          )
                      }
                  </tbody>
              </table>
          </div>
      </div>
        
    </div>
  )
}
}

export default EmployeeList;
