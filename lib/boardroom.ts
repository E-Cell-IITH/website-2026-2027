const GOOGLE_APPS_SCRIPT_URL =
  "YOUR_BOARDROOM_GOOGLE_APPS_SCRIPT_WEB_APP_URL";

export async function submitBoardroomRegistration(
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
    console.error("Boardroom submission error:", error);

    if (error instanceof Error) {
      throw error;
    }

    throw new Error(
      "Unable to submit your registration. Please check your internet connection and try again."
    );
  }
}