NewReader::Application.routes.draw do
  resources :feeds, only: [:index, :create]

  resources :entries, only: [:index]

  root to: "feeds#index"
end
