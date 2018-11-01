export const formatNumeric = (s) =>{
  //input eg: 250000=>250,000  1234.5678=>1,234.5678
  if (s){
    const parts = s.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  }
  
  return s;
}