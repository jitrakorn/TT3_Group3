from flask import Flask

app = Flask(__name__)

app.config['SECRET_KEY'] = 'secretkeyexample'
app.config['SQLALCHEMY_DATABASE_URI'] = ''

if __name__ == '__main__':
    app.run(debug=True)