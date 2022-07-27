function getFullResponseFromAPI(success) {
    response = Promise((resolve, reject) => {
        if (success) {
            resolve({ status: 200, body: "success"})
        } else {
            reject(Error("The fake API is not working currently"));
        }
    });
    return response;
}