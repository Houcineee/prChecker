const createGitHubHeaders = (githubToken) => ({
  Accept: "application/vnd.github+json",
  Authorization: `Bearer ${githubToken}`,
  "X-GitHub-Api-Version": "2022-11-28",
  "Content-Type": "application/json"
})

const fetchPullRequestDiff = async (diffUrl) => {
  const diffResponse = await fetch(diffUrl)
  if (!diffResponse.ok) {
    const errorBody = await diffResponse.text()
    throw new Error(`Failed to fetch diff: ${diffResponse.status} - ${errorBody}`)
  }
  return diffResponse.text()
}

const postPullRequestComment = async ({ commentsUrl, messageBody, githubToken }) => {
  const commentResponse = await fetch(commentsUrl, {
    method: "POST",
    headers: createGitHubHeaders(githubToken),
    body: JSON.stringify({ body: messageBody })
  })

  if (!commentResponse.ok) {
    const errorBody = await commentResponse.text()
    throw new Error(`GitHub API Error: ${commentResponse.status} - ${errorBody}`)
  }
}

module.exports = {
  fetchPullRequestDiff,
  postPullRequestComment
}
