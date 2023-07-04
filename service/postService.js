const axios = require("axios");

const savePost = async (title,postDescription,latitude,longitude,startDate,endDate,postType,token) => {
  try {
    // Make a POST request to the login endpoint
    const response = await axios.post("http://localhost:3000/post", {
        title,postDescription,latitude,longitude,startDate,endDate,postType
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    );

    // Extract the data from the response
    const data = response.data;

    // Pass the data to the view
    return { data };
  } catch (error) {
    // Handle any error that occurred during the API call
    console.error("Error:", error);
    throw new Error("Error:", error);
  }
};

module.exports = {savePost};