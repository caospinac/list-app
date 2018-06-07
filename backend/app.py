import os
from uuid import uuid4

from pymongo import MongoClient
from sanic import Sanic
from sanic.views import HTTPMethodView
from sanic import response as res
from sanic_cors import CORS

app = Sanic()

client = MongoClient(os.getenv('DB_HOST'), 27017)
db = client.my_database

@app.route('/', methods=['GET'])
def get_handler(request):
    return res.json({'data': list(db.records.find())})

@app.route('/post', methods=['POST'])
def post_handler(request):
    record = request.json
    record['_id'] = str(uuid4())
    result = db.records.insert_one(record)
    return res.json({'result': str(result)})

if __name__ == '__main__':
    CORS(app)
    app.run(host='0.0.0.0', port=80, debug=True)
