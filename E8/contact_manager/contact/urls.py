from django.urls import path

from . import views
app_name = 'contact'
urlpatterns = [
    # path('', views.index, name='index'),


        # ex: /polls/
    path('', views.index, name='index'),
    # ex: /polls/5/
    path('<int:person_id>/', views.detail, name='detail'),
    # ex: /polls/5/results/
    path('<int:person_id>/edit/', views.edit, name='edit'),
    # ex: /polls/5/vote/
    path('add/', views.add, name='add'),
 

]