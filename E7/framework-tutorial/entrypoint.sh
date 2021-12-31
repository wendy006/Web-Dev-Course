#!/bin/sh


python manage.py collectstatic --noinput&&
python manage.py makemigrations&&
python manage.py migrate&&
# python manage.py collectstatic --no-input


python manage.py loaddata data.json&&
gunicorn mysite.wsgi:application --bind 0000:8000




# python manage.py migrate auth --no-input
# python manage.py migrate --no-input
# python manage.py collectstatic --no-input

# gunicorn mysite.wsgi:application --bind 0000:8000


