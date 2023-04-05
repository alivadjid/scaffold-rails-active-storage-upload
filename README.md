# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

- Ruby version

- System dependencies

- Configuration

- Database creation

- Database initialization

- How to run the test suite

- Services (job queues, cache servers, search engines, etc.)

- Deployment instructions

- ...

```
rails active_storage:install
rails g scaffold post titile
rails db:migrate
rails s
```

post_controller

```
def latest
  @post = Post.last
  render json:@post
end
```
