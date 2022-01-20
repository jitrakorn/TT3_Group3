from flask import Flask, jsonify
from flask_restful import abort, Api, Resource, reqparse, fields, marshal_with

from flask_mysqldb import MySQL
app = Flask(__name__)
api = Api(app)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'crazyZ1@boi'
app.config['MYSQL_DB'] = 'socialmedia'

mysql = MySQL(app)


class PostController(Resource):

    # gets to retrieve all POSTS from database
    def get(self):
        # SELECT table1.id, table1.name, table2.id, table2.telephone
        # FROM table1, table2
        # WHERE table1.id = table2.id

        cur = mysql.connection.cursor()
        #cur.execute("SELECT post.Post_ID, post.Post_Title, post.Post_Description, post.Post_Image, liked_post.User_ID, liked_post.Post_ID, user.Name, user.User_ID, post_comment.Post_ID, post_comment.User_ID, post_comment.comment  FROM post, liked_post, user, post_comment WHERE post.Post_ID = liked_post.Post_ID && user.User_ID = liked_post.User_ID && user.User_ID = post_comment.User_ID && post.Post_ID = post_comment.Post_ID")

        #cur.execute("SELECT post.Post_ID, post.Post_Title, liked_post.User_ID, liked_post.Post_ID, user.Name, user.User_ID FROM post, liked_post, user WHERE post.Post_ID = liked_post.Post_ID && user.User_ID = liked_post.User_ID")
        cur.execute(
            "SELECT post.Post_Title, post.Post_Description, post.Post_Image, user.Name FROM post, user WHERE post.User_ID = user.User_ID")

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


api.add_resource(PostController, "/test")

if __name__ == "__main__":
    app.run(debug=True)
