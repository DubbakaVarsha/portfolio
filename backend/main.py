from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from supabase import create_client, Client
from dotenv import load_dotenv
import os


# Load .env
load_dotenv()


app = FastAPI()


# Supabase configuration
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_SECRET_KEY = os.getenv("SUPABASE_SECRET_KEY")

supabase: Client = create_client(
    SUPABASE_URL,
    SUPABASE_SECRET_KEY
)


# Allow React frontend
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


class ContactMessage(BaseModel):
    name: str
    email: EmailStr
    message: str


@app.get("/")
def home():
    return {
        "message": "Portfolio backend is running!"
    }


@app.get("/api/health")
def health_check():

    try:
        response = (
            supabase
            .table("contact_messages")
            .select("id")
            .limit(1)
            .execute()
        )

        return {
            "status": "success",
            "message": "Backend and Supabase are healthy"
        }

    except Exception as error:

        print("Supabase error:", error)

        return {
            "status": "error",
            "message": "Supabase connection failed"
        }


@app.post("/api/contact")
def receive_contact_message(data: ContactMessage):

    try:

        response = (
            supabase
            .table("contact_messages")
            .insert({
                "name": data.name,
                "email": str(data.email),
                "message": data.message
            })
            .execute()
        )

        print("New Contact Message Saved")
        print("-------------------------")
        print("Name:", data.name)
        print("Email:", data.email)
        print("Message:", data.message)

        return {
            "status": "success",
            "message": "Your message has been received!"
        }

    except Exception as error:

        print("Supabase database error:", error)

        return {
            "status": "error",
            "message": "Failed to save your message."
        }