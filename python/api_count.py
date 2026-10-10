from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

contador = 0


@app.route("/contador", methods=["GET"])
def obtener():
    return jsonify({"contador": contador})


@app.route("/contador/<int:valor>", methods=["PUT"])
def actualizar(valor):
    global contador

    contador = valor

    return jsonify({"contador": contador})


if __name__ == "__main__":
    app.run(debug=True,port=8000)