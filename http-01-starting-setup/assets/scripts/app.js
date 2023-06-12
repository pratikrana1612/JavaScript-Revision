const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const fetchBtn = document.querySelector("#available-posts button");
const form = document.querySelector("#new-post form");

function sendHttpRequest(method, url, body) {
  //   const promise = new Promise((resolve, reject) => {
  //     const xhr = new XMLHttpRequest();
  //     xhr.open(method, url);
  //     xhr.send(body);

  //     xhr.onload = function () {
  //       if (xhr.status >= 200 && xhr.status < 300) {
  //         resolve(JSON.parse(xhr.response));
  //       } else {
  //         reject(new Error("something went wrong"));
  //       }
  //     };
  //     xhr.onerror = function () {
  //       console.log(xhr.response);
  //       console.log(xhr.status);
  //     };
  //   });
  //   return promise;
  return fetch(url, {
    method: method,
    body: body,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      } else {
        response.json().then((err) => {
          console.log(err);
          return err;
          // return new Error("Something went wrong");
        });
      }
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
}

function getPosts() {
  listElement.innerHTML = "";
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((responseData) => {
      console.log(responseData);
      for (const post of responseData.data) {
        const postEl = document.importNode(postTemplate.content, true);
        postEl.querySelector("h2").textContent = post.title.toUpperCase();
        postEl.querySelector("p").textContent = post.body;
        postEl.querySelector("li").id = post.id;
        listElement.append(postEl);
      }
    })
    .catch((error) => {
      console.log(error.message);
      console.log(error.response);
    });
}

async function postRequest(title, content) {
  const userId = Math.random();
  const body = {
    title: title,
    body: content,
    userId: userId,
  };
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    body
  );
  console.log(response);
}
fetchBtn.addEventListener("click", getPosts);
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = event.currentTarget.querySelector("#title").value;
  const body = event.currentTarget.querySelector("#content").value;

  postRequest(title, body);
});
listElement.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const id = event.target.closest("li").id;
    console.log(id);
    axios.delete("DELETE", `https://jsonplaceholder.typicode.com/posts/${id}`);
    event.target.closest("li").remove();
  }
});
// postRequest('A dummy','a body')
