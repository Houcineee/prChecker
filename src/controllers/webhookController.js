const {
  fetchPullRequestDiff,
  postPullRequestComment
} = require("../services/githubService")

const {
  reviewCode} = require("../services/aiService.js")

const handlePullRequestWebhook = async (req, res) => {
  try {
    const pullRequest = req.body.pull_request

    const pullRequestDiff = await fetchPullRequestDiff(pullRequest.diff_url)

    const comment =  await reviewCode(pullRequestDiff)

    await postPullRequestComment({
      commentsUrl: pullRequest.comments_url,
      messageBody: comment,
      githubToken: process.env.GITHUB_PAT
    })

    console.log("Comment successfully posted!....")
    return res.status(200).send(req.body)
  } catch (error) {
    console.error("Webhook processing failed:", error)
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  handlePullRequestWebhook
}
