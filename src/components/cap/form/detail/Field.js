import React from 'react';
import { Workstate } from '../../../../state/workstate';

const fieldStyle = {
    padding: '5px',
 };

export default function (props) {
    console.log('Field.render(): props.workstate = ' + props.workstate);

    let result = null;

    switch (props.workstate) {
      case Workstate.EDIT:
          result = <input type="text" value={props.children} />
          break;
      case Workstate.ADD:
      case Workstate.SEARCH:
        result = <input type="text" value="" />
        break;
      default:  // Workstate.VIEW_DETAILS
        result = props.children;
    }
    
    const finalResult = 
      <div className="jepRia-FontStyle" style={fieldStyle}>
        <table cellSpacing="0" cellPadding="0"  height="100%" width="100%">
          <tbody>
            <tr>
              <td className="jepRia-MultiStateField-Label" height="20px" width="150px">
                  {props.label}
              </td>
              <td height="20px" width="10px">:</td>
              <td className="jepRia-MultiStateField-ViewCard" height="20px">
                {result}
              </td>
            </tr>
          </tbody>
        </table>
      </div>;

    return finalResult;
}