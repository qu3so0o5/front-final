from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

contador = 0
contador_like = 0

@app.route("/contador", methods=["GET"])
def obtener():
    return jsonify({"contador": contador})

@app.route("/contador/<int:valor>", methods=["PUT"])
def actualizar(valor):
    global contador

    contador = valor

    return jsonify({"contador": contador})

@app.route("/likes", methods=["GET"])
def obtener_likes():
    return jsonify({"contador":contador_like})

@app.route("/likes/<int:valor>", methods=["PUT"])
def actualizar_like(valor):
    global contador_like

    contador_like = valor

    return jsonify({"contador": contador_like})

if __name__ == "__main__":
    app.run(debug=True,port=8000)