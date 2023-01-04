# Drafts

## Create draft

This API route is used to create a draft email. The request should include the form fields necessary to create the email (e.g. subject, recipient, message body) in the request body. The route will parse these fields and use the `gmail` API to create a draft email in the authenticated user's Gmail account. If successful, the API will return a response with status code 200. If an error occurs, it will throw an error with a relevant message. This route uses `authMiddleware` to handle authenticating the request before calling the setu`pDraft function.

To use this route, make a POST request to the route's endpoint with the necessary form fields in the request body. The route will return a response with status code 200 if the draft was successfully created, or throw an error if an issue occurred.

```ts
const requestOptions = {
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  body: "to=test@example.com&subject=Test+Subject&body=Test+Body",
};
fetch("/api/createDraft", requestOptions)
  .then((response) => response.json())
  .then((data) => console.log(data));
```

## Delete draft

This API route allows you to delete a draft message from the authenticated user's Gmail account.

To use this route, you will need to make a DELETE request to the route with the `id` of the draft message you want to delete in the request body. The `id` can be obtained from the `id` field of a draft message object, which can be retrieved using the `gmail.users.drafts.list` or `gmail.users.drafts.get` methods.

Here is an example of how you can use this route to delete a draft message:

```ts
import axios from "axios";

const deleteDraft = async (draftId: string) => {
  try {
    const response = await axios.delete("/api/deleteDraft", {
      body: {
        id: draftId,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

deleteDraft("draftId")
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
```

## Fetch drafts

The `fetchDrafts` API route is used to retrieve a list of all drafts from a user's Gmail account.

To use this route, a GET request must be made to the specified endpoint with a valid Google OAuth2 access token in the request header. Upon successful execution, the API will return a response containing a list of draft messages and their corresponding metadata in the form of a JSON object.

Example usage:

```ts
const response = await fetch("/api/fetchDrafts", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  },
});

const drafts = await response.json();
console.log(drafts);
```

## Fetch single draft

This is an API route that allows users to retrieve a single draft from their Gmail account. The draft is returned in its "full" format, which includes the full email message as well as metadata about the draft. The draft is identified by its unique `id`, which is passed as a URL parameter in the request. The route uses the `gmail` object from the `googleapis` library to call the `users.drafts.get` method and pass in the `userId` and `id` of the desired draft. It then processes the response data, using the `remapFullMessage` utility function to decode the message and return the decoded message along with the id of the draft. If an error is encountered during the process, it is logged and the error is thrown. This route is protected by `authMiddleware`, which handles the authentication process for the request.

An example of how to use this route is as follows:

```ts
const draftId = "1234567890abcdefghijklmnopqrstuvwxyz";
const response = await fetch(`/api/drafts/${draftId}`, {
  method: "GET",
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});
const draft = await response.json();
console.log(draft);
```

This example sends a GET request to the `/api/drafts/:id` route, passing the `id` of the desired draft in the URL. It includes an `Authorization` header with a valid JWT in the request to authenticate the request. It then parses the response as JSON and logs the resulting draft object to the console.

## Send draft

This code defines an API route that allows you to send a draft email stored in your Gmail account. It exports a function called `sendDraft` that you can use to send a draft email by making a `POST` request to the route.

To use this route, you should send a `POST` request with a JSON payload containing an `id` field that specifies the ID of the draft email you want to send. For example:

```ts
const requestOptions = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ id: "draft-email-id-goes-here" }),
};

const response = await fetch("/send-draft", requestOptions);
const responseJson = await response.json();
console.log(responseJson);
```

## Update draft

This API route allows the user to update a draft.

To use this route, the user needs to send a HTTP PUT request to the route's endpoint with a request body that includes the following fields:

- `draftId`: The ID of the draft to be updated.
- `threadId`: The ID of the thread that the draft belongs to.
- `messageId`: The ID of the message within the draft to be updated.
  Example usage:

```ts
const draftId = "abc123";
const threadId = "def456";
const messageId = "ghi789";

const requestBody = {
  draftId,
  threadId,
  messageId,
};

const options = {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(requestBody),
};

const response = await fetch(`http://localhost:3000/api/updateDraft`, options);
const updatedDraft = await response.json();
```
