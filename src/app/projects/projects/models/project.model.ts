export interface ProjectModel {
  clone_url: string;
  created_at: string;
  default_branch: string;
  description: string;
  full_name: string;
  git_url: string;
  html_url: string;
  id: number;
  language: string;
  name: string;
  owner: OwnerModel;
  pushed_at: string;
  size: number;
  updated_at: string;
  url: string;
}

export interface OwnerModel {
  avatar_url: string;
  login: string;
}
