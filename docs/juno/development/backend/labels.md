# Labels

## Create labels

This API route allows you to create new labels in Gmail. It requires an authenticated Google OAuth2 client, which is provided by the `authMiddleware` function. To use this route, you need to make a POST request with a JSON body containing the following parameters:

- `labelListVisibility`: The visibility of the label in the label list. Accepted values are "labelShow" and "labelHide".
- `messageListVisibility`: The visibility of the label in the message list. Accepted values are "show" and "hide".
- `name`: The name of the label.
  The response to a successful request will be a Google API response object containing the details of the newly created label. If there is an error, it will throw an error with the relevant message.

## Fetch labels

This is an API route for fetching labels from a Gmail account. It uses the `googleapis` library to authenticate the request and make a request to the Gmail API to retrieve the labels. The `getLabels` function is called with an `OAuth2Client` object as an argument, which is used to authenticate the request. The `fetchLabels` function is the actual route handler that will be called when the route is accessed. It uses the `authMiddleware` function to wrap the `getLabels` function and handle the request and response objects. When the route is accessed, the `getLabels` function will be called and will return the labels for the specified Gmail account. If an error occurs, it will be thrown and can be caught and handled as needed.

## Fetch single label

This is an API route for fetching a single label from a Gmail account. It uses the `googleapis` library to authenticate the request and make a request to the Gmail API to retrieve the label. The `getLabel` function is called with an OAuth2Client object and the request object as arguments, which are used to authenticate the request and get the label ID from the request parameters. The `fetchSingleLabel` function is the actual route handler that will be called when the route is accessed. It uses the `authMiddleware` function to wrap the `getLabel` function and handle the request and response objects. When the route is accessed, the `getLabel` function will be called and will return the specified label for the specified Gmail account. If an error occurs, it will be thrown and can be caught and handled as needed.

## Remove labels

This is an API route for deleting labels from a Gmail account. It uses the `googleapis` library to authenticate the request and make a request to the Gmail API to delete the label. The `removeTheLabels` function is called with an `OAuth2Client` object and the request object as arguments, which are used to authenticate the request and get the label ID from the request body. The removeLabels function is the actual route handler that will be called when the route is accessed. It uses the authMiddleware function to wrap the `removeTheLabels` function and handle the request and response objects. When the route is accessed, the `removeTheLabels` function will be called and will delete the specified label for the specified Gmail account. If an error occurs, it will be thrown and can be caught and handled as needed.

## Update labels

This is an API route for updating labels in a Gmail account. It uses the `googleapis` library to authenticate the request and make a request to the Gmail API to update the label. The `refreshLabels` function is called with an `OAuth2Client` object and the request object as arguments, which are used to authenticate the request and get the label ID and request body from the request. The updateLabels function is the actual route handler that will be called when the route is accessed. It uses the `authMiddleware` function to wrap the `refreshLabels` function and handle the request and response objects. When the route is accessed, the `refreshLabels` function will be called and will update the specified label for the specified Gmail account. If an error occurs, it will be thrown and can be caught and handled as needed.
