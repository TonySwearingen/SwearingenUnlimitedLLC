class ProjectsController < ApplicationController
  wrap_parameters format: []

  def show
    projects = find_project
    render json: projects
    
  end

  def create
    projects = Project.create!(project_params)
    render json: projects, status: :created
  end

  def update
    project = find_project
    project.update!(project_params)
    render json: project
  end

  def destroy
    project = find_project
    project.destroy
    head :no_content
  end

  private

  def find_project
    Project.find(params[:id])
  end

  def project_params
    params.permit(:name, :date, :user_id, :id, :images)
  end

end
