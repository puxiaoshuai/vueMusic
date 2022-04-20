/**
 * https://wy-musciapi.vercel.app/personalized 推荐歌单
 * https://wy-musciapi.vercel.app/playlist/detail?id=24381616 歌单详情
 * https://wy-musciapi.vercel.app/personalized/newsong 推荐音乐列表
 * https://wy-musciapi.vercel.app/lyric?id=1938028979 获取歌词
 * https://wy-musciapi.vercel.app/song/url?id=1938028979  MP3url
 * https://wy-musciapi.vercel.app/song/detail?ids=1938028979 获取歌曲详情
 */
export const getLrc = '/lyric?id=33894312'
export const getBanners = '/banner?type=2'
export const getRecommends = '/personalized?limit='
// https://wy-musciapi.vercel.app/playlist/detail?id=4878926215 歌单详情
export const getRecommendedDetail = '/playlist/detail?id='
// https://wy-musciapi.vercel.app/song/detail?ids=1841408508 //歌单下的歌曲详情，参数 1,2,3，歌曲id从 歌单的trankid拿
export const getSongListOfRecommendations = '/song/detail?ids='
export const getMp3Url = '/song/url?id='
