export const uploadToCloudinary = async (file: File): Promise<string> => {
    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", "sachi-food");

    const response = await fetch(
        "https://api.cloudinary.com/v1_1/dpsuirjir/image/upload",
        {
            method: "POST",
            body: formData,
        }
    );

    if (!response.ok) {
        throw new Error("Image upload failed");
    }

    const data = await response.json();

    return data.secure_url;
};