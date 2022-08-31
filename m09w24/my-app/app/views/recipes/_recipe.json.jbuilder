json.extract! recipe, :id, :title, :instructions, :created_at, :updated_at
json.url recipe_url(recipe, format: :json)
