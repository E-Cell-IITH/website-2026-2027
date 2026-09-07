const GOOGLE_APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbynsiAqOqGFgO9Wm98ckJAr56VDmO28FIe-bT9hlfYCkYTqdxTVXoGbwC9AmKAaBJg/exec";

export async function submitStartupSenateRegistration(
  formData: Record<string, string>
) {
  try {
    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(
        `Server returned an error (${response.status}).`
      );
    }

    const result = await response.json();

    if (!result.success) {
      throw new Error(
        result.message || "Registration submission failed."
      );
    }

    return result;
  } catch (error) {
    console.error("Startup Senate submission error:", error);

    if (error instanceof Error) {
      throw error;
    }

    throw new Error(
      "Unable to submit your registration. Please check your internet connection and try again."
    );
  }
}