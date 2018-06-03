from sanic import Sanic
from sanic.views import HTTPMethodView
from sanic.response import json

app = Sanic('some_name')

class View(HTTPMethodView):

  def get(self, request):
      return json({'hello': 'Hello world!'})

app.add_route(View.as_view(), '/view')

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=80)
