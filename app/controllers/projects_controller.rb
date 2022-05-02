class ProjectsController < ApplicationController
  wrap_parameters format: []
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_record

  def index
    render json: Project.all
  end

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
    render json: project, status: :created
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
    params.permit(:name, :date, :user_id)
  end

  def render_not_found
    render json: { error: "Project not found"}, status: :not_found
  end

  def render_invalid_record invalid
    render json: { errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end
end
