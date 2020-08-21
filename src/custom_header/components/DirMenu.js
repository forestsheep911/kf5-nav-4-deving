import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {styles} from '../css/style.js';
import {Hidden, Link} from '@material-ui/core';
import {catalogObjOrder, catalogObject} from '../util/catalog_structure.js'
import {throttle} from '../../util/util.js'
import MoreDialog from './MoreDialog.js';

function DirMenu(props) {
  const {classes} = props;
  const [windowWidth, updateWW] = React.useState(window.innerWidth ? window.innerWidth : document.body.clientWidth);
  const [showMore, updateShow] = React.useState(false);

  React.useEffect(()=>{

    let windowResize = throttle(resizeWidth, 100);
    window.addEventListener('resize', windowResize);
  },[])

  const resizeWidth = () => { 
    let currentWWidth = window.innerWidth ? window.innerWidth : document.body.clientWidth;
    updateWW(currentWWidth);
  }

  const showMoreDialog = () => {
    updateShow(true)
  }

  const hideMoreDialog = () => {
    updateShow(false)
  }

  return (
    <div style={{marginLeft:'20px', flexGrow: '1',display: 'flex'}}>
      <Hidden xsDown implementation="css">
        {
          catalogObjOrder.map((c_id) => {
            if (catalogObject[c_id]['hiddenW'] > windowWidth) {
            } else {
              return (
                <div 
                  key={c_id}
                  className={classes.titleMenu + (catalogObject[c_id]['selected'] ? ' ' + classes.titleMenuActived : '') + (catalogObject[c_id]['canHidden'] ? ' cust_dir_menu' : '')}>
                  <Link
                    href={'/hc/kb/category/' + c_id}
                    underline='none'
                    className={classes.aLink}
                    selected={false}>
                    {catalogObject[c_id]['title']}
                  </Link>
                </div>
              )
            }
          })
        }
        <div 
          className={classes.titleMenu} 
          onMouseOver={()=>showMoreDialog()} 
          onMouseLeave={()=>hideMoreDialog()}
          style={{display: (windowWidth < catalogObject[catalogObjOrder[catalogObjOrder.length-1]]['hiddenW']) ? 'inline-block' : 'none'}}
          >
            <Link 
              href={'#'}
              underline='none'
              className={classes.aLink}
              selected={false}>
                更多
            </Link>
            <div className={'cust_arrow_down' + (showMore ? ' cust_arrow_up' : '')} />
            <MoreDialog showMore={showMore} currentWW={windowWidth}/>
        </div>
      </Hidden>
    </div>
  )
}

export default withStyles(styles, {withTheme: true})(DirMenu);