class AuthorsController < ApplicationController
  def index
    @authors = Author.all
    
    # To send json instead of default template
    render json: @authors
  end
end
