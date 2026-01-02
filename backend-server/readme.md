<!-- for docker -->
docker build -t fastapi-app .
docker run -p 8000:8000 fastapi-app


<!-- for run server -->
python 3.11.6
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload