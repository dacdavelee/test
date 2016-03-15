<<<<<<< HEAD
mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmClean up...................... 
=======
The completed sample is also available as a .zip file or on the complete branch of the same repository.

After you download the sample code, open the Visual Studio .sln file to get started.

Your app communicates with Azure AD B2C by sending HTTP authentication requests that specify the policy it wants to execute as part of the request. For .NET web applications, you can use Microsoft's OWIN library to send OpenID Connect authentication requests, execute policies, manage user sessions, and more.

To begin, add the OWIN middleware NuGet packages to the project by using the Visual Studio Package Manager Console.

Copy
PM> Install-Package Microsoft.Owin.Security.OpenIdConnect
PM> Install-Package Microsoft.Owin.Security.Cookies
PM> Install-Package Microsoft.Owin.Host.SystemWeb
Next, open the web.config file in the root of the project and enter your app's configuration values in the <appSettings> section.

Copy
<configuration>
  <appSettings>
    <add key="webpages:Version" value="3.0.0.0" />
    <add key="webpages:Enabled" value="false" />
    <add key="ClientValidationEnabled" value="true" />
    <add key="UnobtrusiveJavaScriptEnabled" value="true" />
    <add key="ida:Tenant" value="[Enter the name of your B2C directory, e.g. contoso.onmicrosoft.com]" />
    <add key="ida:ClientId" value="[Enter the Application Id assigned to your app by the Azure portal, e.g.580e250c-8f26-49d0-bee8-1c078add1609]" />
    <add key="ida:AadInstance" value="https://login.microsoftonline.com/{0}{1}{2}" />
    <add key="ida:RedirectUri" value="https://localhost:44316/" />
    <add key="ida:SignUpPolicyId" value="[Enter your sign up policy name, e.g. b2c_1_sign_up]" />
    <add key="ida:SignInPolicyId" value="[Enter your sign in policy name, e.g. b2c_1_sign_in]" />
    <add key="ida:UserProfilePolicyId" value="[Enter your edit profile policy name, e.g. b2c_1_profile_edit]" />
  </appSettings>
>>>>>>> afb96ec032ed36a9293ea4337529d1a935446ea8
