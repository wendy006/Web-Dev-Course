FROM python:3.7

RUN pip install --upgrade pip

COPY ./requirements.txt .
RUN pip install -r requirements.txt


# CMD python ./mysite/manage.py migrate auth \
# && python manage.py migrate

# CMD python ./mysite/manage.py makemigrations \
# && python ./mysite/manage.py migrate \
# # && python ./mysite/manage.py createsuperuser
# && python ./mysite/manage.py runserver 0:8000

COPY ./mysite /app

WORKDIR /app

COPY ./entrypoint.sh /
ENTRYPOINT ["sh", "/entrypoint.sh"]



