// import SelfIntroduction from "./components/SelfIntroduction"
import Child from "./components/child.jsx"

function App() {
  return (
    <>
      {/* <SelfIntroduction /> */}

      <h1>Props Task</h1>

      <Child
        name="Allwin"
        city="Coimbatore"
        age={22}
        email="allwin@gmail.com"
        phone="9876543210"
      />


      <Child
  name="Arun"
  city="Chennai"
  age={23}
  email="arun@gmail.com"
  phone="9876543211"
/>

<Child
  name="Kumar"
  city="Trichy"
  age={24}
  email="kumar@gmail.com"
  phone="9876543212"
/>

<Child
  name="Ravi"
  city="Madurai"
  age={25}
  email="ravi@gmail.com"
  phone="9876543213"
/>

<Child
  name="Vijay"
  city="Salem"
  age={26}
  email="vijay@gmail.com"
  phone="9876543214"
/>
    </>
  )
}

export default App