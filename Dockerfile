FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build  
WORKDIR /src  

# Copy csproj and restore as distinct layers
COPY BookStoreApi.csproj /src 
RUN dotnet restore 

# Copy everything else and build
COPY . /src 
RUN dotnet publish -c Release -o out  

# Build runtime image  
FROM mcr.microsoft.com/dotnet/core/aspnet:3.1 
WORKDIR /app
EXPOSE 80
COPY --from=build /src/out .  
ENTRYPOINT ["dotnet", "BookStoreApi.dll"]  