create database employeemgt;
use employeemgt;

create table employee(
id int PRIMARY KEY AUTO_INCREMENT,
firstname varchar(20),
lastname varchar(30),
age int,
email varchar(30)
)
select * from employee
insert into employee values(1, "Jane", "Mary", 30, "jane@gmail.com")
insert into employee values(2, "Anna", "Toms", 33, "anna@gmail.com")