import React, {Component,Fragment} from 'react'
import css from '../less/hero-home.module.less'
import Comet from './comet'

class HomeHero extends Component {
  render() {
    return (
      <section id='hero' className={css.hero}>
        <div className={css.content}>
          <div className={css.text}>
            <h1 className={css.headline}>
              <span className={css.headlineStop}>Stop imagining.</span>
              <span className={css.headlineStart}>Start doing.</span>
              You are a <span className={css.headlineFirestarter}>Firestarter.</span>
            </h1>
            <Comet className={css.comet1}/>
            <Comet className={css.comet2}/>
            <Comet className={css.comet3}/>
            <Comet className={css.comet4}/>
          </div>
        </div>
      </section>
    )
  }
}

export default HomeHero