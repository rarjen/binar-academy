const { Collection, Item, Header } = require("postman-collection");
const fs = require("fs");

// Membuat Collection
const postmanCollection = new Collection({
  info: {
    name: "Membuat Dokumentasi",
  },
  item: [],
});

// Set Header
const rawHeaderString =
  "Authorization:\nContent-Type:application/json\ncache-control:no-cache";

const rawHeader = Header.parse(rawHeaderString);

const requestHeader = rawHeader.map((h) => new Header(h));

// Create Endpoint
const apiEndpoint = "https://httpbin.org/post";
const requestName = "Contoh Request Postman";

const requestpayload = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

// Add tests for request
const requestTests = `
    pm.test("Sample Test: test for successful response", ()=>{
        pm.expect(pm.response.code).to.equal(200)
    })
`;

// Create final request
const postmanRequest = new Item({
  name: requestName,
  request: {
    header: requestHeader,
    url: apiEndpoint,
    method: "POST",
    body: {
      mode: "raw",
      raw: JSON.stringify(requestpayload),
    },
    auth: null,
  },
  events: [
    {
      listen: "test",
      script: {
        type: "text/javascript",
        exec: requestTests,
      },
    },
  ],
});

// memasukkan kedalam collection
postmanCollection.items.add(postmanRequest);

// convert to json
const collectionJSON = postmanCollection.toJSON();

// Export to File
fs.writeFile("./collection.json", JSON.stringify(collectionJSON), (err) => {
  if (err) {
    console.log("file saved");
  }
});
