import React from 'react'
import htmlContent from '../room1/index.html';
const html = () => {
  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  )
}
export default html;
