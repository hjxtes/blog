import React from "react";
import mitt from 'mitt'

// 创建一个上下文对象 用于组件间的通讯
export const BusContext = React.createContext(null)

// 用于接收上下文状态
export default function useBus() {
    return React.useContext(BusContext)
}

// 组件加载完后，监听到参数2数组中的属性变化后继续调用useEffect中的函数
export function useListener(name, fn) {
    const bus = useBus()
    React.useEffect(() => {
        bus.on(name, fn)
        return () => {
            bus.off(name, fn)
        }
    }, [bus, name, fn])
}

export function Provider({children}) {
    const [bus] = React.useState(() => mitt())
    return (
        <BusContext.Provider value={bus}>{children}</BusContext.Provider>
    )
}