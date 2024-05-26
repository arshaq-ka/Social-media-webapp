
export const uploadToCloudinary = async (pics) => {
  if (!pics) {
    console.error("Error from upload function: pics is not defined");
    return null;
  }

  const data = new FormData();
  data.append("file", pics);
  data.append("upload_preset", "vakulhtj");
  data.append("cloud_name", "doswuinvd");

  try {
    const res = await fetch("https://api.cloudinary.com/v1_1/doswuinvd/image/upload", {
      method: "post",
      body: data,
    });

    if (!res.ok) {
      console.error("Error from Cloudinary:", res.status, res.statusText);
      return null;
    }

    const fileData = await res.json();
    return fileData.url.toString();
  } catch (error) {
    console.error("Error from upload function:", error);
    return null;
  }
};
