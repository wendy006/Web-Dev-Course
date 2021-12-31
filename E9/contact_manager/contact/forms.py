from django import forms


# class RenewBookForm(forms.Form):
#     renewal_date = forms.DateField(help_text="Enter a date between now and 4 weeks (default 3).")
    
# class NameForm(forms.Form):
#     your_name = forms.CharField(label='Your name', max_length=100)


# class UserForm(forms.Form):
#     username = forms.CharField(label="用户名", max_length=128)
#     password = forms.CharField(label="密码", max_length=256, widget=forms.PasswordInput)



class edit_person_form(forms.Form):
    # class Meta:
    #    model = User
    #    fields = []

    first_name = forms.CharField(label="first_name",max_length=200,required = True)
    last_name =  forms.CharField(label="last_name",max_length=200,required = True)
    email =   forms.CharField(label="email",max_length=200,required = True)
    phone_number =  forms.CharField(label="phone number",max_length=200,required = True)
    notes =  forms.CharField(label="notes",max_length=200,required = True)


class add_person_form(forms.Form): 

    first_name = forms.CharField(label="first_name",max_length=200,required = True)
    last_name =  forms.CharField(label="last_name",max_length=200,required = True)
    email =   forms.CharField(label="  email",max_length=200,required = True)
    phone_number =  forms.CharField(label="phone number",max_length=200,required = True)
    notes =  forms.CharField(label="notes",max_length=200,required = True)



