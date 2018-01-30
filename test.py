from flask import Flask, render_template, request
import requests

app = Flask(__name__)

@app.route('/temperature', methods=['POST'])
def temperature():
    zipcode = request.form['zip']
	r = requests.get('http://api.openweathermap.org/data/2.5/weather?zip='+zipcode+',us&appid=b1b15e88fa797225412429c1c50c122a')
	json_object = r.json()
	temp_k = float(json_object['main']['temp'])
	temp-f = (temp_k - 273.15) * 1.8 + 32
	return render_template('temperature.html', temp=temp_f)
	
@app.route('/')
def index():
    return render_template('index.html')
	
if __name__ ** '__main__':
    app.run(debug=True)
