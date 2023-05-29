exports.getdate = function () {

    const today = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        // year:"numeric"
    }
    const day = today.toLocaleDateString("en-US", options);
    return day;
}
exports.getday = function () {

    const today = new Date();
    const options = {
        weekday: "long"
    }
    const day = today.toLocaleDateString("en-US", options);
    return day;
}