import React from 'react';
import {catalogObjOrder, catalogObject} from '../util/catalog_structure.js'

export default function MoreDialog(props) {
  const {showMore,currentWW} = props;
  const [isShow, updateShow] = React.useState(false);

  const show = () => {
    updateShow(true);
  }

  const hide = () => {
    updateShow(false);
  }

  const moreRedirect = (c_id) => {
    window.location.href = '/hc/kb/catagory/' + c_id;
  }

  return (
    <div
    style={{marginTop:'8px'}}
    className={'cust_dialog_box' + ((isShow || showMore)? ' cust_dialog_box_expand' : '')}
    onMouseOver={()=>show()}
    onMouseLeave={()=>hide()}>
      <ul>
        {
          catalogObjOrder.map((c_id) => {
            if (catalogObject[c_id]['hiddenW'] > currentWW)
            {
              return <li key={'mk_' + c_id} onClick={()=>moreRedirect(c_id)}><span>{catalogObject[c_id]['title']}</span></li>
            }
          })
        }
      </ul>
    </div>
  )
}