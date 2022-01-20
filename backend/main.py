from collections import UserList
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)

app.config['SECRET_KEY'] = 'secretkeyexample'
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:OYW_1407_mop@localhost/socialmedia'

db = SQLAlchemy(app)

class User(db.Model):
    User_ID = db.Column('User_ID',db.Integer, primary_key=True)
    Name = db.Column('Name',db.String(50))
    Age = db.Column('Age', db.Integer)
    Birthday = db.Column('Birthday', db.String(50)) # YYYY-MM-DD
    Email = db.Column('Email', db.String(50))
    Phone = db.Column('Phone', db.String(50))
    City = db.Column('City', db.String(50))
    Country = db.Column('Country', db.String(50))
    Password = db.Column('Password', db.String(255))
    

@app.route('/user', methods=['GET'])
def get_all_users():
    users = User.query.all()
    output = [] # Building object list

    for user in users:
        user_data = {}
        user_data['User_ID'] = user.User_ID # coming from db
        user_data['Name'] = user.Name
        user_data['Age'] = user.Age
        user_data['Birthday'] = user.Birthday
        user_data['Email'] = user.Email
        user_data['Phone'] = user.Phone
        user_data['City'] = user.City
        user_data['Country'] = user.Country
        user_data['Password'] = user.Password
        output.append(user_data)

    return jsonify({'users' : output})

@app.route('/user/<int:User_ID>', methods=['GET'])
def get_one_user(User_ID):
    user = User.query.filter_by(User_ID=User_ID).first()
    if not user:
        return jsonify({'Meesage': 'No User Found!'})
    
    user_data = {}
    user_data['User_ID'] = user.User_ID # coming from db
    user_data['Name'] = user.Name
    user_data['Age'] = user.Age
    user_data['Birthday'] = user.Birthday
    user_data['Email'] = user.Email
    user_data['Phone'] = user.Phone
    user_data['City'] = user.City
    user_data['Country'] = user.Country
    user_data['Password'] = user.Password
    return jsonify({'user' : user_data})

@app.route('/user', methods=['POST'])
def create_user():
    data = request.get_json()
    hashed_password = data['password'] # can be hashed in the future
    new_user = User(Name=data['name'], Age=data['age'], Birthday=data['birthday'], Email=data['email'], Phone=data['phone'], City=data['city'], Country=data['country'], Password=hashed_password)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message': 'New user created!'})

@app.route('/user/<User_ID>', methods=['PUT'])
def update_user():
    return ''

@app.route('/user/<User_ID>', methods=['DELETE'])
def delete_user():
    return ''

if __name__ == '__main__':
    app.run(debug=True)