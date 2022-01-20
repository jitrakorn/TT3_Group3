from flask import Flask, jsonify
from flask_restful import abort, Api, Resource, reqparse, fields, marshal_with
from flask_cors import CORS

from flask_mysqldb import MySQL
app = Flask(__name__)
CORS(app)
api = Api(app)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'password'
app.config['MYSQL_DB'] = 'socialmedia'

mysql = MySQL(app)


class PostController(Resource):

    # gets to retrieve all POSTS from database
    @app.route('/getPost', methods=['GET'])
    def get_all_post():
        cur = mysql.connection.cursor()
        cur.execute(
            "SELECT post.Post_ID, post.Post_Title, post.Post_Description, post.Post_Image, user.Name FROM post, user WHERE post.User_ID = user.User_ID")

        test = cur.fetchall()
        print(test)
        resp = jsonify(test)
        resp.status_code = 200
        print(resp)
        return resp

    @app.route('/getLikes', methods=['GET'])
    def get_all_likes():
        cur = mysql.connection.cursor()
        cur.execute(
            "SELECT liked_post.Post_ID, user.Name FROM liked_post, user WHERE liked_post.User_ID = user.User_ID ORDER BY liked_post.Post_ID ASC")

        test = cur.fetchall()
        print(test)
        resp = jsonify(test)
        resp.status_code = 200
        print(resp)
        return resp

    @app.route('/getComments', methods=['GET'])
    def get_all_comments():
        cur = mysql.connection.cursor()
        cur.execute(
            "SELECT post_comment.Post_ID, post_comment.Comment, user.Name FROM post_comment, user WHERE post_comment.User_ID = user.User_ID ")

        test = cur.fetchall()
        print(test)
        resp = jsonify(test)
        resp.status_code = 200
        print(resp)
        return resp

    # puts create new post
    def put(self, ):
        # args = .parse_args()
        return

    def delete(self):

        return '', 204


api.add_resource(PostController, "/getLikes/<int:Post_ID>")

if __name__ == "__main__":
    app.run(debug=True)
