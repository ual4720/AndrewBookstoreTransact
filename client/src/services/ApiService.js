const apiPort = location.protocol === "https:" ? ":8443" : ":8080";

const apiUrl =
  location.protocol +
  "//" +
  location.hostname +
  apiPort +
  process.env.BASE_URL +
  "api";

export default {
  fetchCategories() {
    const url = apiUrl + "/categories";
    console.log("GET from " + url);
    return fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .catch((reason) => {
        console.log("Error fetching category data", reason);
      });
  },
  fetchSelectedCategoryBooks(category) {
    const url = apiUrl + "/categories/name/" + category + "/books/";
    console.log("GET from " + url);
    return fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .catch((reason) => {
        console.log("Error fetching category data", reason);
      });
  },
  fetchSelectedCategorySuggestedBooksById(categoryId, limit = 3) {
    const url =
      apiUrl + "/categories/" + categoryId + "/suggested-books?limit=" + limit;
    console.log("GET from " + url);
    return fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .catch((reason) => {
        console.log("Error fetching category data", reason);
      });
  },
  categoryGenre(category) {
    return category.name.substring(category.name.indexOf(":") + 1);
  },
  getRandomCategories(min = 1001, max = 1006) {
    let numbers = [];

    min = Math.ceil(min);
    max = Math.floor(max);

    let num = Math.floor(Math.random() * (max - min + 1)) + min;

    if (num - 2 >= min) {
      numbers.push(num);
      numbers.push(num - 1);
      numbers.push(num - 2);
    } else if (num + 2 <= max) {
      numbers.push(num);
      numbers.push(num + 1);
      numbers.push(num + 2);
    } else {
      numbers.push(num - 1);
      numbers.push(num);
      numbers.push(num + 1);
    }

    return numbers;
  },
  placeOrder(order) {
    console.log("POSTing to " + `${apiUrl}/orders`);
    return fetch(`${apiUrl}/orders`, {
      method: "POST",
      body: JSON.stringify(order),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((stream) => {
      if (stream.ok) {
        return stream.json();
      }
      throw new Error("Network response was not ok.");
    });
  },
};
