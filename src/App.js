import Buttoncomponent from "./components/functional-components/button/button-component"
import Orderedlist from "./components/functional-components/list/order-list/ordered-list"
import Unorderedlist from "./components/functional-components/list/unorder-list/unordered-list"
import ImageComponent from "./components/functional-components/image/image-component"
import Tablecomponent from "./components/functional-components/table/table-component"

function App(){
  return(
    <div>
      <h1>hello world</h1>
      <Buttoncomponent/>
      <Orderedlist/>
      <Unorderedlist/>
      <ImageComponent/>
      <Tablecomponent/>
    </div>
  )
}

export default App


