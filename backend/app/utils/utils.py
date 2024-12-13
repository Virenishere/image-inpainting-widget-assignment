from PIL import Image
import os
from io import BytesIO

# Save uploaded image as a file
def save_image(image_data: bytes, filename: str, upload_folder: str):
    file_path = os.path.join(upload_folder, filename)
    with open(file_path, 'wb') as f:
        f.write(image_data)
    return file_path

# Function to generate a mask image based on the drawing
def create_mask_image(original_image: Image, draw_data: dict) -> Image:
    # Use the `draw_data` to create the mask
    # For simplicity, this could just be a placeholder mask image
    mask = Image.new('1', original_image.size, color=0)  # black background
    # In a real implementation, you would use the drawing data to apply the mask
    return mask
