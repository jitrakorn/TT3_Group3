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

    @app.route('/getPost/<User_ID>', methods=['GET'])
    def get_single_post(User_ID):
        cur = mysql.connection.cursor()
        cur.execute(
            "SELECT post.Post_ID, post.Post_Title, post.Post_Description, post.Post_Image, user.Name FROM post, user WHERE post.User_ID = user.User_ID && post.User_ID= %s", [User_ID])

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

    @app.route('/getLikes/<User_ID>', methods=['GET'])
    def get_single_post_likes(User_ID):
        cur = mysql.connection.cursor()
        # cur.execute("SELECT liked_post.Post_ID, user.Name FROM liked_post, post, user WHERE liked_post.Post_ID = post.Post_ID && post.User_ID = user.User_ID ORDER BY liked_post.Post_ID ASC")
        #cur.execute("SELECT * FROM post WHERE User_ID =%s", [User_ID])

        cur.execute(
            "SELECT liked_post.Post_ID, user.Name FROM user, liked_post, post WHERE user.User_ID = liked_post.User_ID && post.User_ID = %s && liked_post.Post_ID = post.Post_ID ORDER BY liked_post.Post_ID ASC", [User_ID])
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
    @app.route('/getComments/<User_ID>', methods=['GET'])
    def get_single_post_comments(User_ID):
        cur = mysql.connection.cursor()
        cur.execute(
            "SELECT post_comment.Post_ID, post_comment.Comment, user.Name FROM post_comment, post, user WHERE post_comment.User_ID = user.User_ID && post_comment.Post_ID = post.Post_ID && post.User_ID = %s", [User_ID])

        test = cur.fetchall()
        print(test)
        resp = jsonify(test)
        resp.status_code = 200
        print(resp)
        return resp

    def put(self, ):
        # args = .parse_args()
        return

    @app.route('/deleteComments/<Post_ID>', methods=['DELETE'])
    def delete(Post_ID):
        cur = mysql.connection.cursor()
        # alter table MyOtherTable nocheck constraint all
# delete from MyTable
# alter table MyOtherTable check constraint all
        cur.execute("DELETE FROM post_comment WHERE Post_ID =3;")
        cur.execute("DELETE FROM liked_post WHERE Post_ID =3;")
        cur.execute("DELETE FROM post WHERE Post_ID =3;")
        #cur.execute("", [Post_ID])
        #cur.execute("SET FOREIGN_KEY_CHECKS=1;")
# DELETE FROM post_comment WHERE Post_ID=%s; DELETE FROM liked_post where Post_ID=%s
        mysql.connection.commit()
        cur.close()
        return '', 204


api.add_resource(PostController, "/getLikes/<int:Post_ID>")

if __name__ == "__main__":
    app.run(debug=True)
