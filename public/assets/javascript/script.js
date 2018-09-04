
// Task submission, POST
$("#submit").on("click", function(event) {
    event.preventDefault();
    var newTask = {
        task: $("#task").val().trim()
    };
    console.log(`Your task is: "${newTask.task}"`);
    $("#task").val("");

/*     $.post("/api/create", newTask, function() {
        console.log("Added new task to db");
        location.reload();
    }); */

    $.ajax("/api/create", {
        type: "POST",
        data: newTask
    }).then(function() {
        console.log("Added new task to db");
        location.reload();
    })
});

// Marking complete, PUT

// Deleting task, DELETE