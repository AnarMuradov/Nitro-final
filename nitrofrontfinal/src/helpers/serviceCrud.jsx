export const servicePost = async (data) => {
  await fetch("http://localhost:3000", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  });
};
export const serviceDelete = async (id) => {
  await fetch(`http://localhost:3000/${id}`, {
    method: "DELETE",
  });
  
};
