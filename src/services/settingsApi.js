const url = "https://qualified-ame-instalationone-c9906d4b.koyeb.app/api";

export async function getSettings() {
  try {
    const response = await fetch(`${url}/info`);
    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function updateSettings(settings) {
  try {
    const response = await fetch(`${url}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(settings),
    });
    console.log(response);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
