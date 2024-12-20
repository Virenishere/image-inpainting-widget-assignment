from pydantic import BaseModel
from typing import Optional

class ImageCreateRequest(BaseModel):
    original_image: str
    mask_image: str

class ImageResponse(BaseModel):
    original_image_path: str
    mask_image_path: str
