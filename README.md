Download the code and configure authentication
The code for this sample is maintained on GitHub. To build the sample as you go, you can download the skeleton project as a .zip file. You can also clone the skeleton:

Copy
git clone --branch skeleton https://github.com/AzureADQuickStarts/B2C-WebApp-OpenIdConnect-DotNet.git
The completed sample is also available as a .zip file or on the complete branch of the same repository.

After you download the sample code, open the Visual Studio .sln file to get started.

Your app communicates with Azure AD B2C by sending HTTP authentication requests that specify the policy it wants to execute as part of the request. For .NET web applications, you can use Microsoft's OWIN library to send OpenID Connect authentication requests, execute policies, manage user sessions, and more.

To begin, add the OWIN middleware NuGet packages to the project by using the Visual Studio Package Manager Console.
