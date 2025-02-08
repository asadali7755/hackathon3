import product from "@/sanity/schemaTypes/product";

export interface  Product {
    [x: string]: any;
    _id :string;
    name : string;
    _type : "product";
    image? : {
        asset : {
            ref : string;
            _type: "image";

        }
   
    };
    price : number;
    description? : string;
    stockLevel : number
    


    
}console.log("Product Data:", product);
