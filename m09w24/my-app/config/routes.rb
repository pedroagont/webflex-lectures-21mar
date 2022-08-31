Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  
  resources :authors

  resources :authors, only: [:show, :index]
  resources :authors, except: [:edit, :update, :show]

  resources :books

  # singular resources
  get 'profile', to: 'users#show'

  get 'profile', action: :show, controller: 'users'
end
