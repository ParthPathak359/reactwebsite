from flask import Flask, render_template


app = Flask(__name__)


@app.route('/attendance', methods = ['POST'])
def home():
    return render_template('face.py')

if __name__ == "__main__":
    app.run()