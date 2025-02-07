import product from "@/sanity/schemaTypes/product";

export interface  Product {
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
    slug : {
        _type : "slug"
        current : "string";
    };
    stockLevel : number
    


    
}console.log("Product Data:", product);
