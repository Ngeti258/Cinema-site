import React from 'react'

const ListGroup = props => {
    const {textProperty,
        valueProperty,
        items,
        onItemSelected,
        selectedItem
    } = props;
    return (
        <div>
            <ul className="list-group">
                {items.map(item=>
                <li onClick={()=>onItemSelected(item)} 
                key={item[valueProperty]} 
                className={item===selectedItem?
                    "list-group-item active":
                     "list-group-item"}
                >
                {item[textProperty]}
                </li>
)}
            </ul>
        </div>
      );
};
ListGroup.defaultProps ={
    textProperty:'name',
    valueProperty:'_id'
}
 
export default ListGroup;