# nodejs: JS on the server

--> browser sends request
--> goes to server which has the IP associated with that domain
--> server does necessary operations associated with that incoming request
--> returns a response to browser (often html/json or css/js files for the browser to run or work on it, not necessarily always)
--> servers does operations like -
    - connecting and communicating with a DB
    - user authentication
    - input validation
    - our business logic

# nodejs: used as a runtime for Utility Scripts and Build Tools

# Note:
node.js not only is used to write the code running on the server but is used to write the server itself. Unlike many other
back-end languages like php which uses apache/nginx servers which listen to incoming requests and then execute our php code.

But node.js does both, it spins up a server also for us and also listens to request to run associated business logic and
return a response as well.
