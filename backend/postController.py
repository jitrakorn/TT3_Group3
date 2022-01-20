from flask import Flask, jsonify
from flask_restful import abort, Api, Resource, reqparse, fields, marshal_with

from flask_mysqldb import MySQL
app = Flask(__name__)
api = Api(app)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = ''

mysql = MySQL(app)


class PostController(Resource):

    # gets to retrieve all POSTS from database
    def get(self):

        return

    # puts create new post
    def put(self):

        return

    def delete(self):

        return '', 204


api.add_resource(PostController, "")

if __name__ == "__main__":
    app.run(debug=True)
