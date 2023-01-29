# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) The BlogPostsController class is inheriting from the ApplicationController class
class BlogPostsController < ApplicationController
  def index
    # ---2) We are setting @post as an instance variable that will display all BlogPosts available in the databse
    @posts = BlogPost.all
  end

  # ---3) We are creating a controller action that will show a single BlogPost based on its primary key id number in the database
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) We are creating a controller method that will allow us to display a form that will let a user or program fill in information about a new blog post to be added to the databse
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) We are creating an instance variable called @post which creates a new blog post based on the information inputted during the "new" method. The "blog_post_params" ensures the data inputted is limited to certain items that a user can have access to 
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) We are creating an instance variable called @post which finds a specific blog post based on its primary key id so it can be presented in preparation to be updated
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) This line will update the blog post found and displayed in the edit controller and in the line above to update those data in the particular post. It still restrict what the user is allowed to update based on "blog_post_params"
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) This tells the view to display the blog_posts_path as soon as a user deletes a particular blog post
      redirect_to blog_posts_path
    end
  end

  # ---9) This tells us any methods below this line are private helper methods and are not public-facing and are not designed to be interacted with by the user. These are also called "strong parameters"
  private
  def blog_post_params
    # ---10) This does two things: ".require" requires parameter arguments be inputted to be a valid record and ".permit" only allows the specified symbols/keys to be modified or updated in the selected model. This helps validate and secure data being accessed in the database.
    params.require(:blog_post).permit(:title, :content)
  end
end
