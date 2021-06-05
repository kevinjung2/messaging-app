Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do

      resources :users, except: [:index, :edit, :new] do
        resources :conversations
        resources :messages
      end

    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
