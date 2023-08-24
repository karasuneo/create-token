import { Form } from "@/types/form";

export const postDictionary = (dictionary: any) => {
  const apiUrl = "http://localhost:8084/api/dictionary/post";

  const dictionaty: Form = {
    surface: dictionary.surface,
    pronunciation: dictionary.pronunciation,
    accent_type: dictionary.accent_type,
  };

  console.log("dictionary:", dictionary);

  fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(dictionary),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Response:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
