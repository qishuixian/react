# runoobReact文件
学习菜鸟教程react教程相关代码

#React State(状态) and Props
>getInitialState 方法用于定义初始状态，也就是一个对象，这个对象可以通过 this.state 属性读取
>Props 验证
Props 验证使用 propTypes，它可以保证我们的应用组件被正确使用，React.PropTypes 提供很多验证器 (validator) 来验证传入数据是否有效。当向 props 传入无效数据时，JavaScript 控制台会抛出警告。
>state来更新和修改数据。 而子组件只能通过 props 来传递数据

#React 组件 API

>设置状态：setState
>替换状态：replaceState
>设置属性:setProps
>替换属性:replaceProps
>强制更新：forceUpdate
>获取DOM节点：findDOMNode
>判断组件挂载状态：isMounted

#React AJAX
>React 组件的数据可以通过 componentDidMount 方法中的 Ajax 来获取，当从服务端获取数据库可以将数据存储在 state 中，再用 this.setState 方法重新渲染 UI。