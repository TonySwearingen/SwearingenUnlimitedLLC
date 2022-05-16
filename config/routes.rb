Rails.application.routes.draw do

  resources :projects
  resources :users, only: :show

  # post '/signup' to: 'users#create'
  get '/me', to: 'users#me'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

end
