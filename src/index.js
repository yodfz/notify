export default function () {
    let $eventList = {}
    return {
        /**
         * 订阅事件
         * @param $name 需要订阅的通知名
         * @param $fn 需要执行的通知方法
         */
        subscribe($name, $fn) {
            if (!$eventList.hasOwnProperty($name)) {
                $eventList[$name] = []
            }
            let $fnName = (Math.random() + '').substr(2)
            $eventList[$name].push({key: $fnName, fn: $fn})
            return $fnName
        },
        /**
         * 通知
         * @param $name
         */
        notify($name, $data) {
            let notifyItem = $eventList[$name]
            if (notifyItem) {
                notifyItem.forEach(item => {
                    try {
                        item.fn($data ? $data : null)
                    } catch (err) {
                        console.error(err)
                    }
                })
            }
        },
        /**
         * 移除
         */
        removeById($id) {
            Object.keys($eventList).forEach(key => {
                let $index = -1
                $eventList[key].forEach((fn, index) => {
                    if (fn.key === $id) {
                        $index = index
                    }
                })
                if ($index !== -1) {
                    $eventList[key].splice($index, 1)
                }
            })
        },
        /**
         * 移除
         */
        removeByName($name) {
            delete $eventList[$name]
        }
    }
}