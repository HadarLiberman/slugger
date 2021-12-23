export function slugger(...args){
    return [...args].map(cur=>cur.trim()).join("-");  
}
