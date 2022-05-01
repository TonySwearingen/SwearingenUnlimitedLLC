class AddManagerToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :manager, :boolean
  end
end
