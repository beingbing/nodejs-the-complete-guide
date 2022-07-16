# framework
Its a collection of helper function, tools and rules that help you build your application.

# middleware

request  ---->  middleware  --next()-->  middleware  --res.send()-->  response

they are added after we create 'app' object and before defining server using 'app' object.

.use() allows us to add new middleware functions

next() allows request to travel to next middleware in line