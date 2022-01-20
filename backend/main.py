from collections import UserList
from flask import Flask, request, jsonify, make_response
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
# mySQL database credentials
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

class Post(db.Model):
    Post_ID = db.Column('Post_ID',db.Integer, primary_key=True)
    Post_Image = db.Column('Post_Image', db.String(300))
    Post_Description = db.Column('Post_Description', db.String(200))
    
# For getting all users detail in json
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

# For Getting a single user detail
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

# For creating new user
@app.route('/user', methods=['POST'])
def create_user():
    data = request.get_json()
    password = data['password'] # can be hashed in the future
    new_user = User(Name=data['name'], Age=data['age'], Birthday=data['birthday'], Email=data['email'], Phone=data['phone'], City=data['city'], Country=data['country'], Password=password)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message': 'New user created!'})

# For authentication 
@app.route('/login/<username>/<password>')
def login(username, password):
    user = User.query.filter_by(Name=username).first()
    if not user:
        return jsonify({'Message': 'Failed Login'})

    if password == user.Password:
        return jsonify({'Message': 'Logined'})

    return jsonify({'Message': 'Failed Login'}) 

# For delete user
@app.route('/user/<User_ID>', methods=['DELETE'])
def delete_user(User_ID):
    user = User.query.filter_by(User_ID=User_ID).first()
    if not user: 
        return jsonify({'Message': 'User is not found'})
    db.session.delete(user)
    db.session.commit()
    return jsonify({'message' : 'The user has been deleted.'})


# Deleting post 
@app.route('/deleteComment/<Post_ID>', methods=['DELETE'])
def delete_comment(Post_ID):
    comment = Post.query.filter_by(Post_ID=Post_ID).first()
    db.session.delete(comment)
    db.session.commit()
    return jsonify({'message' : 'The comment has been deleted'})

if __name__ == '__main__':
    app.run(debug=True)