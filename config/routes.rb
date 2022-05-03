Rails.application.routes.draw do

  post '/login', to: 'sesssions#create'
  post '/logout', to: 'sesssions#destroy'
  get '/me', to: 'users#me'

  resources :guests, only: [:index]
  resources :projects
  resources :users, only: [:index, :show]
end
