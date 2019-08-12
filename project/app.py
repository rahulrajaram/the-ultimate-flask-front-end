from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


def handler(event, context):
    app.run(debug=True)


if __name__ == '__main__':
    app.run(debug=True)
