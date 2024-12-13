from app.models.database import images_collection,ImageMetadata
from datetime import datetime

# Save image metadata to the database
def create_image_record(original_image_path: str, mask_image_path: str):
    image_metadata = ImageMetadata(
        original_image_path=original_image_path,
        mask_image_path=mask_image_path,
        timestamp=datetime.utcnow().isoformat()
    )
    # Insert record into MongoDB
    image_dict = image_metadata.dict()
    result = images_collection.insert_one(image_dict)
    return result.inserted_id

# Retrieve image metadata by ID
def get_image_by_id(image_id: str):
    image_data = images_collection.find_one({"_id": image_id})
    if image_data:
        return ImageMetadata(**image_data)
    return None
