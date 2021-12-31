# CMPT470 EXCERCISE 8 (Contact Manager)   

# Commands to run
- docker-compose down && docker system prune -f     
- docker-compose build && docker-compose up         

## The only two valid entries in this project are as followings:   
- http://localhost:8080/contact/
- http://localhost:8080/admin



## Information needed to access the database   
    Username: admin
    PW: 123
    (Database: sqlite)


## Required Functionality  
- Each “contact” has a first and last name, email address, phone number, and other “notes”.     
- Anyone can use the web-based interface to create a contact, as well as view and edit all contacts in the system.     

##### Note:
- I did not set any constraint to the user input(Not required in this exercise).        
- However, all those fields in the 'contact' form are required. (non-empty)     
  
