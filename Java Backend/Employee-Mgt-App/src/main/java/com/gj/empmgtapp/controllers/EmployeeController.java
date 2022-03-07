package com.gj.empmgtapp.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gj.empmgtapp.entities.Employee;
import com.gj.empmgtapp.repos.EmployeeRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class EmployeeController {
	
	@Autowired
	EmployeeRepository empRepo;
	
	//get all employees
	@GetMapping("/all")
	public List<Employee> getAllEmployees(){
		return empRepo.findAll();
		
	}
	
	//add employee
	@PostMapping("/all")
	public Employee addEmployee(@RequestBody Employee employee) {
		return empRepo.save(employee);
	}
	
	//get employee by id
	@GetMapping("/all/{id}")
	public Employee  getEmployeeById(@PathVariable int id) {
		return empRepo.findById(id).get();
	}
	
	//edit or update employee
	@PutMapping("/all/{id}")
	public Employee editEmployee(@PathVariable int id, @RequestBody Employee employee) {
		Employee emp = empRepo.findById(id).get();
		emp.setFirstname(employee.getFirstname());
		emp.setLastname(employee.getLastname());
		emp.setAge(employee.getAge());
		emp.setEmail(employee.getEmail());
		Employee editedEmp = empRepo.save(emp);
		return empRepo.save(editedEmp);
	}
	
	@DeleteMapping("/all/{id}")
	public void deleteEmployee(@PathVariable int id) {
		Employee emp = empRepo.findById(id).get();
		empRepo.delete(emp);
		
	}
	
	
	
}
