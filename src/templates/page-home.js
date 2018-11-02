import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'
import css from '../less/home.module.less'
import ServicesSection from '../components/section-home-services'
import RichText from '../components/rich-text'
import Wrap from '../components/wrap'
import Hero from '../components/hero-home'

const IntroSection = ({intro}) => {
  return (
    <section id='intro' className={css.introSection}>
      <Wrap width='small'>
        <RichText 
          html={intro.markdown.childMarkdownRemark.html}
        />
      </Wrap>
    </section>
  )
}

const IndexPage = ({data}) => {
  const {
    page
  } = data

  const {
    title,
    featuredImage,
    layout
  } = page

  const {
    intro,
    services
  } = layout[0]

  const seo = {
    ...page.seo,
    description: page.seo.description.description
  }
  
  return (
    <Layout seo={seo}>
      <Hero background={featuredImage}/>
      <IntroSection intro={intro}/>
      <ServicesSection services={services}/>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  {
    page: contentfulPage(slug: {eq: "home"}) {
      title
      seo {
        ...seoFields
      }
      ...pageHeroImage
      layout {
        name
        intro {
          markdown {
            childMarkdownRemark {
              html
              excerpt
            }
          }
        }
        ...homeServices
      }
    }
  }
`