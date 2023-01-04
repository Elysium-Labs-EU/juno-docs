# Contacts

## Fetch all contacts

This API route allows you to retrieve a list of "other contacts," or contacts that are not in your Google account, from a Gmail account.

To use this route, you will need to send a GET request to the route and include optional query parameters in the request:

- `pageSize`: An integer representing the maximum number of contacts to return in the response. The default value is 1000.
- `readMask`: A string representing the fields to include in the response. By default, all fields are returned.
- `pageToken`: A string representing a token identifying a page of results to return.
  Upon successful execution, the API will return an object containing a list of contacts and metadata about the list, including a token for the next page of results (if applicable).

If there are no contacts or there is an error, the API will return an error message.

Note: This route is protected by an `authMiddleware` function, which requires the request to be authenticated before the getContacts function is executed.

## Query contacts

This API route allows you to search for contacts in your Google account. The route requires an authenticated user.

To use this route, you can send a GET request to `/api/contacts/search` with the following optional query parameters:

- `query`: a string to search for in the contacts' names and email addresses
- `readMask`: a string that specifies which fields of the contact to return in the response.
  The response will be a JSON object with the following properties:

- `connections`: an array of contact objects that match the search query
- `nextPageToken`: a token that can be used to get the next page of results (if there are more results to retrieve)
  Here is an example of how to use this route:

```ts
const query = "John";
const readMask = "names,emailAddresses";

const response = await fetch(
  `/api/contacts/search?query=${query}&readMask=${readMask}`
);
const contacts = await response.json();
```
