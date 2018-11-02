import {graphql} from 'gatsby'
import React, { Fragment } from 'react'
import { withLayout } from '../components/layout'
import Hero from '../components/hero'
import RichText from '../components/rich-text'

class Page extends React.Component {
  
  render() {
    const {
      page
    } = this.props.data

    const {
      title,
      layout,
      featuredImage
    } = page

    const content = layout[0].markdown.childMarkdownRemark.html

    return (
      <Fragment>
        <Hero title={title} background={featuredImage} />
        <section id='contentSection'>
          <div className='smallWrap'>
            <RichText html={content}/>
          </div>
        </section>
      </Fragment>
    )
  }
}

export default withLayout(Page)

// export const pageQuery = graphql`
//   query PageBySlug($slug: String!) {
//     page: contentfulPage(slug: { eq: $slug }) {
//       ...PageFields
//       layout {
//         markdown {
//           childMarkdownRemark {
//             html
//           }
//         }
//       }
//     }
//   }
// `

export const PageFields = graphql`
  fragment PageFields on ContentfulPage {
    title,
    slug,
    ...pageHeroImage
    seo {
      title
      description {
        description
      }
      keywords
    }
  }
`

export const pageHeroImageFragment = graphql`
  fragment pageHeroImage on ContentfulPage {
    featuredImage {
      title
      sizes(maxWidth: 1920) {
        ...GatsbyContentfulSizes
      }
    }
  }
`

export const seoFragment = graphql`
  fragment seoFields on ContentfulSeo {
    title
    description {
      description
    }
    keywords
  }
`