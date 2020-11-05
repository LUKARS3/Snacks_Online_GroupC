declare module "@salesforce/apex/NewController.getContacts" {
  export default function getContacts(param: {accId: any}): Promise<any>;
}
declare module "@salesforce/apex/NewController.getOpps" {
  export default function getOpps(param: {accId: any}): Promise<any>;
}
declare module "@salesforce/apex/NewController.getContactsForDynamicFilter" {
  export default function getContactsForDynamicFilter(): Promise<any>;
}
declare module "@salesforce/apex/NewController.getContactByName" {
  export default function getContactByName(param: {conName: any, pageSize: any, pageNo: any}): Promise<any>;
}
declare module "@salesforce/apex/NewController.getTotalProducts" {
  export default function getTotalProducts(): Promise<any>;
}
declare module "@salesforce/apex/NewController.getTotalContacts" {
  export default function getTotalContacts(): Promise<any>;
}
declare module "@salesforce/apex/NewController.getProducts" {
  export default function getProducts(param: {prodName: any, catName: any, brand: any, makers: any, maxRange: any, isSort: any, pageSize: any, pageNo: any}): Promise<any>;
}
declare module "@salesforce/apex/NewController.getGlobalSearch" {
  export default function getGlobalSearch(param: {searchItem: any}): Promise<any>;
}
declare module "@salesforce/apex/NewController.getDropDownBrands" {
  export default function getDropDownBrands(): Promise<any>;
}
declare module "@salesforce/apex/NewController.getDropDownProducts" {
  export default function getDropDownProducts(param: {brand: any}): Promise<any>;
}
declare module "@salesforce/apex/NewController.getProductImage" {
  export default function getProductImage(param: {prodName: any}): Promise<any>;
}
