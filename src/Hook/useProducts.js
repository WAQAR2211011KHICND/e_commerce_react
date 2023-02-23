import { useEffect, useMemo} from 'react';


export const useProducts = (products) => {

    useEffect(() => {

        async function loadData() {
            const url = `http://localhost:8080/product/all`;
            const response = await fetch(url);
            if(response.status !== 200){
                products.setValue([]);
                return;
            }
            const data = await response.json();
            products.setValue(data);
        }
        if( ! products.value ){
            loadData();
        }
    
    }, [products]);

    return useMemo(() => {
        return products.value;
    }, [ products.value ]);
};