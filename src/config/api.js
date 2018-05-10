// 用户中心
const login = '/api/person-login'
const login_out = '/api/person-ClearUserInfo'
const user_free= '/api/person - RecordsConsumption'
const check_login = '/api/person-checkLoginState'
const check_nike ='/api/person-checkNickName/'
const check_phone = '/api/person-checkNickPhone/'
const find_pwd = '/api/person-pwdRetrieval'
const refresh_user ='/api/person-refreshUserinfo'
const get_user_info ='/api/person-info'
const register_user ='/api/person-regInfo'
const remember_login ='/api/person-remembermeLogin'
const update_user_info ='/api/person-updateInfo'
const update_pwd ='/api/person-updatepwd'
const get_fans_follow_count ='/api/fans-followCount/'
const get_code ='/api/verification/getCode'
const check_code ='/api/verification/person-checkedCode'
const register_code ='/api/verification/sys-getShortMessage'
//图书获取
const recommend_book ='/api/book-xiaobiantuijian'
const new_book ='/api/hot/getbooklistList/'
const book_rank ='/api/ranking-book'
const similar_recommend ='/api/book-similarrecommendation'
const is_subscribe ='/api/userRmemberChose'
//用户消息
const del_message ='/api/person-delmessage'
const get_message ='/api/person-message'
const get_message_count ='/api/person-messageCount'
const send_message ='/api/person-sendmessage'
const update_message_status ='/api/person-updatemessage'
//用户评论
const get_comment_info ='/api/comm-getcomminfo'
const reply_comment ='/api/comm-replyInfo'
const give_thumbs ='/api/comm-GiveThumbs'
const hot_comment ='/api/comm-HotCommentInfo'
//书籍控制器
const get_volume ='/api/books-getvolume'
const get_volumeid_chapter ='/api/books-getVolumeById'
const add_book_rack ='/api/bookshelf-adduserbookshelf'
const check_book_rack ='/api/bookshelf-bookshelfIsSave/'
const del_book_rack ='/api/bookshelf-deluserbookshelf'
const get_book_rack_recommend ='/api/bookshelf-recommendPosition'
const chapter_subscribe ='/api/book-subscription'
//分类控制
const book_class ='/api/ranking-classification'
const best_seller ='/api/stacks-changxiaobang'
const hot_lable =' /api/stacks-hotLable'
const search_book ='/api/stacks-search'
const filter_book ='/api/stacks-bookFiltering'
const get_book_list ='/api/system/getBooklist'
module.exports = {
    login,
    get_user_info,
    login_out,
    user_free,
    check_login,
    check_nike,
    check_phone,
    find_pwd,
    refresh_user,
    register_user,
    remember_login,
    update_user_info,
    update_pwd,
    get_fans_follow_count,
    get_code,
    check_code,
    register_code,
    recommend_book,
    new_book,
    book_rank,
    similar_recommend,
    is_subscribe,
    del_message,
    get_message,
    get_message_count,
    update_message_status,
    get_comment_info,
    reply_comment,
    give_thumbs,
    hot_comment,
    get_volume,
    get_volumeid_chapter,
    add_book_rack,
    check_book_rack,
    del_book_rack,
    get_book_rack_recommend,
    chapter_subscribe,
    book_class,
    best_seller,
    hot_lable,
    search_book,
    filter_book,
    get_book_list
}