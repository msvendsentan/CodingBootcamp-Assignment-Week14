// Task submission, POST
$("#submit").on("click", function(event) {
    
    // Client-side page handling
    event.preventDefault();
    var newTask = {
        task: $("#task").val().trim()
    };
    $("#task").val("");

    // Send the POST request, reload the page
    $.ajax("/api/create", {
        type: "POST",
        data: newTask
    }).then(function() {
        location.reload();
    });
});

// Mark a task as complete, PUT
$(document).on("click", ".complete", function() {
    
    $.ajax("/api/update/" + $(this).attr("data-id"), {
        type: "PUT",
        data: {complete: 1}
    }).then(function() {
        location.reload();
    });
});

// Mark a task as incomplete, PUT
$(document).on("click", ".incomplete", function() {
    
    $.ajax("/api/update/" + $(this).attr("data-id"), {
        type: "PUT",
        data: {complete: 0}
    }).then(function() {
        location.reload();
    });
});

// Deleting task, DELETE
$(document).on("click", ".delete", function() {

    $.ajax("/api/delete/" + $(this).attr("data-id"), {
        type: "DELETE"
    }).then(function() {
        location.reload();
    });
});