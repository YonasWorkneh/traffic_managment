const url = "https://statistical-ketti-instalationone-22da584a.koyeb.app/api";

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
    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
