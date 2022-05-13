Rails.application.routes.draw do

  resources :projects

  # post '/signup' to: 'users#create'
  get '/me', to: 'users#show'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

end
