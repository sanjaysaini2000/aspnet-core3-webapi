# Javascrit Front-end to BookStore Web API

## Git Branch - Frontend

This Javascript frontend is developed with bootstrap to demonstrate crud operations of BookStore Web API that was written in asp.net core 3.1 using Entity Framework Core 3.1 with Sql Server as backend.

## Prerequisites

- In order to run this app, you need .Net Core SDK that includes .Net CLI tools and .Net Core Runtime installed on our machine.
  So download and install the latest version of .Net Core SDK available from this [link](https://dotnet.microsoft.com/download).

- Postman which a famous API Client tool used in testing web API by sending web requests and inspecting response from the API. So download and install Postman for free from this [link](https://www.getpostman.com/downloads/).

- And last, we need to have SQL Server installed on the machine. In case you already have Visual Studio 2015 or later installed then SQL Server Express edition will already be installed along with the Visual Studio. Otherwise download and install latest SQL Server Express edition free from this [link](https://www.microsoft.com/en-us/sql-server/sql-server-editions-express).

## Getting Started

Clone or Download the zip file of this repository.

### Entity Framework Core tools

Also you will require Entity Framework Core tools that includes “dotnet ef” tool and the EF designer installed in order to create EF Migrations.

So open the command window in the folder where you have cloned or unzipped the repository.
Now run following commands.

```
dotnet tool install --global dotnet-ef
```

### Create the database

- First, check if your local sql server name is "(localdb)\mssqllocaldb" than you dont have do anything otherwise goto ConfigureServices method in Startup.cs and change the sql server appropriately.

- Second, we need to apply “initialCreate” migration on the database so it will create new database.
  So run following command to apply the migration to the database.

```
dotnet ef database update
```

Our Web API will listening at HTTPS so we need to create and trust the development certificate so that web API hosts securely on local development server when we run the project.

So run following command and click on the yes button on the Security Warning dialog window.

```
dotnet dev-certs https --trust
```

### Running the App

Run the following command to run the app in the command window.

```
dotnet run
```

## Built With

- [.Net Core SDK 3.1](https://dotnet.microsoft.com/download/dotnet-core/3.1) - The .Net Core framework used
- [VS Code](https://code.visualstudio.com/download) - The Code editor used
