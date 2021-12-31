# CMPT470 EXCERCISE 9 (Contact Manager)   

# Commands to run    

- docker-compose down && docker system prune -f     
- docker-compose build && docker-compose up     
- Others:
    - python3 manage.py collectstatic
    - sudo service postgresql start(for wsl2 if the report shows 'can not connect to postgresql database)   

# Static files dir(see setting.py)      
    STATIC_URL = '/static/'         
    STATIC_ROOT = os.path.join(BASE_DIR, 'static/')         

    location /static {              
        alias /usr/share/nginx/html/static;             
    }       


## The only two valid entries in this project are as followings:   
- http://localhost:8080/contact/
- http://localhost:8080/admin



## Information needed to access the database   
    Username: admin
    PW: 123
    (Database: postgresql)

    --------------

    DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'e9demo',
        'USER': 'e9',
        'PASSWORD': 'e9123',
        'HOST': 'db',
        'PORT': 5432,
    }
}           



## Required Functionality  
- Each “contact” has a first and last name, email address, phone number, and other “notes”.     
- Anyone can use the web-based interface to create a contact, as well as view and edit all contacts in the system.     

##### Note:
- I did not set any constraint to the user input(Not required in this exercise).        
- However, all those fields in the 'contact' form are required. (non-empty)     
  
