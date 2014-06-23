''' forms for the HackDartmouth website '''

from flask.ext.wtf import Form
from flask.ext.wtf import TextField, SubmitField, validators

class RegistrationForm(Form):
	first_name = TextField('first_name', [validators.Required()])
	last_name = TextField('last_name', [validators.Required()])
	email = TextField('email', [validators.Required(), validators.Email(message=u'Oops! That looks like an invalid email address!')])
	affiliation = TextField('affiliation')
	submit = SubmitField('Register Now!')