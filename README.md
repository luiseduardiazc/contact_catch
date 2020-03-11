# contact_catch
Final project+


### Installation

Install dependencies and run server.

```sh
$ cd contact_catch
$ pip install -r requirements.txt 
$ ./manage.py runserver 0.0.0.0:8000
```

### Development

##### API
##### url: /api/v1/scrap
Method: POST
##### Required fields
* url : string
* access_token : string

```sh
# curl example
$ curl -X POST -d '{"url": "some_url", "access_token": "some_token"}' -H 'Content-Type: application/json' 127.0.0.1:8000/api/v1/scrap
```

