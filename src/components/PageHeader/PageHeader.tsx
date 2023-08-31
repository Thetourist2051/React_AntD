import React from 'react'
import BrandLogo from '../../assests/icons/BrandLogo'
import classes from './PageHeader.module.scss'

const PageHeader = () => {
  return (
    <>
     <div className={classes["page-header"]}>
          <div className="container px-lg-3 px-md-2 px-sm-0">
            <div className="row mx-0 justify-content-between">
              <div className={classes["logo-section"]}>
                <BrandLogo size="lg" />
              </div>
            </div>
          </div>
        </div>
      
    </>
  )
}

export default PageHeader
