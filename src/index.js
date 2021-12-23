export function slugger(...args){
    return [...args].filter(cur=>cur!==' ').join('-');
}
