class ProjectSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :name, :date, :images

  def images
    rails_blob_path(object.images, only_path: true) if object.images.attached?
  #  url_for(object.image, only_path: true) if object.image.attached?

  end
end
