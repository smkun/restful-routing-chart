// Import the prompt-sync module for user input
const prompt = require("prompt-sync")();
// Import the fs module for file system operations
const fs = require("fs");

// Array to store the route information
const routes = [];

// Function to ask the user for route information
function askForRoute() {
    console.log("\\nHTTP Methods:");
    console.log("1. GET");
    console.log("2. POST");
    console.log("3. PUT");
    console.log("4. DELETE");
    console.log("5. Finish");

    // Prompt the user to choose an HTTP method
    const methodChoice = prompt(
        "Enter the number corresponding to the HTTP method: "
    );

    // If the user chooses to finish, generate the routing chart and return
    if (methodChoice === "5") {
        generateRoutingChart();
        return;
    }

    // Map the user's choice to the corresponding HTTP method
    const methodMap = {
        1: "GET",
        2: "POST",
        3: "PUT",
        4: "DELETE",
    };
    const method = methodMap[methodChoice];

    // Prompt the user to enter the URL path
    const path = prompt("Enter the URL path: ");
    // Prompt the user to enter the route name
    const name = prompt("Enter the route name: ");

    console.log("\\nData Payload:");
    console.log("1. Yes");
    console.log("2. No");

    // Prompt the user to choose if the route has a data payload
    const payloadChoice = prompt(
        "Does this route have a data payload? Enter the corresponding number: "
    );
    const hasPayload = payloadChoice === "1";

    // Prompt the user to enter a description for the route
    const description = prompt("Enter a description for the route: ");

    // Create an object to store the route information
    const route = {
        method,
        path,
        name,
        hasPayload,
        description,
    };

    // Add the route object to the routes array
    routes.push(route);

    // Recursively call the askForRoute function to ask for more routes
    askForRoute();
}

// Function to generate a unique filename for the routing chart
function generateUniqueFilename() {
    const timestamp = new Date().toISOString().replace(/[-:.]/g, "");
    return `routing_chart_${timestamp}.txt`;
}

// Function to generate the routing chart
function generateRoutingChart() {
    // Create the header row for the routing chart
    const chartHeader =
        "| HTTP Method | URL Path | Route Name | Data Payload | Description |\\n|-------------|----------|------------|--------------|-------------|";

    // Create the data rows for the routing chart
    const chartRows = routes.map(
        (route) =>
            `| ${route.method} | ${route.path} | ${route.name} | ${
                route.hasPayload ? "Yes" : "No"
            } | ${route.description} |`
    );

    // Combine the header and data rows to form the complete routing chart
    const chart = `${chartHeader}\\n${chartRows.join("\\n")}`;

    console.log("\\nRESTful Routing Chart:\\n");
    console.log(chart);

    // Generate a unique filename for the routing chart
    const filename = generateUniqueFilename();

    // Export the routing chart to a text file
    fs.writeFile(filename, chart, (err) => {
        if (err) {
            console.error("Error exporting routing chart:", err);
        } else {
            console.log(`\\nRouting chart exported to ${filename}`);
        }
    });

    // Clear the routes array for the next chart
    routes.length = 0;
}

// Start the program by displaying a welcome message
console.log("Welcome to the RESTful Routing Chart Generator!");

// Call the askForRoute function to start collecting route information
askForRoute();
