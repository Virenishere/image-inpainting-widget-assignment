# Image Inpainting Widget Assignment

This project involves creating an image inpainting widget where users can upload an image, draw a mask on it, and export both the original image and the mask.

## Objective

The goal of this assignment is to create an interactive tool that allows users to:

1. Upload an image.
2. Draw on the image to create a mask.
3. Export and display the original image and the mask image as a pair.

## Installation Guide

Follow these steps to set up the project:

### Backend Setup 

1. **Create or Update `requirements.txt`**:

   Add the following packages to your `requirements.txt` file:

   ```plaintext
   fastapi
   uvicorn[standard]
   pymongo[srv]==3.12
   python-dotenv
   pydantic
   pillow
   vercel
   python-multipart
   ```

2. **Install Dependencies**:

   Run the following command to install the required packages:

   ```bash
   pip install -r requirements.txt
   ```

3. **Run the Backend Server**:

   Use the following command to run the FastAPI server:

   ```bash
   uvicorn app.main:app --reload
   ```

4. **Backend URL**:  
   The backend will run at `https://image-inpainting-widget-assignment-cyer.onrender.com` by default.

### Frontend Setup

1. **Install Dependencies**:

   Add the required libraries to your project and also, make sure to install development dependencies for Tailwind CSS and others:

   ```bash
   npm install
   ```

### Running the Frontend

Use the following command to run the frontend development server:

```bash
npm run dev
```

4. **Frontend URL**:  
   The frontend will run at `https://image-inpainting-widget-assignment.vercel.app/`.

## Features

### 1. **Image Upload**:

- Users can upload an image (JPEG/PNG format).
- The uploaded image is displayed on the canvas for further interactions.

### 2. **Mask Drawing**:

- Users can draw on the image to create a mask using a brush tool.
- The mask is generated with the drawn area in **white** and the background in **black**.

### 3. **Brush Controls**:

- Users can increase or decrease the brush size using a control button.

### 4. **Export the Mask**:

- Users can generate a separate mask image based on their drawing.
- Optionally, users can clear the canvas for new drawings.

### 5. **Display Images**:

- Both the original image and the generated mask are displayed side by side below the canvas.

## Backend Development (Optional)

For a full-featured solution, a FastAPI backend can be implemented to handle the following:

- Store original and mask images in a database or cloud storage.
- Provide endpoints for uploading and fetching images along with their respective masks.

### Backend Libraries

- **FastAPI**: A lightweight web framework for building APIs.
  
  Installation:

  ```bash
  pip install fastapi uvicorn
  ```

### FastAPI Endpoints

Here are the available endpoints for testing on **Postman**:


1. **GET /api** - Check if the server is working.

   - **Request**:  
     A simple GET request to `/api`.

   - **Response**:  
     A JSON response with a welcome message indicating the server is running.

   ![Postman GET Server Check](https://github.com/user-attachments/assets/68a97b25-519a-4754-934f-a8589550cd06)


2. **POST /api/upload/** - Upload original and mask images.

   - **Request**:  
     A multipart form request with two files: `original_image` and `mask_image`.

   - **Response**:  
     A JSON response containing a success message and `image_id`.

   ![image](https://github.com/user-attachments/assets/774f2f39-0319-4bb4-997c-6cb09f4d3192)

3. **GET /api/image/{image_id}/** - Get image metadata.

   - **Request**:  
     Use the `image_id` returned from the upload endpoint.

   - **Response**:  
     JSON metadata about the uploaded image pair.


4. **GET /api/uploads/{filename}** - Fetch the original or mask image directly.

   - **Request**:  
     Use the `filename` of the uploaded image.

   - **Response**:  
     Returns the image file.

   ![image](https://github.com/user-attachments/assets/0611b0f8-a07b-408c-bb02-f2916aeb90c8)

5. **GET /api/uploads/** - List all uploaded images.

   - **Request**:  
     No parameters.

   - **Response**:  
     List of all uploaded image filenames.

![image](https://github.com/user-attachments/assets/8753fb35-1d7d-4dd2-bee3-5f0aa55c9cc3)

 

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/Virenishere/image-inpainting-widget-assignment?tab=MIT-1-ov-file#readme)


## Contact

If you have any questions or queries, feel free to reach out to me via email at [virender288@gmail.com].


