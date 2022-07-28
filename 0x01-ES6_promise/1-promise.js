export default function getFullResponseFromAPI(success) {
    let response = new Promise((resolve, reject) => {
        if (success) {
            resolve({ status: 200, body: "success"});
        } else {
            reject(Error("The fake API is not working currently"));
        }
    });
    return response;
}