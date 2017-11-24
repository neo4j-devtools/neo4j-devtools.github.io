## Neo4j Desktop Developers

Neo4j Desktop is a part of the Neo4j Graph Platform, designed to make it
easy to develop and deliver GraphApps. Desktop takes care of managing local
and remote Neo4j Graph Databases. You can focus on making awesome applications.

This is the basic idea of Neo4j Desktop...

![GitHub Logo](/assets/images/desktop_block_diagram.png)

- Projects are a context and container for related graph stuff
- GraphApps are [single-page applications](https://en.wikipedia.org/wiki/Single-page_application)
  - installed Desktop-wide, but available selectively within a Project
- Content is anything file-like which can be shared among people or apps
  - content isn't just persisted data, it's a point of collaboration
- Graphs are Neo4j Databases with a common heritage or domain

## Getting Started

Interested in building a GraphApp that can be deployed to Neo4j Desktop? Fantastic. :)

We've provided some code repositories which explain the details and provide
example applications.

- [GraphApp Starter](https://github.com/neo4j-apps/graph-app-starter) &mdash;
  basic documentation and examples
- [GraphApp Kit](https://github.com/neo4j-apps/graph-app-kit) &mdash;
  a collection of React components
- [Neo4j Desktop Issues](https://github.com/neo4j-apps/neo4j-desktop) &mdash;
  a public repository for reporting issues with Neo4j Desktop


## FAQ

### Why build a GraphApp instead of a standalone application or webapp?

Do both. :wink:

A GraphApp is just a single-page application which takes advantage of some
services provided by Neo4j Desktop &mdash; primarily the management of Neo4j Databases. That makes it super convenient to try out ideas.

You could take an existing app and wrap it into a GraphApp, or take a GraphApp and promote it to a standalone application.

### Hey, why are these repositories private?

This FAQ, these repositories, and the whole Neo4j-Desktop-as-an-application-platform is fresh, raw and evolving quickly.  While the project is more volatile we want to disrupt fewer
people. So, we'd like to work closely with a small group of people until everything settles down.

### Any other questions?

Please ask [ABK](mailto:andreas@neo4j.com).
 
