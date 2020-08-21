import React from "react"
import { graphql } from "gatsby"

import Repository from "../components/repository"
import Layout from "../components/layout"
import Avatar from "../components/avatar"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const {
    name,
    avatarUrl,
    repositories,
  } = data.githubData.data.repositoryOwner

  return (
    <Layout>
      <SEO />
      <div style={{ maxWidth: `960px`, marginBottom: `1.45rem` }}>
        <div
          style={{
            display: `flex`,
            alignItems: `center`,
            margin: `1.45rem 0`,
          }}
        >
          <Avatar img={avatarUrl} />
        </div>
        {repositories.nodes
          .map(repo => <Repository key={repo.name} repo={repo} />)
          .reverse()}
      </div>
    </Layout>
  )
}

export default IndexPage

export const gitHubQuery = graphql`
  {
    githubData {
      data {
        repositoryOwner {
          avatarUrl,
          repositories {
            nodes {
              name
              description
              homepageUrl
              resourcePath
              forkCount
              createdAt
              updatedAt
              languages {
                edges {
                  node {
                    name
                    color
                  }
                }
              }
              licenseInfo {
                name
              }
              stargazers {
                totalCount
              }
            }
          }
        }
      }
    }
  }
`
