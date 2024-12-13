from pydantic import BaseModel
from typing import Optional
import os
from pymongo import MongoClient
from dotenv import load_dotenv

load_dotenv()

# Retrieve the MongoDB URI from the environment variable
mongo_uri = os.getenv('MONGO_URI')

# Create a global client connection (optional if you want to reuse the same connection)
client = MongoClient(mongo_uri)

# Define a function to get the database connection
db = client['image_inpainting']
images_collection = db['images']

# Define ImageMetadata class
class ImageMetadata(BaseModel):
    original_image_path: str
    mask_image_path: str
    timestamp: Optional[str] = None
