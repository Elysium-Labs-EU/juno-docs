# Threads

## Delete single thread

This API route allows you to delete a single thread in a Gmail account.

To use this route, you will need to send a DELETE request to the route, with the id of the thread you wish to delete in the request body.

Upon successful execution, the API will return the response from the Gmail API's delete method for threads. If there is an error, the API will return an error message.

Note: This route is protected by an `authMiddleware` function, which requires the request to be authenticated before the deleteSingleThread function is executed.

## Fetch full threads

This API route allows you to retrieve a list of threads in a Gmail account, along with their full details.

To use this route, you will need to send a GET request to the route, with the following optional query parameters in the request:

- `labelIds`: a comma-separated list of label IDs to filter the threads by
- `maxResults`: the maximum number of threads to return
- `pageToken`: a token to retrieve the next page of results, obtained from the previous API response
  Upon successful execution, the API will return an object containing the following properties:

- `threads`: an array of thread objects, each containing the full details of a thread
- `nextPageToken`: a token to retrieve the next page of results, if available
- `resultSizeEstimate`: an estimate of the total number of threads that match the query
- `timestamp`: a timestamp indicating when the threads were last fetched

Note: This route is protected by an `authMiddleware` function, which requires the request to be authenticated before the getFullThreads function is executed.

## Fetch simple threads

This API route allows you to retrieve a list of threads in a Gmail account, along with a simplified set of their details.

To use this route, you will need to send a GET request to the route, with the following optional query parameters in the request:

- `labelIds`: a comma-separated list of label IDs to filter the threads by
- `maxResults`: the maximum number of threads to return
- `pageToken`: a token to retrieve the next page of results, obtained from the previous API response
  Upon successful execution, the API will return an object containing the following properties:

- `threads`: an array of thread objects, each containing the simplified details of a thread
- `nextPageToken`: a token to retrieve the next page of results, if available
- `resultSizeEstimate`: an estimate of the total number of threads that match the query
- `timestamp`: a timestamp indicating when the threads were last fetched

Note: This route is protected by an `authMiddleware` function, which requires the request to be authenticated before the getSimpleThreads function is executed.

## Fetch single thread

This API route allows you to retrieve a single thread in a Gmail account, along with its full details.

To use this route, you will need to send a GET request to the route, including the id of the thread you wish to retrieve in the URL parameters.

Upon successful execution, the API will return an object containing the full details of the specified thread.

If the thread is not found or there is an error, the API will return an error message.

Note: This route is protected by an `authMiddleware` function, which requires the request to be authenticated before the getThread function is executed.

## Thrash thread

This API route allows you to move a single thread in a Gmail account to the trash.

To use this route, you will need to send a POST request to the route, including the id of the thread you wish to move to the trash in the URL parameters.

Upon successful execution, the API will return an object containing the details of the modified thread.

If the thread is not found or there is an error, the API will return an error message.

Note: This route is protected by an `authMiddleware` function, which requires the request to be authenticated before the thrashSingleThread function is executed.

## Thread request

This module defines a function that creates a request body for a list threads request to the Gmail API.

The function takes in an Express request object and returns an object with the following properties:

- `userId`: the user ID of the Gmail account (set to the value of the USER constant)
- `maxResults`: the maximum number of threads to return, with a default value of 20 if not specified in the request query parameters
- `labelIds`: an array of label IDs to filter the threads by, if specified in the request query parameters (note that if the ARCHIVE_LABEL constant is included, it will be removed and replaced with a q parameter)
- `pageToken`: a token to retrieve the next page of results, if specified in the request query parameters
- `q`: a search query to filter the threads by, if specified in the request query parameters

The function can be used to create the request body for a call to the Gmail API's `list` method for threads.

## Update thread

This API route allows you to modify a single thread in a Gmail account.

To use this route, you will need to send a POST request to the route, including the `id` of the thread you wish to modify in the URL parameters, and a request body containing the updated thread data.

Upon successful execution, the API will return an object containing the details of the modified thread.

If the thread is not found or there is an error, the API will return an error message.

Note: This route is protected by an `authMiddleware` function, which requires the request to be authenticated before the updateSingleThread function is executed.
