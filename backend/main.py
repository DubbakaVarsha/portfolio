from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
import mysql.connector
from mysql.connector import Error
from dotenv import load_dotenv
import os


# Load environment variables from backend/.env
load_dotenv()


app = FastAPI()


# Allow React frontend to communicate with FastAPI
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:5174",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# MySQL configuration
DB_CONFIG = {
    "host": os.getenv("MYSQL_HOST", "localhost"),
    "port": int(os.getenv("MYSQL_PORT", "3306")),
    "user": os.getenv("MYSQL_USER", "root"),
    "password": os.getenv("MYSQL_PASSWORD"),
    "database": os.getenv("MYSQL_DATABASE", "portfolio_db"),
}


# Contact form data model
class ContactMessage(BaseModel):
    name: str
    email: EmailStr
    message: str


# MySQL connection
def get_db_connection():
    try:
        connection = mysql.connector.connect(**DB_CONFIG)

        if connection.is_connected():
            return connection

    except Error as error:
        print("MySQL connection error:", error)

    return None


@app.get("/")
def home():
    return {
        "message": "Portfolio backend is running!"
    }


@app.get("/api/health")
def health_check():

    connection = get_db_connection()

    if connection:
        connection.close()

        return {
            "status": "success",
            "message": "Backend and MySQL are healthy"
        }

    return {
        "status": "error",
        "message": "Backend is running, but MySQL connection failed"
    }


@app.post("/api/contact")
def receive_contact_message(data: ContactMessage):

    connection = get_db_connection()

    if connection is None:
        return {
            "status": "error",
            "message": "Unable to connect to the database."
        }

    cursor = None

    try:
        cursor = connection.cursor()

        query = """
            INSERT INTO contact_messages
            (name, email, message)
            VALUES (%s, %s, %s)
        """

        values = (
            data.name,
            data.email,
            data.message,
        )

        cursor.execute(query, values)

        connection.commit()

        print("New Contact Message Saved")
        print("-------------------------")
        print("Name:", data.name)
        print("Email:", data.email)
        print("Message:", data.message)

        return {
            "status": "success",
            "message": "Your message has been received!"
        }

    except Error as error:

        print("Database error:", error)

        return {
            "status": "error",
            "message": "Failed to save your message."
        }

    finally:

        if cursor:
            cursor.close()

        if connection.is_connected():
            connection.close()