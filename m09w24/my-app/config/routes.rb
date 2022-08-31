Rails.application.routes.draw do
  resources :recipes
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  
  resources :authors do
    resources :books
  end

  # Using namespaces /admin/articles
  # rails g controller admin/articles
  namespace :admin do
    resources :articles, :comments
  end

  # Shallow nesting
  resources :articles do
    resources :comments, only: [:index, :new, :create]
  end
  resources :comments, only: [:show, :edit, :update, :destroy]

  # Using the :shallow option
  resources :articles do
    resources :comments, shallow: true
  end
end
