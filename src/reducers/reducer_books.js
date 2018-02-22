export default function BooksReducer(state=[], action){
var data = action.payload;
  switch(action.type){
    case "add_comment":
        return data.map( (item, index) => {
        if(index !== action.comment.id) {
            return item;
        }
        return [
            ...item,
            ...action.item
        ];    
    });
    case "fetch_books":
      return data;
    case "show_book":
      return data;
    default:
      return state;
  }  
}