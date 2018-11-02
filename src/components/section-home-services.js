import React,{Component} from 'react'
import PropTypes from 'prop-types'
import css from '../less/section-home-services.module.less'

const Nav = ({
  services,
  activeServiceId,
  setActiveServiceId
}) => {
  const items = services.map(({
    id,
    title
  }) => {
    const itemClasses = [
      css.menuItem,
      id === activeServiceId ? css.activeMenuItem : null
    ].join(' ')

    const handleClick = () => setActiveServiceId(id)

    return (
      <li key={id} className={itemClasses} onClick={handleClick}>
        {title}
      </li>
    )
  })

  return (
    <div className={css.nav}>
      <ul className={css.menu}>
        {items}
      </ul>
    </div>
  )
}

const Info = ({
  services,
  activeServiceId
}) => {
  const items = services.map(({
    id,
    title,
    homeHeadline: headline
  }) => {
    const itemClasses = [
      css.service,
      id === activeServiceId ? css.activeService : css.inactiveService
    ].join(' ')

    return (
      <li key={id} className={itemClasses}>
        <div className={css.serviceContent}>
        <div className={css.serviceInfo}>
          <h3>{headline}</h3>
          <p className={css.serviceDescription}>Fusce commodo aliquam arcu. Etiam ut purus mattis mauris sodales aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. </p>
        </div>
        </div>
      </li>
    )
  })

  return (
    <div className={css.servicesWrap}>
      <ul className={css.services}>
        {items}
      </ul>
    </div>
  )
}

class ServicesSection extends Component {
  constructor(props) {
    super(props)
  
    const {
      services
    } = props

    this.state = {
      activeServiceId: services[0].id
    }
  }

  setActiveServiceId = id => {
    this.setState({
      activeServiceId: id
    })
  }

  render() {
    const {
      services
    } = this.props

    return (
      <section id='services'>
        <Nav 
          services={services} 
          setActiveServiceId={this.setActiveServiceId}
          activeServiceId={this.state.activeServiceId}
        />
        <Info 
          services={services} 
          setActiveServiceId={this.setActiveServiceId}
          activeServiceId={this.state.activeServiceId}
        />
      </section>
    )
  }
}

export default ServicesSection

export const homeServicesFragment = graphql`
  fragment homeServices on ContentfulLayoutHomePage {
    services {
      id
      slug
      title
      homeHeadline
      homeCopy {
        childMarkdownRemark {
          html
        }
      }
      seo {
        description {
          description
        }
      }
    }
  }
`