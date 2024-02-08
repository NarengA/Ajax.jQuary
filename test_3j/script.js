$(document).ready(function () {
    // AJAX request to get JSON data
    $.ajax({
        url: 'Data.json',  // Replace with the actual path to your JSON file
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            processData(data);
        },
        error: function (error) {
            console.error('Error fetching JSON data:', error);
        }
    });
});
function processData(data) {
    // Loop through each item in the JSON array
    $.each(data, function (index, item) {
        // Create a new HTML element for each item
        var element = $('<' + item.name + '></' + item.name + '>');
        
        // Set the content of the element
        element.html(item.content);

        // Attach events if any
        $.each(item.events, function (eventIndex, eventItem) {
            element.on(eventItem.name, function () {
                eval(eventItem.code);
            });
        });

        // Append the element to the container
        $('#json-container').append(element);

        // Append a line break after each element
        $('#json-container').append('<br>');
    });
}
