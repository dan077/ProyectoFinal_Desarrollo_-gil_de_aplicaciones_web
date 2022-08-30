from flask import Flask, request
from flask import jsonify
import pickle
from sklearn.naive_bayes import *
import json
app = Flask (__name__)

@app.route("/")
def info():
    return "hola mundo"

@app.route("/classifier", methods=['GET'])
def cargar_datos():

    shift = int (request.args.get("shift"))
    #district = int (request.args.get("district"))
    
    dict = {}
    dict["Distritos"] = []
    ubicacion = [
    [['39.27661605536491', '-77.36178051557392'], ['39.046618427592755', '-77.19036938063084']], 
    [['38.999674904620896', '-77.40015697738'], ['38.81569437157346', '-77.20445140991414']],
    [['38.92706452409136', '-77.19149243324198'], ['38.74519712307339', '-77.03543774705309']],
    [['39.21493129030198', '-77.1502937034288'], ['39.04875148207457', '-77.0002937034288']],
    [['39.041196714867695', '-77.15466382373023'], ['38.93996891590835', '-76.8909919408635']],
    [['39.320096714867695', '-77.19066382373023'], ['39.21796891590835', '-76.8909919408635']],
    [['38.817196714867695', '-77.49466382373023'], ['38.73996891590835', '-77.1999919408635']]
    ]

    with open('Model_clasifier_violence.bin','rb') as file:
        model = pickle.load(file)
        
    for i in range (7):
        isViolent = bool(model.predict([[shift,i]])[0][1]) 
        dict["Distritos"].append(
            {
                'Distrito':'Distrito '+str(i+1),
                "Violento":isViolent,
                'Nombre':'Distrito '+str(i+1),
                'Ubicacion':ubicacion[i]
            }
        )
              
    print(dict)
    return json.dumps(dict)

if __name__== '__main__':
    app.run(debug=True)
    ruta = 'dicc.json'  
    