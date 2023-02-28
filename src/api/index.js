import service from "../util/request";

/**
 * @module: src\api\index.js
 * @desc: 获取任务列表数据
 * @param: undefined
 * @return:
 */
export function getTasksData() {
    return service({
        method: "POST",
        url: "/getTasksData",
    })
}
/**
* @module: src\api\index.js
* @desc: 获取地图数据
* @param: undefined
* @return:
*/
export function getMapData() {
    return service({
        method: "POST",
        url: "/getMapData",
    })
}