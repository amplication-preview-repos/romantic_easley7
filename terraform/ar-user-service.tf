resource "google_artifact_registry_repository" "ar_user_service" {
  location      = "europe-west1"
  repository_id = "user-service"
  project       = module.host_project_artifacts.project_id
  description   = "Container image repository for user-service"
  format        = "DOCKER"

  docker_config {
    immutable_tags = true
  }
}
