# Read Me     

### (1) If it shows the database connection error   
![alt text](https://i.ibb.co/myvQ7mk/1111.png) 


please do the followings:   

1.1 stop the container    

    docker-compose down && docker system prune -f  
    
1.2 open the postgresql service(the following is for WSL2 ubuntu)   

    sudo service postgresql start   

1.3 run the container again 

    docker-compose build && docker-compose up   



  
### (2)If it shows some error in manage.py, please consider using 'python3' instead of 'python' in related commands.    
python manage.py runserver --> python3 manage.py runserver  




### (3)The only two valid entries in this project are as followings:    

- 3.1 http://localhost/polls/   
![alt text](https://i.ibb.co/xLRLrG4/33333.png)

- 3.2 http://localhost/admin    
![alt text](https://i.ibb.co/162j4Yd/222222.png)


### (4)Information needed to access the database   
#### 4.1 psql access(postgresql)

    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql_psycopg2',
            'NAME': 'e7demo',
            'USER': 'e7',
            'PASSWORD': 'e7123',
            'HOST': 'db',
            'PORT': 5432,
        }
    }
    
#### 4.2 Admin(Database) Page:   

    Username: admin
    PW: 123






