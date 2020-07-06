# BookStore Web API

This web api is developed with .Net Core 3.1 to demonstrate crud operations using Entity Framework Core 3.1 with Sql Server as backend.

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

### Pre-run Ckeck

Check if your local sql server name is "(localdb)\mssqllocaldb" than you dont have do anything otherwise goto ConfigureServices method in Startup.cs and change the sql server appropriately.

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

Check out my [article](https://sanjaysaini.tech/create-asp-net-core-3-web-api-using-entity-framework-core/) on how to test this web api.

## Docker Support
Docker image of this API is available at my docker Hub registory. You can pull the image from [aspnetcorewebapi](https://hub.docker.com/repository/docker/sanjaysaini2000/aspnetcorewebapi) repository.

## Built With

- [.Net Core SDK 3.1](https://dotnet.microsoft.com/download/dotnet-core/3.1) - The .Net Core framework used
- [VS Code](https://code.visualstudio.com/download) - The Code editor used
