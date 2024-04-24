

# RESTful Routing Chart Generator 

Welcome to the **RESTful Routing Chart Generator**! This Node.js command-line tool allows you to create and document RESTful API routes. You can input details for different routes, and the tool will generate a formatted chart and export it to a text file. 

## Getting Started 

1. **Clone the Repository:** 

git clone https://github.com/your-username/restful-routing-chart.git cd restful-routing-chart 

2. **Install Dependencies:** 

npm install 

3. **Usage:** 

- Run the following command to start the tool: 

  ``` 

  node app.js 

  ``` 

- Follow the prompts to input details for each route. 

- When you're done, select "Finish" to generate the routing chart. 

4. **Generated Chart:** 

- The tool will display the routing chart in the console. 

- It will also export the chart to a text file with a unique filename (e.g., `routing_chart_20240423101108.txt`). 

## Example Routing Chart 

 
| HTTP Method | URL Path       | Route Name | Data Payload | Description          | 

|-------------|----------------|------------|--------------|----------------------| 

| GET         | /api/users     | getUsers   | No           | Get all user records | 

| POST        | /api/users     | createUser | Yes          | Create a new user    | 

| PUT         | /api/users/:id | updateUser | Yes          | Update user details  | 

| DELETE      | /api/users/:id | deleteUser | No           | Delete a user        | 

 


