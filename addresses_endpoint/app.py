from flask import Flask, request, jsonify
from flask_cors import CORS
from db import get_addresses, insert_address
import os

app = Flask(__name__)

CORS(app, supports_credentials=True, allow_headers=["Content-Type", "KEY"])

# get env variable
API_KEY = os.environ.get('API_KEY')

@app.after_request
def disable_cors(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response

@app.route('/bloggers', methods=['GET'])
def bloggers_get():
    # Check if the 'KEY' header is present
    if 'KEY' not in request.headers:
        return jsonify({'error': 'API key missing'}), 401
    
    # Verify the API key
    KEY = request.headers.get('KEY')
    if KEY != API_KEY:
        return jsonify({'error': 'Invalid API key'}), 403

    # Return a JSON response
    return jsonify(get_addresses()), 200

@app.route('/bloggers', methods=['POST'])
def bloggers_add():
    # Check if the 'KEY' header is present
    if 'KEY' not in request.headers:
        return jsonify({'error': 'API key missing'}), 401
    
    # Verify the API key
    KEY = request.headers.get('KEY')
    if KEY != API_KEY:
        return jsonify({'error': 'Invalid API key'}), 403

    # Check if the address is present in the request
    if request.args.get('address') is None:
        return jsonify({'error': 'Address missing'}), 400
    
    other_data = ['name', 'avatar', 'bio', 'subscriptionCost']
    other_data_values = []
    for d in other_data:
        if request.args.get(d) is None:
            return jsonify({'error': f'{d} missing'}), 400
        other_data_values.append(str(request.args.get(d)))

    if insert_address(str(request.args.get('address')), *other_data_values):
        return jsonify({'message': 'Address added'}), 201
    
    return jsonify({'error': 'Address already exists'}), 400

