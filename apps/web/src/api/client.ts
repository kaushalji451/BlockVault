const API_URL =
    import.meta.env.VITE_API_URL || "http://localhost:5000/api/v1";

export async function apiFetch(
    endpoint: string,
    options?: RequestInit
) {
    const response = await fetch(`${API_URL}${endpoint}`, options);

    if (!response.ok) {
        throw new Error("API request failed");
    }

    return response.json();
}
