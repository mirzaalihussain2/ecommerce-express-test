const baseUrl = 'http://127.0.0.1:5000/api/products';

async function clearCollection () {
  const response = await fetch(baseUrl, {method: "DELETE"});
  const deletedInfo = await response.json();
  return deletedInfo;
}

console.log(clearCollection);

// async function deleteProds () {
//   const response = await fetch(baseUrl, {method: "DELETE"});
//   const deletedProdz = await response.json();
//   console.log(response);
// };

// deleteProds();