import {fetch} from './ajax'
import { 
    recommend_book,

} from './api'
export  function getRecommendBookList() {
     return fetch(recommend_book,'post')
}
// export function 
