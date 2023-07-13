from flask import Flask, request, jsonify
from db import get_addresses, insert_address
import os

app = Flask(__name__)

# get env variable
API_KEY = os.environ.get('API_KEY')

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

    if insert_address(str(request.args.get('address'))):
        return jsonify({'message': 'Address added'}), 201
    
    return jsonify({'error': 'Address already exists'}), 400

