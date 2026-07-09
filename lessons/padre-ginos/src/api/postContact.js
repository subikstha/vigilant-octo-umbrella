export default async function postContact(name, email, message) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, message }),
  });

  // This is how to properly catch the error so that TanStack query will properly set the isError
  if (!response.ok) {
    throw new Error("Network response was not ok. Send help");
  }

  return response.json();
}
