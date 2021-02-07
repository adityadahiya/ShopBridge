# ShopBridge

ShopBridge is an item inventory where users can add name, description, price and image of the item. The users can view the list of items or view each item individually.


## Getting Started

## Backend

### Dependencies

* [IntelliJ IDEA Community Edition](https://www.jetbrains.com/idea/download) recommended 
* [Java SE Development Kit 8+](https://www.oracle.com/technetwork/java/javase/downloads/index.html)
* [Maven](https://maven.apache.org/download.cgi)
* [MySQL Server 8](https://dev.mysql.com/downloads/mysql/) (or another standalone SQL instance)

Part of this project involves configuring a Spring application to connect to an external data source. Before beginning this project, you must install a database to connect to. Here are [instructions for installing MySQL 8](https://dev.mysql.com/doc/refman/8.0/en/installing.html).

You should install the Server and Connector/J, but it is also convenient to install the Documentation and Workbench.

After installing the Server, you will need to create a user that your application will use to perform operations on the server. You should create a user that has all permissions on localhost using the sql command found [here](https://dev.mysql.com/doc/refman/8.0/en/creating-accounts.html).

### Installation

1. Clone or download this repository.
2. Open IntelliJ IDEA.
3. In IDEA, select `File` -> `Open` and navigate to the `Backend` directory within this repository. Select that directory to open.
4. The project should open in IDEA. In the project structure, navigate to `src/main/java/com.application`. 
5. Within that directory, click on ItemApplication.java and select `Run` -> `Debug ItemApplication`. 
6. Open a browser and navigate to the url: [http://localhost:8082/test](http://localhost:8082/test)

You should see the message "Application installed successfully" in your browser.

## Testing

Once you have completed the above installation, you should also be able to run the included unit tests to verify basic functionality as you complete it. To run unit tests:

1. Within your project in IDEA, Navigate to `src/test/java/com.application`.
2. Within that directory, click on `ItemsFunctionalTest.java` and select `Run` -> `Run ItemsFunctionalTest`.

A window should open showing you the test executions. Both the tests should pass.

## Frontend

1. Pre-requisite: You should have node.js and npm installed on your system.
2. Open terminal and navigate to Frontend/webapp within the repository.
3. Run command: 'npm install -g http-server' and then 'http-server -o ./app'.
4. The application will open in a browser on port 8081.


