const smartgrid = require('smart-grid');

const settings = {
  outputStyle: 'sass',
  columns: 12,
  offset: '30px',
  container: {
    maxWidth: '1170px', /* max-width оn very large screen */
    fields: '30px' /* side fields */
  },
  oldSiteStyle: false,
  properties: [],
  mixinNames: {
    column: 'col',
    container: 'wrapper',
    row: 'row',
    size: 'size',
    offset: 'offset'
  },
  breakPoints: {
    lg: {
      width: '1100px', /* -> @media (max-width: 1100px) */
    },
    md: {
      width: '960px'
    },
    sm: {
      width: '780px',
      fields: '15px' /* set fields only if you want to change container.fields */
    },
    xs: {
      width: '560px'
    },
    xss: {
      width: '400px'
    }
  }
}
  


smartgrid('./blocks/_base/smart', settings);