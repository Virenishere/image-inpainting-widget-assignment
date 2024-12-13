from pydantic import BaseModel
from typing import Optional

class ImageMetadata(BaseModel):
    original_image_path: str
    mask_image_path: str
    timestamp: Optional[str] = None
