export const registerNewUser = async (formData) => {
  try {
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const finalDate = response.json();

    return finalDate;
  } catch (e) {
    console.log("error", e);
  }
};
