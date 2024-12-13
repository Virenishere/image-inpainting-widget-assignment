# main.py
from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.responses import FileResponse
from fastapi.encoders import jsonable_encoder
from app.models.database import db  
from app.models.crud import create_image_record, get_image_by_id
from app.utils.utils import save_image, create_mask_image
import os
from PIL import Image
from io import BytesIO
from datetime import datetime
from fastapi import APIRouter

app = FastAPI()

app = FastAPI()

# Folder for saving uploaded images
UPLOAD_FOLDER = './uploads'

# Ensure the upload folder exists
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# Create an endpoint for image upload
@app.post("/upload/")
async def upload_image(original_image: UploadFile = File(...), mask_image: UploadFile = File(...)):
    original_image_data = await original_image.read()
    mask_image_data = await mask_image.read()

    # Save original image
    original_image_path = save_image(original_image_data, original_image.filename, UPLOAD_FOLDER)
    mask_image_path = save_image(mask_image_data, mask_image.filename, UPLOAD_FOLDER)

    # Save metadata in the database
    image_id = create_image_record(original_image_path, mask_image_path)

    return {"message": "Images uploaded successfully", "image_id": str(image_id)}

# Create an endpoint to retrieve the image pair
@app.get("/image/{image_id}/")
async def get_image(image_id: str):
    image_metadata = get_image_by_id(image_id)
    if image_metadata:
        return jsonable_encoder(image_metadata)
    raise HTTPException(status_code=404, detail="Image not found")


# Example to retrieve images directly by their name
@app.get("/uploads/{filename}")
async def get_image_by_filename(filename: str):
    file_path = os.path.join(UPLOAD_FOLDER, filename)
    if os.path.exists(file_path):
        return FileResponse(file_path)
    raise HTTPException(status_code=404, detail="Image not found")


@app.get("/")
async def read_root():
    return {"message": "Welcome to the FastAPI image upload service"}