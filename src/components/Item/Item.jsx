import React from 'react';

const Item = ({ item }) => {

    const styles = {
        maxWidth: "380px",
        margin: "5px 15px"
    }


    
    return (
        <div style={styles} key={item.id}>
            
            <h3 className='text-3x1 text-gray-900 mt-2 font-medium title-font'>
                    {item.name}
            </h3>
            
            <img src={item.img} alt={item.name} width="200" />
            
            <p>$ {item.description}</p>
            <hr />
            <br />
               
            </div>
       
    );
};

export default Item;