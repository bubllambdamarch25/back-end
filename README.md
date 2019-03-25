# Buble Back End
## Installing and running the server
 - Fork and clone the repository
 - Run the `yarn install` command
 - Add a `.env` file the the root with a `PORT` & `JWT_SECRET` variable
 - Run `yarn server` and make sure you see the server is running on the port you set in the `.env` 


## API live at https://bublmarch25.herokuapp.com/

## Endpoints
### /auth
|URI|TYPE|SEND|RECIEVE|
|---|----|----|-------|
|/auth/login|POST|`username` `password`|token|
|/auth/register|POST|`name` `username` `password` `school_id`|Success message|

### /api/users
|URI|TYPE|SEND|RECIEVE|
|---|----|----|-------|
|/api/users/me|GET|`token`|user profile data|

### /api/posts
|URI|TYPE|SEND|RECIEVE|
|---|----|----|-------|
|/api/posts|GET|`token`|list of users posts|
|/api/posts/filter/:id|GET|`token`|list of posts filtered by school and bubble|
|/api/posts/:id|DELETE|`token`|204 no content|
|/api/posts/:id|PUT|`token` `user_id` `post_content` `bubbles`|The updated post|
|/api/posts|POST|`token` `user_id` `post_content` `bubbles`|The new post|

### /api/schools
|URI|TYPE|SEND|RECIEVE|
|---|----|----|-------|
|/api/schools|GET|`null`|List of schools|

### /api/bubbles
|URI|TYPE|SEND|RECIEVE|
|---|----|----|-------|
|/api/bubbles|GET|`token`|List of bubbles for users school|
|/api/bubbles/join/:id|POST|`token`|Success message|
|/api/bubbles/leave/:id|DELETE|`token`|Success message|

### /api/comments
|URI|TYPE|SEND|RECIEVE|
|---|----|----|-------|
|/api/posts|POST|`token` `comment` `post_id`|New comment|
|/api/posts|DELETE|`token`|204 no content|
