import { octokit } from './client';

export const createIssue = async (payload: any) => {
  try {
    const response = await octokit.rest.issues.create({
      owner: payload.owner,
      repo: payload.repo,
      title: payload.title,
      body: payload.body,
    });
    return response.data;
  } catch (error) {
    console.error('Failed to sync to GitHub:', error);
    throw new Error('GF-108: GitHub sync rejection');
  }
};