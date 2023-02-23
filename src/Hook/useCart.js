import { useEffect} from 'react';


export const useCart = (carts) => {

    useEffect(() => {

        async function loadData() {
            const url = `http://localhost:8081/shopping_cart/all`;
            const response = await fetch(url);
            if(response.status !== 200){
                carts.setValue([]);
                return;
            }
            const data = await response.json();
            carts.setValue(data);
        }
        if( ! carts.value ){
            loadData();
        }
    
    }, [carts]);

    
    return carts.value;
    
};